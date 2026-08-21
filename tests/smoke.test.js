"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");
const { parseHTML } = require("linkedom");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

function loadApp(pathname = "/") {
  const { window, document } = parseHTML("<!doctype html><html><head></head><body><main id=\"app\" tabindex=\"-1\"></main></body></html>");
  window.Element.prototype.scrollIntoView = () => {};
  window.Element.prototype.focus = () => {};
  const saved = new Map();
  const context = {
    window,
    document,
    location: { pathname, search: "", origin: "https://example.test" },
    history: { pushState() {}, scrollRestoration: "auto" },
    navigator: { clipboard: { writeText: async () => {} } },
    localStorage: {
      getItem: (key) => saved.get(key) || null,
      setItem: (key, value) => saved.set(key, value),
      removeItem: (key) => saved.delete(key)
    },
    URLSearchParams,
    setTimeout,
    clearTimeout,
    requestAnimationFrame: (callback) => callback(),
    console
  };
  vm.createContext(context);
  vm.runInContext(`${read("dist/stories.js")}\n${read("dist/app.js")}`, context);
  return { window, document };
}

test("homepage renders three starters and twelve compact links", () => {
  const { document } = loadApp();
  assert.equal(document.querySelector("#app h1").textContent, "Choose your Tucson problem.");
  assert.equal(document.querySelectorAll(".featured-adventures .adventure-tile").length, 3);
  assert.equal(document.querySelectorAll(".compact-adventure").length, 12);
  assert.equal(document.querySelectorAll('[href*="the-address-that-isnt-in-tucson"]').length, 0);
});

test("a visitor can start, choose, and continue the Subway adventure", () => {
  const { window, document } = loadApp();
  const subway = document.querySelector('[data-start="the-pothole-subway"]');
  subway.dispatchEvent(new window.Event("click", { bubbles: true }));
  assert.equal(document.querySelectorAll(".choice").length, 4);
  assert.equal(document.querySelector(".adventure-context-title").textContent, "The Pothole That Built a Subway");

  document.querySelector(".choice").dispatchEvent(new window.Event("click", { bubbles: true }));
  assert.ok(document.querySelector(".consequence"));
  assert.ok(document.querySelector(".continue"));

  document.querySelector(".continue").dispatchEvent(new window.Event("click", { bubbles: true }));
  assert.ok(document.querySelector(".adventure-context-continued"));
  assert.equal(document.querySelectorAll(".choice").length, 4);
});

test("production HTML uses the consolidated scripts and contains no page watcher", () => {
  const html = read("dist/index.html");
  assert.match(html, /\/stories\.js\?v=1/);
  assert.match(html, /\/app\.js\?v=20/);
  assert.doesNotMatch(html, /MutationObserver|hawk-router|commute-router|remove-unrequested-address/);
  assert.equal((html.match(/class="(?:adventure-tile|compact-adventure)"/g) || []).length, 15);
});

test("story text matches the reviewed baseline", () => {
  const actual = crypto.createHash("sha256").update(read("dist/stories.js")).digest("hex");
  const expected = read("tests/story-baseline.sha256").trim();
  assert.equal(actual, expected, "Story text changed. Review it deliberately, then update the baseline.");
});
