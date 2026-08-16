"use strict";

const adventure = {
  slug: "the-pothole-subway",
  title: "The Pothole That Built a Subway",
  subtitle: "A routine street repair uncovers Tucson's most efficiently completed transit project.",
  scenes: [
    {
      title: "One Very Deep Pothole",
      body: `<p>At 9:17 Tuesday morning, a Sun Link streetcar rolls east along Congress Street.</p><p>At 9:18, it hits a pothole.</p><p>Not an ordinary Tucson pothole—the kind that rearranges your alignment and releases several new dashboard noises. This one has depth. History. Possibly its own climate.</p><p>The entire streetcar slides gently beneath Congress Street and disappears. Nobody is injured. Nobody even spills their coffee.</p><p>Underground, two steel rails stretch into a freshly exposed tunnel. The tunnel lights flicker on one by one toward somewhere the City of Tucson insists does not exist.</p><p>Your friend Elena, Tucson's acting deputy transportation director, calls. “The mayor wants the streetcar recovered. The passengers want to keep going. Someone has already renamed it the Tucson Subway on Wikipedia.”</p>`,
      question: "What should Tucson do?",
      choices: [
        ["A", "Send a recovery crew underground before the pothole gets bigger.", "The crew lowers a ladder. It keeps descending until the Fire Department asks whether anyone packed lunch. The passengers grow impatient, and the operator spots lights approaching from deeper in the tunnel."],
        ["B", "Let the operator continue and discover where the tunnel leads.", "The streetcar rolls forward twelve feet before Elena receives six calls about an unauthorized route extension. Then music echoes from the darkness and another set of headlights appears."],
        ["C", "Close Congress Street and deny Tucson ever owned a streetcar.", "Orange barricades appear with supernatural speed. Unfortunately, forty passengers are livestreaming from underground, and one has already sold TUCSON SUBWAY T-shirts."],
        ["D", "Declare the pothole completed and schedule a ribbon-cutting.", "Elena is silent. “That,” she finally says, “is the first option we discussed.” By 10:30, folding chairs surround the pothole beneath a banner: TUCSON UNDERGROUND—Completed ahead of schedule because nobody scheduled it."]
      ],
      next: 1
    },
    {
      title: "The Historic Line",
      body: `<p>The mayor cuts a ribbon. A reporter asks whether federal transit money paid for the project.</p><p>“No,” Elena explains. “Deferred street maintenance did.” The answer receives the morning's loudest applause.</p><p>Then a second streetcar emerges from the tunnel. It is covered in dust. Its destination sign reads:</p><div class="sign">EL CONQUISTADOR — 1948</div><p>An antique conductor looks up through the pothole. “Is this Tucson?”</p>`,
      question: "How do you respond?",
      choices: [
        ["A", "Climb aboard and question the conductor.", "He welcomes you aboard, punches a ticket dated 1948, and warns that the tunnels were not lost. They were sealed. Before he can explain why, the modern streetcar begins moving on its own."],
        ["B", "Evacuate both streetcars and seal the pothole.", "Everyone agrees until three commuters refuse to leave because this is the first Tucson connection that arrived early. The modern streetcar's destination sign suddenly changes."],
        ["C", "Ask where the antique streetcar has been for 78 years.", "“Waiting for Tucson to finish the surface roads,” the conductor says. He checks his watch. “We assumed another century.” The modern streetcar hums to life beside him."],
        ["D", "Add ‘Historic Line’ to the banner and hold another ribbon-cutting.", "City staff find a second ribbon. The mayor praises an expansion connecting Tucson's future to a past nobody knew it had. The conductor climbs onto his roof. “We weren't lost,” he shouts. “We were sent back!”"]
      ],
      next: 2
    },
    {
      title: "Two Mayors, One Pair of Scissors",
      body: `<p>The conductor reveals tunnels to the university, airport, and northwest Tucson. One is labeled:</p><div class="sign">CORTARO EXPRESS — NO RAILROAD DELAYS</div><p>Three people in the crowd weep.</p><p>The modern streetcar's sign changes to <strong>NEXT STOP: 2046</strong>. It rolls into the darkness—and returns moments later carrying a second, identical mayor.</p><p>Both mayors shout, “Don't let it leave!”</p>`,
      question: "What do you do about Tucson's duplicate mayor?",
      choices: [
        ["A", "Determine which mayor belongs to 2026.", "You ask each mayor to explain the current road plan. Both answer, “We're gathering community input.” The identity test is inconclusive."],
        ["B", "Interrogate the 1948 conductor.", "He says duplicate public officials are a known side effect of municipal time travel. “Usually the paperwork frightens one away.” Neither mayor moves."],
        ["C", "Send the train to 2046 for a completed road plan.", "It returns with a 900-page study recommending another study. The cover says FINAL DRAFT 7. Both mayors call it encouraging."],
        ["D", "Hold a third ribbon-cutting for Tucson's first duplicate mayor.", "Tucson may not be ready for time travel, but it has an entire closet of ceremonial ribbon. The future mayor wears a pin reading TUCSON 2046—STILL STUDYING THE ISSUE."]
      ],
      next: 3
    },
    {
      title: "Normal Service Resumes",
      body: `<p>A rumble passes beneath Congress Street. Manhole covers bounce. Parking meters begin accepting 1948 nickels.</p><p>Destination signs illuminate belowground:</p><div class="sign">Mount Lemmon Local<br>Airport Express<br>Marana—Pending Cooperation<br>Gem Show Seasonal<br>Somewhere Affordable</div><p>A recorded voice announces, “Please stand behind the yellow cactus.”</p><p>Both mayors appoint you Director of Accidental Transportation.</p>`,
      question: "What is your first official decision?",
      choices: [
        ["A", "Stop service until engineers inspect the tunnels.", "The inspection form asks for the original permit number. It was filed in 1947, so the engineers estimate a response by Thursday—2049."],
        ["B", "Open the Airport Express and test where it goes.", "The train returns carrying confused passengers from the old airport terminal and luggage bearing airline stickers nobody has seen since 1963."],
        ["C", "Board the Somewhere Affordable line immediately.", "You return the reflective vest. “I resign.” “You've been director for eleven seconds,” Elena says. “A personal record.” You leap aboard with renters, retirees, and one real-estate agent chained to the emergency brake."],
        ["D", "Open everything with Tucson's standard pothole waiver.", "The waiver is 37 pages long and asks passengers to accept risks involving heat, wildlife, temporal duplication, and “other.” Everyone signs without reading it." ]
      ],
      next: 4
    },
    {
      title: "Old Tucson—The Other One",
      body: `<p>The train stops beneath an artificial blue sky. Modest houses surround the station, each with solar panels, a garage, and a suspiciously green lawn.</p><div class="sign">OLD TUCSON<br><small>Not the movie studio. The other one.</small></div><p>A woman in 1948 clothing welcomes everyone. “Homes start at $8,900—but purchases require 1948 dollars.”</p><p>The real-estate agent opens a suitcase of old bills. “I've been preparing for this market correction my entire career.”</p>`,
      question: "What do you investigate first?",
      choices: [
        ["A", "Find a station bank that converts modern money.", "The teller offers a historically accurate exchange rate, then adds a modern convenience fee large enough to restore 2026 housing prices."],
        ["B", "Find out who built this neighborhood and hid it.", "Blueprints reveal Tucson Below: trains, shaded sidewalks, affordable homes, and no railroad crossings. The 1947 project was suspended after residents warned Tucson would lose its character if everything worked."],
        ["C", "Pool everyone's money and buy the subdivision.", "The plan collapses when nobody agrees who gets the corner house. The agent quietly acquires three streets while everyone argues."],
        ["D", "Race the agent using nickels from the parking meters.", "You arrive first with $14.35. It covers a utility shed, half a mailbox, and closing costs that have somehow traveled here from 2026."]
      ],
      next: 5
    },
    {
      title: "The Repair Crew Arrives",
      body: `<p>The artificial sky flickers. A warning sounds:</p><div class="quote">Surface pothole closing. Underground access will terminate in twelve minutes.</div><p>Elena calls. “Road crews finally arrived. The repair order was filed in 1983. Nobody wants to risk restarting the paperwork.”</p><p>If the opening closes, everyone may be trapped in 1948—with affordable houses, but no internet.</p>`,
      question: "What happens to Tucson Below?",
      choices: [
        ["A", "Evacuate everyone on the next train.", "Most board reluctantly. Three retirees refuse after calculating the property tax, and two remote workers stay because they still believe somebody will install fiber."],
        ["B", "Declare the pothole a historic landmark.", "The preservation request succeeds instantly, but requires the pothole to remain exactly as discovered—including the streetcar wedged inside it."],
        ["C", "Restart Tucson Below and let people remain voluntarily.", "You ask who wants air-conditioning, eleven-dollar property taxes, and no HOA. Forty-six people sit down immediately. The city reactivates around its new residents."],
        ["D", "Search the blueprints for another exit.", "You find seventeen exits. Six are beneath car washes, four beneath mattress stores, and one opens inside a city meeting that has been in executive session since 1951." ]
      ],
      next: 6
    },
    {
      title: "The Secret",
      body: `<p>The original charter contains one rule:</p><div class="quote">Tucson Below shall remain affordable only while its location remains secret.</div><p>Aboveground, a reporter broadcasts beside a sign advertising underground homes from $8,900. Cars line Congress Street. One driver has already arrived from Phoenix with cash.</p><p>Elena calls. “You have four minutes before this becomes Arizona's hottest housing market.”</p>`,
      question: "Make the final decision.",
      final: true,
      choices: [
        ["A", "Seal the tunnel and protect Tucson Below.", "The last streetcar returns to the surface. You pull the EMERGENCY SECRECY lever, and every map changes to ROUTINE UTILITY WORK—EXPECT DELAYS. Months later, Tucson Below is peaceful—until a train marked PHOENIX BELOW arrives carrying 300 investors. Far above, another pothole opens.", "The Market Finds a Way", "You saved Tucson Below from Tucson Above. You forgot about Phoenix."],
        ["B", "Allow residents, but ban investors and short-term rentals.", "The rules work for nearly six hours. Then the real-estate agent introduces “historic subterranean lodging experiences,” available nightly with a two-night minimum.", "The Loophole Line", "Tucson Below remains technically affordable and spiritually booked through March."],
        ["C", "Deny everything and blame the broadcast on heatstroke.", "The city issues a statement saying the subway, duplicate mayor, and $8,900 houses were a shared heat mirage. Tucson accepts this immediately. Phoenix does not—and sends surveyors.", "Officially, Nothing Happened", "Congress Street reopens. Nobody can explain why the parking meters still accept nickels."],
        ["D", "Buy every remaining house yourself.", "You become Tucson Below's largest property owner and raise rents to cover the cost of guarding its affordability. The residents replace you as mayor before lunch.", "You Became the Problem", "On the bright side, your eleven-second transportation career is no longer your shortest public appointment."]
      ]
    }
  ]
};

const app = document.querySelector("#app");
const state = { scene: 0, selected: null, history: [] };
const storyPath = `/adventures/${adventure.slug}/`;

function isStoryPath() { return location.pathname.startsWith(storyPath); }
function escapeText(value) { const span = document.createElement("span"); span.textContent = value; return span.innerHTML; }
function save() { localStorage.setItem(`tucson:${adventure.slug}`, JSON.stringify(state)); }
function load() {
  if (new URLSearchParams(location.search).has("fresh")) return;
  try {
    const saved = JSON.parse(localStorage.getItem(`tucson:${adventure.slug}`));
    if (saved && Number.isInteger(saved.scene)) Object.assign(state, saved);
  } catch (_) { /* A damaged save should never block the story. */ }
}
function focusMain() { app.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: "smooth" }); }
function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div"); toast.className = "toast"; toast.setAttribute("role", "status"); toast.textContent = message;
  document.body.append(toast); setTimeout(() => toast.remove(), 2200);
}
function controls() {
  return `<div class="controls-wrap"><span class="controls-label">Adventure Controls</span><div class="controls">
    <button class="control" data-action="share">Share</button>
    <button class="control" data-action="restart">Restart</button>
    <button class="control" data-action="back" ${state.history.length ? "" : "disabled"}>Back Up</button>
    <button class="control" data-action="end">End</button>
  </div></div>`;
}
function renderHome(push = false) {
  if (push) history.pushState({}, "", "/");
  app.innerHTML = `<section class="card"><p class="eyebrow">Interactive Tucson Stories</p><h1>Welcome to Tucson Adventures</h1><p class="lede">Everyday Tucson takes one strange turn. You decide what happens next.</p><a class="adventure-tile" href="${storyPath}?fresh=1" data-start><strong>Adventure 1: ${adventure.title}</strong><span>${adventure.subtitle}</span></a></section>`;
  focusMain();
}
function renderScene(push = false) {
  if (push) history.pushState({}, "", storyPath);
  const scene = adventure.scenes[state.scene];
  const selected = state.selected;
  const choices = scene.choices.map((choice, index) => {
    if (selected !== null && selected !== index) return "";
    return `<button class="choice ${selected === index ? "selected" : ""}" data-choice="${index}" ${selected !== null ? "disabled" : ""}><strong>${choice[0]}.</strong> ${escapeText(choice[1])}</button>`;
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
  app.innerHTML = `<article class="card ${scene.final && selected !== null ? "ending" : ""}"><p class="eyebrow">Adventure 1</p><h2>${scene.title}</h2><div class="story">${scene.body}</div><p class="question">${scene.question}</p><div class="choices">${choices}</div>${result}${controls()}</article>`;
  save(); focusMain();
}
function restart() {
  state.scene = 0; state.selected = null; state.history = []; localStorage.removeItem(`tucson:${adventure.slug}`); renderScene();
}
async function shareAdventure() {
  const data = { title: adventure.title, text: "I found a Tucson pothole deep enough to become public transportation. What would you do?", url: `${location.origin}${storyPath}?fresh=1` };
  try {
    if (navigator.share) await navigator.share(data);
    else { await navigator.clipboard.writeText(`${data.text} ${data.url}`); showToast("Adventure link copied"); }
  } catch (error) { if (error.name !== "AbortError") showToast("Sharing was unavailable"); }
}
document.addEventListener("click", (event) => {
  const start = event.target.closest("[data-start]");
  if (start) { event.preventDefault(); restart(); history.pushState({}, "", storyPath); renderScene(); return; }
  const home = event.target.closest("[data-home]");
  if (home) { event.preventDefault(); renderHome(true); return; }
  const choiceButton = event.target.closest("[data-choice]");
  if (choiceButton && state.selected === null) { state.selected = Number(choiceButton.dataset.choice); renderScene(); return; }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "continue") {
    state.history.push({ scene: state.scene, selected: state.selected });
    state.scene = adventure.scenes[state.scene].next; state.selected = null; renderScene();
  } else if (action === "back" && state.history.length) {
    const previous = state.history.pop(); state.scene = previous.scene; state.selected = previous.selected; renderScene();
  } else if (action === "restart") restart();
  else if (action === "share") shareAdventure();
  else if (action === "end") renderHome(true);
});
window.addEventListener("popstate", () => isStoryPath() ? renderScene() : renderHome());

if (isStoryPath()) { load(); renderScene(); } else renderHome();
