"use strict";

(() => {
  const commutePath = `/adventures/${adventure16.slug}/`;
  let commuteState = { scene: 0, selected: null, history: [] };
  const esc = (value) => { const span = document.createElement("span"); span.textContent = value; return span.innerHTML; };
  const isCommute = () => location.pathname.startsWith(commutePath);

  function controls() {
    return `<div class="controls-wrap"><span class="controls-label">Adventure Controls</span><div class="controls"><button class="control" data-commute-action="share">Share</button><button class="control" data-commute-action="restart">Restart</button><button class="control" data-commute-action="back" ${commuteState.selected !== null || commuteState.history.length ? "" : "disabled"}>Back Up</button><button class="control" data-commute-action="end">End</button></div></div>`;
  }

  function renderCommute(position = "scene") {
    const scene = adventure16.scenes[commuteState.scene];
    const selected = commuteState.selected;
    const choices = scene.choices.map((choice, index) => selected !== null && selected !== index ? "" : `<button class="choice ${selected === index ? "selected" : ""}" data-commute-choice="${index}" ${selected !== null ? "disabled" : ""}>${esc(choice[1])}</button>`).join("");
    let result = "";
    if (selected !== null) {
      const choice = scene.choices[selected];
      result = `<div class="consequence" aria-live="polite"><p>${esc(choice[2])}</p>`;
      result += scene.final ? `<p class="ending-name">Ending: ${esc(choice[3])}</p><p>${esc(choice[4])}</p></div>` : `</div><button class="continue" data-commute-action="continue">Continue</button>`;
    }
    document.querySelector("#app").innerHTML = `<article class="card ${scene.final && selected !== null ? "ending" : ""}"><h2>${scene.title}</h2><div class="story">${scene.body}</div><p class="question">${scene.question}</p><div class="choices">${choices}</div>${result}${controls()}</article>`;
    const anchor = position === "result" ? document.querySelector(".consequence") : position === "decision" ? document.querySelector(".question") : document.querySelector("#app");
    requestAnimationFrame(() => anchor?.scrollIntoView({block:"start", behavior:"auto"}));
  }

  function addHomeTile() {
    if (isCommute() || document.querySelector(`[data-commute-start]`)) return;
    const card = document.querySelector("#app .card");
    if (!card || !/Welcome to Tucson Adventures/.test(card.textContent)) return;
    const tile = document.createElement("a");
    tile.className = "adventure-tile";
    tile.href = `${commutePath}?fresh=1`;
    tile.dataset.commuteStart = "1";
    tile.innerHTML = `<strong>${esc(adventure16.title)}</strong>`;
    card.append(tile);
  }

  document.addEventListener("click", async (event) => {
    const start = event.target.closest("[data-commute-start]");
    if (start) { event.preventDefault(); commuteState = {scene:0, selected:null, history:[]}; history.pushState({}, "", commutePath); renderCommute(); return; }
    if (!isCommute()) return;
    const choice = event.target.closest("[data-commute-choice]");
    if (choice && commuteState.selected === null) { event.preventDefault(); event.stopImmediatePropagation(); commuteState.selected = Number(choice.dataset.commuteChoice); renderCommute("result"); return; }
    const actionElement = event.target.closest("[data-commute-action]");
    if (!actionElement) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const action = actionElement.dataset.commuteAction;
    if (action === "continue") { commuteState.history.push({...commuteState}); commuteState.scene = adventure16.scenes[commuteState.scene].next; commuteState.selected = null; renderCommute(); }
    else if (action === "back" && commuteState.selected !== null) { commuteState.selected = null; renderCommute("decision"); }
    else if (action === "back" && commuteState.history.length) { commuteState = commuteState.history.pop(); renderCommute("result"); }
    else if (action === "restart") { commuteState = {scene:0, selected:null, history:[]}; renderCommute(); }
    else if (action === "end") { history.pushState({}, "", "/"); renderHome(); setTimeout(addHomeTile, 0); }
    else if (action === "share") {
      const data = {title: adventure16.title, text: `I just tried “${adventure16.title}” on Tucson Adventures. What would you do?`, url: `${location.origin}${commutePath}?fresh=1`};
      try { if (navigator.share) await navigator.share(data); else await navigator.clipboard.writeText(`${data.text} ${data.url}`); } catch (_) {}
    }
  }, true);

  window.addEventListener("popstate", () => { if (isCommute()) renderCommute(); else setTimeout(addHomeTile, 0); });
  new MutationObserver(() => { if (!isCommute()) addHomeTile(); }).observe(document.querySelector("#app"), {childList:true, subtree:true});
  if (isCommute()) renderCommute(); else addHomeTile();
})();
