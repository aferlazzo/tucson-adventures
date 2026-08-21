"use strict";

const adventures = [adventure1, adventure2, adventure3, adventure4, adventure5, adventure6, adventure7, adventure8, adventure9, adventure10, adventure11, adventure12, adventure14, adventure15, adventure16];
const featuredSlugs = ["the-pothole-subway", "signs-of-trouble", "biosphere-2-misplaced-the-oxygen"];
let adventure = adventures.find((item) => location.pathname.includes(`/adventures/${item.slug}/`)) || adventure1;

const app = document.querySelector("#app");
const state = { scene: 0, selected: null, history: [] };
let storyPath = `/adventures/${adventure.slug}/`;
let dailyIndex = 0;
let dailyChoice = null;

const dailyChallenges = [
  {
    kicker: "Today's Tucson problem",
    title: "A pothole has accidentally completed Tucson's subway.",
    setup: "A Sun Link streetcar disappears beneath Congress Street. The passengers are fine, the tunnel lights work, and somebody has already printed T-shirts.",
    question: "What should Tucson do first?",
    choices: [
      ["Inspect it before opening.", "Engineers request the original permit number. It was filed in 1947, so they expect an answer by Thursday—2049."],
      ["Begin passenger service immediately.", "The first train leaves for Somewhere Affordable. It is standing-room only before the doors open."],
      ["Commission a seven-year study.", "The study concludes that Tucson should commission a study. Everyone congratulates the committee on finishing early."],
      ["Hold the ribbon-cutting now.", "Correct. Tucson cannot risk learning what it has completed before taking credit for it."]
    ],
    full: "/adventures/the-pothole-subway/?fresh=1"
  },
  {
    kicker: "Another Tucson problem",
    title: "Every Tucson street is now one-way.",
    setup: "The efficiency plan went into effect overnight. Unfortunately, all streets point away from wherever you are going.",
    question: "How do you reach your destination?",
    choices: [
      ["Keep making right turns.", "You arrive home three days later from the opposite direction, carrying groceries you do not remember buying."],
      ["Follow the car ahead.", "It belongs to another lost driver who has been following you since Ina Road."],
      ["Wait for the signs to be corrected.", "A crew arrives promptly and adds DETOUR signs pointing toward the original signs."],
      ["Declare your driveway a transportation hub.", "Sun Tran adds a bench. Your HOA immediately prohibits waiting for buses."]
    ]
  },
  {
    kicker: "Another Tucson problem",
    title: "Your flight to Phoenix makes an unscheduled stop at the Boneyard.",
    setup: "The pilot calls it a brief operational pause. Thousands of retired aircraft surround you. Your concern is more immediate: you need a restroom.",
    question: "What do you do?",
    choices: [
      ["Ask the flight attendant.", "She points toward a retired cargo plane and says, ‘Second door on the left. Probably.’"],
      ["Follow the restroom sign.", "It was painted on a jet in 1978 and is currently facing Oklahoma."],
      ["Ask the pilot to continue to Phoenix.", "Phoenix requests that the aircraft remain in Tucson until it has considered what it did."],
      ["Choose a private-looking aircraft.", "You accidentally board Air Force One. Not the current one, but the restroom is immaculate."]
    ]
  },
  {
    kicker: "Another Tucson problem",
    title: "The railroad crossing at Cortaro has been down since breakfast.",
    setup: "No train is visible. Drivers have formed a temporary civilization with its own economy and breakfast burrito vendor.",
    question: "What is your next move?",
    choices: [
      ["Turn around and find another crossing.", "Your navigation app politely routes you back to Cortaro, where your former parking space has been subleased."],
      ["Wait five more minutes.", "The crossing bell interprets this as a binding ten-year commitment."],
      ["Join the new community.", "You are elected treasurer because you have exact change and visible patience."],
      ["Take the newly discovered subway.", "You reach the other side in seventeen minutes and spend sixteen of them distrusting the experience."]
    ]
  }
];

function isStoryPath() { return location.pathname.startsWith(storyPath); }
function isAboutPath() { return location.pathname.startsWith("/about"); }
function isDailyPath() { return location.pathname.startsWith("/daily"); }
function escapeText(value) { const span = document.createElement("span"); span.textContent = value; return span.innerHTML; }
function save() { localStorage.setItem(`tucson:${adventure.slug}`, JSON.stringify(state)); }
function load() {
  if (new URLSearchParams(location.search).has("fresh")) return;
  try {
    const saved = JSON.parse(localStorage.getItem(`tucson:${adventure.slug}`));
    if (saved && Number.isInteger(saved.scene)) Object.assign(state, saved);
  } catch (_) { /* A damaged save should never block the story. */ }
}
function positionView(target = "scene") {
  const resetScroll = () => {
    const anchor = target === "result"
      ? document.querySelector(".choice.selected, .daily-choice.selected")
      : target === "decision"
        ? document.querySelector(".question")
        : app;
    if (anchor) anchor.scrollIntoView({ block: "start", behavior: "auto" });
  };
  resetScroll();
  requestAnimationFrame(() => {
    resetScroll();
    app.focus({ preventScroll: true });
  });
}
function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div"); toast.className = "toast"; toast.setAttribute("role", "status"); toast.textContent = message;
  document.body.append(toast); setTimeout(() => toast.remove(), 2200);
}
function controls() {
  return `<div class="controls-wrap"><span class="controls-label">Adventure Controls</span><div class="controls">
    <button class="control" data-action="share">Share</button>
    <button class="control" data-action="restart">Restart</button>
    <button class="control" data-action="back" ${state.selected !== null || state.history.length ? "" : "disabled"}>Back Up</button>
    <button class="control" data-action="end">End</button>
  </div></div>`;
}
function renderHome(push = false) {
  if (push) history.pushState({}, "", "/");
  const link = (item, compact = false) => `<a class="${compact ? "compact-adventure" : "adventure-tile"}" href="/adventures/${item.slug}/?fresh=1" data-start="${item.slug}"><strong>${item.title}</strong>${compact ? "" : `<span>${item.subtitle}</span>`}</a>`;
  const featured = featuredSlugs.map((slug) => link(adventures.find((item) => item.slug === slug))).join("");
  const remaining = adventures.filter((item) => !featuredSlugs.includes(item.slug)).map((item) => link(item, true)).join("");
  app.innerHTML = `<section class="card home-card"><p class="eyebrow">Interactive Tucson Stories</p><h1>Choose your Tucson problem.</h1><p class="lede">Start with something ordinary. Make one reasonable decision. Then watch Tucson turn it into a situation. No local knowledge required.</p><h2 class="section-heading">Start here</h2><div class="featured-adventures">${featured}</div><details class="browse-adventures"><summary>Browse all ${adventures.length} adventures</summary><div class="compact-adventure-list">${remaining}</div></details></section>`;
  positionView("scene");
}
function renderAbout(push = false) {
  if (push) history.pushState({}, "", "/about/");
  app.innerHTML = `<section class="card about-copy"><p class="eyebrow">About Tucson Adventures</p><h1>Strange Tucson stories. Your decisions.</h1><p class="lede">Tucson Adventures is a collection of interactive stories written by <strong>Tony Ferlazzo</strong>. Each adventure turns a recognizable piece of Tucson life into an absurd problem and lets you decide what happens next.</p><h2>A work of fiction</h2><p class="about-note"><strong>All Tucson Adventures are works of fiction.</strong> The characters, organizations, events, dialogue, and situations are invented for entertainment. Any resemblance to actual people or events is coincidental—or Tucson being Tucson.</p><p>Real places and familiar local frustrations may inspire the setting, but the stories are not news reports, accusations, or accounts of actual events.</p><h2>About the author</h2><p><strong>Tony Ferlazzo</strong> is the author and creator of Tucson Adventures. He lives in the Tucson area and writes interactive stories about the strange decisions desert life makes for you.</p><a class="about-home" href="/" data-home>Explore the adventures</a></section>`;
  positionView("scene");
}
function renderDaily(push = false) {
  if (push) history.pushState({}, "", "/daily/");
  const item = dailyChallenges[dailyIndex];
  const choices = item.choices.map((choice, index) => {
    if (dailyChoice !== null && dailyChoice !== index) return "";
    return `<button class="daily-choice ${dailyChoice === index ? "selected" : ""}" data-daily-choice="${index}" ${dailyChoice !== null ? "disabled" : ""}>${escapeText(choice[0])}</button>`;
  }).join("");
  const result = dailyChoice === null ? "" : `<div class="daily-result" aria-live="polite"><span class="result-label">Your Tucson consequence</span><p>${escapeText(item.choices[dailyChoice][1])}</p></div><div class="daily-next-row"><button class="daily-next" data-action="daily-next">Give me another Tucson problem</button>${item.full ? `<a class="daily-full" href="${item.full}">Play the full adventure</a>` : `<a class="daily-full" href="/" data-home>Browse full adventures</a>`}</div>`;
  app.innerHTML = `<section class="card daily-card"><p class="eyebrow">Tucson Question of the Day</p><p class="daily-kicker">${item.kicker}</p><h1>${item.title}</h1><p class="daily-setup">${item.setup}</p><p class="question">${item.question}</p><div class="daily-choices">${choices}</div>${result}<p class="daily-test-note">Test edition · No signup · No vote totals yet</p></section>`;
  positionView(dailyChoice === null ? "scene" : "result");
}
function renderScene(push = false, position = "scene") {
  if (push) history.pushState({}, "", storyPath);
  const scene = adventure.scenes[state.scene];
  const selected = state.selected;
  const choices = scene.choices.map((choice, index) => {
    if (selected !== null && selected !== index) return "";
    return `<button class="choice ${selected === index ? "selected" : ""}" data-choice="${index}" ${selected !== null ? "disabled" : ""}>${escapeText(choice[1])}</button>`;
  }).join("");
  let result = "";
  if (selected !== null) {
    const choice = scene.choices[selected];
    result = `<div class="consequence" aria-live="polite"><p>${escapeText(choice[2])}</p>`;
    if (scene.final) {
      result += `<p class="ending-name">Ending: ${escapeText(choice[3])}</p><p>${escapeText(choice[4])}</p></div>`;
    } else {
      result += `</div><button class="continue" data-action="continue">Continue</button>`;
    }
  }
  const continued = state.scene > 0 ? `<span class="adventure-context-continued">continued</span>` : "";
  app.innerHTML = `<article class="card ${scene.final && selected !== null ? "ending" : ""}"><div class="adventure-context"><p class="adventure-context-title">${escapeText(adventure.title)}</p>${continued}</div><h2>${scene.title}</h2><div class="story">${scene.body}</div><p class="question">${scene.question}</p><div class="choices">${choices}</div>${result}${controls()}</article>`;
  save(); positionView(position);
}
function restart() {
  state.scene = 0; state.selected = null; state.history = []; localStorage.removeItem(`tucson:${adventure.slug}`); renderScene();
}
async function shareAdventure() {
  const data = { title: adventure.title, text: `I just tried “${adventure.title}” on Tucson Adventures. What would you do?`, url: `${location.origin}${storyPath}?fresh=1` };
  try {
    if (navigator.share) await navigator.share(data);
    else { await navigator.clipboard.writeText(`${data.text} ${data.url}`); showToast("Adventure link copied"); }
  } catch (error) { if (error.name !== "AbortError") showToast("Sharing was unavailable"); }
}
document.addEventListener("click", (event) => {
  const dailyButton = event.target.closest("[data-daily-choice]");
  if (dailyButton && dailyChoice === null) {
    dailyChoice = Number(dailyButton.dataset.dailyChoice); renderDaily(); return;
  }
  const start = event.target.closest("[data-start]");
  if (start) {
    event.preventDefault();
    adventure = adventures.find((item) => item.slug === start.dataset.start) || adventure1;
    storyPath = `/adventures/${adventure.slug}/`;
    restart(); history.pushState({}, "", storyPath); renderScene(); return;
  }
  const home = event.target.closest("[data-home]");
  if (home) { event.preventDefault(); renderHome(true); return; }
  const about = event.target.closest("[data-about]");
  if (about) { event.preventDefault(); renderAbout(true); return; }
  const choiceButton = event.target.closest("[data-choice]");
  if (choiceButton && state.selected === null) { state.selected = Number(choiceButton.dataset.choice); renderScene(false, "result"); return; }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "daily-next") {
    dailyIndex = (dailyIndex + 1) % dailyChallenges.length; dailyChoice = null; renderDaily();
  } else if (action === "continue") {
    state.history.push({ scene: state.scene, selected: state.selected });
    state.scene = adventure.scenes[state.scene].next; state.selected = null; renderScene();
  } else if (action === "back" && state.selected !== null) {
    state.selected = null; renderScene(false, "decision");
  } else if (action === "back" && state.history.length) {
    const previous = state.history.pop(); state.scene = previous.scene; state.selected = previous.selected; renderScene(false, "result");
  } else if (action === "restart") restart();
  else if (action === "share") shareAdventure();
  else if (action === "end") renderHome(true);
});
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.addEventListener("popstate", () => isAboutPath() ? renderAbout() : isDailyPath() ? renderDaily() : isStoryPath() ? renderScene() : renderHome());

if (isAboutPath()) renderAbout();
else if (isDailyPath()) renderDaily();
else if (isStoryPath()) { load(); renderScene(); }
else renderHome();
