"use strict";

(() => {
  const hawkPath = `/adventures/${adventure15.slug}/`;
  let hawkState = { scene: 0, selected: null, history: [] };

  const esc = (value) => { const span = document.createElement("span"); span.textContent = value; return span.innerHTML; };
  const isHawk = () => location.pathname.startsWith(hawkPath);

  function controls() {
    return `<div class="controls-wrap"><span class="controls-label">Adventure Controls</span><div class="controls"><button class="control" data-hawk-action="share">Share</button><button class="control" data-hawk-action="restart">Restart</button><button class="control" data-hawk-action="back" ${hawkState.selected !== null || hawkState.history.length ? "" : "disabled"}>Back Up</button><button class="control" data-hawk-action="end">End</button></div></div>`;
  }

  function renderHawk(position = "scene") {
    const scene = adventure15.scenes[hawkState.scene];
    const selected = hawkState.selected;
    const choices = scene.choices.map((choice, index) => selected !== null && selected !== index ? "" : `<button class="choice ${selected === index ? "selected" : ""}" data-hawk-choice="${index}" ${selected !== null ? "disabled" : ""}>${esc(choice[1])}</button>`).join("");
    let result = "";
    if (selected !== null) {
      const choice = scene.choices[selected];
      result = `<div class="consequence" aria-live="polite"><p>${esc(choice[2])}</p>`;
      result += scene.final ? `<p class="ending-name">Ending: ${esc(choice[3])}</p><p>${esc(choice[4])}</p></div>` : `</div><button class="continue" data-hawk-action="continue">Continue</button>`;
    }
    document.querySelector("#app").innerHTML = `<article class="card ${scene.final && selected !== null ? "ending" : ""}"><h2>${scene.title}</h2><div class="story">${scene.body}</div><p class="question">${scene.question}</p><div class="choices">${choices}</div>${result}${controls()}</article>`;
    const anchor = position === "result" ? document.querySelector(".choice.selected") : position === "decision" ? document.querySelector(".question") : document.querySelector("#app");
    anchor?.scrollIntoView({block:"start", behavior:"auto"});
  }

  function addHomeTile() {
    if (isHawk() || document.querySelector(`[data-hawk-start]`)) return;
    const card = document.querySelector("#app .card");
    if (!card || !/Welcome to Tucson Adventures/.test(card.textContent)) return;
    const tile = document.createElement("a");
    tile.className = "adventure-tile";
    tile.href = `${hawkPath}?fresh=1`;
    tile.dataset.hawkStart = "1";
    tile.innerHTML = `<strong>${esc(adventure15.title)}</strong>`;
    card.append(tile);
  }

  document.addEventListener("click", async (event) => {
    const start = event.target.closest("[data-hawk-start]");
    if (start) {
      event.preventDefault(); hawkState = {scene:0, selected:null, history:[]}; history.pushState({}, "", hawkPath); renderHawk(); return;
    }
    if (!isHawk()) return;
    const choice = event.target.closest("[data-hawk-choice]");
    if (choice && hawkState.selected === null) { hawkState.selected = Number(choice.dataset.hawkChoice); renderHawk("result"); return; }
    const action = event.target.closest("[data-hawk-action]")?.dataset.hawkAction;
    if (action === "continue") { hawkState.history.push({...hawkState}); hawkState.scene = adventure15.scenes[hawkState.scene].next; hawkState.selected = null; renderHawk(); }
    else if (action === "back" && hawkState.selected !== null) { hawkState.selected = null; renderHawk("decision"); }
    else if (action === "back" && hawkState.history.length) { hawkState = hawkState.history.pop(); renderHawk("result"); }
    else if (action === "restart") { hawkState = {scene:0, selected:null, history:[]}; renderHawk(); }
    else if (action === "end") { history.pushState({}, "", "/"); renderHome(); setTimeout(addHomeTile, 0); }
    else if (action === "share") {
      const data = {title: adventure15.title, text: `I just tried “${adventure15.title}” on Tucson Adventures. What would you do?`, url: `${location.origin}${hawkPath}?fresh=1`};
      try { if (navigator.share) await navigator.share(data); else await navigator.clipboard.writeText(`${data.text} ${data.url}`); } catch (_) {}
    }
  }, true);

  window.addEventListener("popstate", () => { if (isHawk()) renderHawk(); else setTimeout(addHomeTile, 0); });
  new MutationObserver(() => { if (!isHawk()) addHomeTile(); }).observe(document.querySelector("#app"), {childList:true, subtree:true});

  if (isHawk()) renderHawk(); else addHomeTile();
})();
