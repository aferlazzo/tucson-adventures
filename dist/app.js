"use strict";

const adventure1 = {
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
      title: "The Forgotten Line",
      body: `<p>The mayor cuts a ribbon. A reporter asks whether federal transit money paid for the project.</p><p>“No,” Elena explains. “Deferred street maintenance did.” The answer receives the morning's loudest applause.</p><p>Then a second streetcar emerges from the tunnel. It is covered in dust. Its destination sign reads:</p><div class="sign">EL CONQUISTADOR — HISTORIC LINE</div><p>The conductor, a very current and very confused transit mechanic named Luis, looks up through the pothole.</p><p>“I found this car in a sealed maintenance bay,” he says. “You need to see what's behind it.”</p>`,
      question: "How do you respond?",
      choices: [
        ["A", "Climb aboard and ask Luis what he found.", "Behind the maintenance bay, Luis found a tiled station, a control room, and a wall map showing tunnels beneath half of Tucson."],
        ["B", "Evacuate both streetcars and seal the pothole.", "Everyone agrees until three commuters refuse to leave because this is the first Tucson connection that arrived early. Luis warns that sealing the opening could block the only exit."],
        ["C", "Ask why the historic streetcar was sealed underground.", "Luis found no explanation—only a city order stamped PROJECT SUSPENDED and a handwritten note: Tucson would lose its character if everything worked."],
        ["D", "Add ‘Historic Line’ to the banner and hold another ribbon-cutting.", "City staff find a second ribbon. The mayor praises a historic expansion nobody knew existed. Luis interrupts to announce that the tunnel contains an entire forgotten transit system."]
      ],
      next: 2
    },
    {
      title: "The Map Tucson Misplaced",
      body: `<p>Luis leads everyone into the old control room. A wall map shows tunnels to the university, airport, and northwest Tucson. One line is labeled:</p><div class="sign">CORTARO EXPRESS — NO RAILROAD DELAYS</div><p>Three people in the crowd weep.</p><p>A filing cabinet contains the original 1948 plans. The underground system was nearly finished, tested, and then removed from every public map.</p><p>The mayor asks the obvious question: “Why would Tucson bury a working transit system?”</p><p>Luis points to one remaining locked cabinet marked <strong>DO NOT OPEN WITHOUT COMMUNITY INPUT</strong>.</p>`,
      question: "How do you investigate the abandoned system?",
      choices: [
        ["A", "Open the locked cabinet.", "Inside is a 900-page study recommending that the city study whether to preserve the completed system. The cover says FINAL DRAFT 7."],
        ["B", "Follow the Cortaro Express tunnel first.", "The rails are intact, the signals still have power, and the first sign reads CORTARO—17 MINUTES. Several witnesses accuse it of showing off."],
        ["C", "Inspect the old control panel before moving any trains.", "Most switches are clearly labeled. One large green button simply says RESUME NORMAL SERVICE."],
        ["D", "Ask the mayor to explain the missing public records.", "He promises full transparency, then discovers every relevant file has been classified as routine utility work. Even he looks impressed."]
      ],
      next: 3
    },
    {
      title: "Normal Service Resumes",
      body: `<p>Someone presses RESUME NORMAL SERVICE. A rumble passes beneath Congress Street. Manhole covers bounce. Parking meters begin accepting nickels.</p><p>Destination signs illuminate belowground:</p><div class="sign">Mount Lemmon Local<br>Airport Express<br>Marana—Pending Cooperation<br>Gem Show Seasonal<br>Somewhere Affordable</div><p>A recorded voice announces, “Please stand behind the yellow cactus.”</p><p>The mayor appoints you Director of Accidental Transportation.</p>`,
      question: "What is your first official decision?",
      choices: [
        ["A", "Stop service until engineers inspect the tunnels.", "The inspection form asks for the original permit number. It was filed in 1947, so the engineers estimate a response by Thursday—2049."],
        ["B", "Open the Airport Express and test where it goes.", "The train reaches a sealed platform beneath the airport. The escalator ends inside a janitor's closet that has been confusing maintenance workers for decades."],
        ["C", "Board the Somewhere Affordable line immediately.", "You return the reflective vest. “I resign.” “You've been director for eleven seconds,” Elena says. “A personal record.” You leap aboard with renters, retirees, and one real-estate agent chained to the emergency brake."],
        ["D", "Open everything with Tucson's standard pothole waiver.", "The waiver is 37 pages long and asks passengers to accept risks involving heat, wildlife, temporal duplication, and “other.” Everyone signs without reading it." ]
      ],
      next: 4
    },
    {
      title: "Old Tucson—The Other One",
      body: `<p>The train stops beneath an artificial blue sky. Unfinished model homes surround the station, each with a garage and a suspiciously green lawn.</p><div class="sign">OLD TUCSON<br><small>Not the movie studio. The other one.</small></div><p>A sales office still displays its original sign: <strong>Homes planned from $8,900.</strong></p><p>The real-estate agent stares at the abandoned subdivision and slowly opens her laptop.</p><p>“I've been preparing for this market correction my entire career.”</p>`,
      question: "What do you investigate first?",
      choices: [
        ["A", "Find out whether the old prices are legally binding.", "The fine print says prices were subject to final city approval. Elena laughs for almost a full minute."],
        ["B", "Find out who built this neighborhood and hid it.", "Blueprints reveal Tucson Below: trains, shaded sidewalks, affordable homes, and no railroad crossings. The 1947 project was suspended after residents warned Tucson would lose its character if everything worked."],
        ["C", "Pool everyone's money and buy the subdivision.", "The plan collapses when nobody agrees who gets the corner house. The agent quietly acquires three streets while everyone argues."],
        ["D", "Race the agent to file the first purchase offer.", "You arrive first. Unfortunately, the sales office requires an occupancy permit the city stopped issuing in 1949."]
      ],
      next: 5
    },
    {
      title: "The Repair Crew Arrives",
      body: `<p>The artificial sky flickers. A warning sounds:</p><div class="quote">Surface pothole closing. Underground access will terminate in twelve minutes.</div><p>Elena calls. “Road crews finally arrived. The repair order was filed in 1983. Nobody wants to risk restarting the paperwork.”</p><p>If the opening closes, everyone may be trapped underground—with affordable model homes, but no internet.</p>`,
      question: "What happens to Tucson Below?",
      choices: [
        ["A", "Evacuate everyone on the next train.", "Most board reluctantly. Three retirees refuse after calculating the property tax, and two remote workers stay because they still believe somebody will install fiber."],
        ["B", "Declare the pothole a historic landmark.", "The preservation request succeeds instantly, but requires the pothole to remain exactly as discovered—including the streetcar wedged inside it."],
        ["C", "Restart Tucson Below and let people remain voluntarily.", "You ask who wants affordable housing, no surface traffic, and an HOA that has not yet been formed. Forty-six people sit down immediately."],
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
        ["C", "Deny everything and blame the broadcast on heatstroke.", "The city issues a statement saying the subway, forgotten tunnels, and $8,900 model homes were a shared heat mirage. Tucson accepts this immediately. Phoenix does not—and sends surveyors.", "Officially, Nothing Happened", "Congress Street reopens. Nobody can explain why the parking meters still accept nickels."],
        ["D", "Buy every remaining house yourself.", "You become Tucson Below's largest property owner and raise rents to cover the cost of guarding its affordability. The residents replace you as mayor before lunch.", "You Became the Problem", "On the bright side, your eleven-second transportation career is no longer your shortest public appointment."]
      ]
    }
  ]
};

const adventure2 = {
  slug: "the-mural-map",
  title: "The Murals That Hid a Treasure Map",
  subtitle: "A painted downtown secret points toward a forgotten wash, Davis-Monthan, and something Tucson buried twice.",
  scenes: [
    {
      title: "The Saguaro Points East",
      body: `<p>You are photographing a new mural downtown when the afternoon sun hits it sideways. The painted saguaro casts a shadow that does not match the real sun.</p><p>The shadow points to a tiny symbol hidden in the mural: a turquoise airplane above three wavy lines.</p><p>Across the street, another mural contains the same airplane. Then a third. Together, their painted shadows form an arrow toward an old drainage wash rumored to run east toward Davis-Monthan Air Force Base.</p><p>A woman named Marisol, who helped paint one of the murals, watches you connect the clues.</p><p>“You're not the first person to notice,” she says. “You're just the first who didn't disappear afterward.”</p>`,
      question: "What do you ask Marisol?",
      choices: [
        ["A", "Ask who designed the hidden symbols.", "Marisol names Arturo Vélez, a muralist and amateur Tucson historian who vanished from public life twelve years ago. His last known project was painted over by the city—except the symbols survived underneath."],
        ["B", "Ask what supposedly lies at the end of the map.", "“Not gold,” she says. “Something Tucson decided was easier to lose.” She shows you a photograph of a brass city box stamped PROPERTY OF THE DESERT SKY PROJECT."],
        ["C", "Ask who else followed the clues.", "Marisol lists a surveyor, a retired airman, and a city archivist. All returned safely—but each refused to discuss what happened in the wash."],
        ["D", "Photograph every symbol before someone paints over them.", "Your phone arranges the pictures by location. The murals form a precise route ending at a neglected wash beneath an abandoned service road. A fourth image appears in the sequence—one you never took."]
      ],
      next: 1
    },
    {
      title: "The Wash Nobody Maintains",
      body: `<p>You and Marisol follow the mural route. The pavement ends at a chain-link fence with a sign:</p><div class="sign">WASH MAINTENANCE SCHEDULE<br><small>Last revised: eventually</small></div><p>Beyond it, mesquite and trash have swallowed the channel. A small encampment occupies the only dry, level ground beneath the service road.</p><p>Several people live there. They have chairs, water jugs, bicycles, and considerably better knowledge of the wash than the city map.</p><p>A resident named Leon notices the mural photographs on your phone.</p><p>“Arturo's map,” he says. “You should've brought better shoes.”</p>`,
      question: "How do you approach the encampment?",
      choices: [
        ["A", "Ask Leon for permission to follow the map through their living area.", "Leon appreciates being asked. He says the map's final marker is beneath the camp—but digging there could collapse the only stable patch of ground they have."],
        ["B", "Offer supplies in exchange for information.", "Leon accepts the water but rejects the bargain. “Information isn't a vending machine.” After a pause, he adds that he has seen men in city uniforms searching at night."],
        ["C", "Explain the full mystery and ask everyone what they know.", "The residents compare memories. Painted stones appear after monsoons, aircraft sounds echo from a sealed culvert, and city crews inspect everything except the blocked drainage."],
        ["D", "Stay outside the camp and search for another route.", "You find a storm grate fifty yards upstream. Someone has painted the turquoise airplane inside it, along with the words ASK LEON FIRST."]
      ],
      next: 2
    },
    {
      title: "The Ground Is the Clue",
      body: `<p>Leon unfolds a hand-drawn map of the wash. It includes flood paths, safe crossings, rattlesnake sightings, and one perfect circle beneath the center of camp.</p><p>“We didn't put that there,” he says. “The ground stays cool, even in June.”</p><p>Marisol overlays the mural route. Every painted shadow converges on the circle.</p><p>Then a city truck stops above the wash. Two workers unload a sign reading <strong>EMERGENCY BEAUTIFICATION PROJECT</strong> and begin measuring the camp for removal.</p><p>Leon looks at you. “Funny timing.”</p>`,
      question: "What do you do first?",
      choices: [
        ["A", "Confront the workers about the suspicious project.", "They insist they are planting decorative gravel. One clipboard contains a diagram of the exact circle beneath the camp—with DAVIS-MONTHAN TRANSFER stamped across it."],
        ["B", "Document everything before anyone is displaced.", "Marisol records the site while residents narrate what belongs to whom. Your video captures one worker whispering, “Get the box before the base liaison arrives.”"],
        ["C", "Ask the residents whether they want to move temporarily so everyone can investigate.", "They agree only after establishing where their belongings will go and who will protect them. Leon produces a pry bar and says, “Now we're a project team.”"],
        ["D", "Create a distraction by announcing a newly discovered historic mural.", "Within minutes, reporters, preservationists, and three competing neighborhood groups arrive. The workers cannot dig unnoticed—but neither can you."]
      ],
      next: 3
    },
    {
      title: "The Desert Sky Box",
      body: `<p>The circle is not soil. Beneath a thin layer of dirt lies a concrete hatch painted to resemble the wash floor.</p><p>Leon clears its edge without disturbing the camp's structures. Marisol finds four colored tiles matching four murals. When pressed in the correct order, the hatch opens.</p><p>Inside is a brass box, a reel of microfilm, and a 1962 map showing a tunnel running toward Davis-Monthan.</p><p>The box bears a warning:</p><div class="quote">DESERT SKY PROJECT<br>OPEN ONLY IF TUCSON HAS LEARNED TO MAINTAIN ITS WASHES</div><p>Everyone looks at the blocked channel.</p><p>“So,” Leon says, “never?”</p>`,
      question: "Who should open the box?",
      choices: [
        ["A", "Let Leon open it because it was beneath his home.", "Inside he finds photographs, property deeds, and a letter naming the people whose neighborhoods were cleared for a secret Cold War drainage project. Several names belong to families still in Tucson."],
        ["B", "Let Marisol open it because the muralists preserved the map.", "She finds Arturo's final sketchbook. The murals were not pointing to treasure; they were preserving evidence the official maps had erased."],
        ["C", "Wait for an archivist and witnesses.", "A university archivist arrives with gloves, forms, and the delighted expression of someone discovering paperwork more dramatic than fiction. The city workers quietly attempt to leave."],
        ["D", "Do not open it—scan the contents through the gap first.", "Your phone camera reveals old deeds, military correspondence, and a modern document dated next week authorizing the box's destruction."]
      ],
      next: 4
    },
    {
      title: "What Tucson Buried",
      body: `<p>The records reveal the Desert Sky Project: a 1960s plan to create an emergency flood-and-evacuation corridor between central Tucson and the air base.</p><p>The tunnel was completed, then sealed after officials discovered its route crossed land taken from several families without proper compensation.</p><p>Arturo found the records decades later. He hid their location across Tucson's murals so no single wall could erase the truth.</p><p>A retired Air Force engineer arrives at the wash. She confirms the tunnel still exists—and warns that tonight's monsoon could force water through it for the first time in sixty years.</p><p>The encampment sits directly above the failing entrance.</p>`,
      question: "What is the immediate priority?",
      choices: [
        ["A", "Move everyone and their belongings to safe ground before the storm.", "Residents, artists, and reporters form a line. Nothing is abandoned. The evacuation finishes just as muddy water enters the upper wash."],
        ["B", "Open the tunnel to restore the wash's drainage.", "The old gate moves six inches, groans, and releases enough cold air to scatter every document not being held down. Water begins finding the opening."],
        ["C", "Force the city workers to call emergency services.", "Their routine beautification job abruptly becomes an official flood response. For once, the correct department arrives before the water."],
        ["D", "Broadcast the evidence live so nobody can bury it again.", "Thousands watch as Leon explains both the history and the current danger. Public attention brings help quickly—and twelve amateur treasure hunters who are immediately handed sandbags." ]
      ],
      next: 5
    },
    {
      title: "The Last Painted Arrow",
      body: `<p>The monsoon hits. Water tears through the neglected wash, lifts years of debris, and pours into the reopened tunnel exactly as the 1962 engineers intended.</p><p>The encampment is empty and everyone is safe. The Desert Sky records are secured. By morning, reporters have connected the seized land to living descendants.</p><p>Then the flood exposes one final mural beneath the service road: a line of people holding a map, each pointing toward the next person.</p><p>Under it, Arturo painted:</p><div class="quote">THE TREASURE IS WHO REMEMBERS WHERE THEY TOLD YOU NOT TO LOOK.</div><p>The city offers to take possession of the box, restore the wash, and “temporarily relocate” the residents.</p>`,
      question: "Who controls what happens next?",
      final: true,
      choices: [
        ["A", "Create a resident-led trust for the records and restoration money.", "The families named in the deeds join the wash residents and muralists on the governing board. The wash is repaired, the history remains public, and Leon becomes the only Tucson infrastructure chairman who actually lives beside the infrastructure.", "The People Hold the Map", "The treasure was not gold. It was proof—and control over what the proof changed."],
        ["B", "Turn everything over to the city with full public oversight.", "The records enter the archive under cameras and court orders. Maintenance begins after only nine meetings, which Tucson historians classify as miraculous speed.", "Officially Unearthed", "The city finally preserves something before accidentally paving over it."],
        ["C", "Build a protected mural trail telling the entire story.", "Artists paint the route from downtown to the wash. Every mural includes a contribution from a displaced family or encampment resident. Tourists follow the trail expecting treasure and leave knowing whose ground they walked on.", "The Map Becomes the Monument", "Nothing is hidden anymore—except one tiny turquoise airplane Marisol refuses to explain."],
        ["D", "Return the box underground but publish copies everywhere.", "The original box goes back beneath a new flood-safe marker. Copies appear in libraries, schools, archives, and every muralist's studio. The city can rebury the box, but not the story.", "Buried, Not Forgotten", "During the next monsoon, a painted arrow appears beneath a different Tucson bridge."]
      ]
    }
  ]
};

const adventures = [adventure1, adventure2];
let adventure = adventures.find((item) => location.pathname.includes(`/adventures/${item.slug}/`)) || adventure1;

const app = document.querySelector("#app");
const state = { scene: 0, selected: null, history: [] };
let storyPath = `/adventures/${adventure.slug}/`;

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
function positionView(target = "scene") {
  const resetScroll = () => {
    const anchor = target === "result" ? document.querySelector(".choice.selected") : app;
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
    <button class="control" data-action="back" ${state.history.length ? "" : "disabled"}>Back Up</button>
    <button class="control" data-action="end">End</button>
  </div></div>`;
}
function renderHome(push = false) {
  if (push) history.pushState({}, "", "/");
  const tiles = adventures.map((item, index) => `<a class="adventure-tile" href="/adventures/${item.slug}/?fresh=1" data-start="${item.slug}"><strong>Adventure ${index + 1}: ${item.title}</strong><span>${item.subtitle}</span></a>`).join("");
  app.innerHTML = `<section class="card"><p class="eyebrow">Interactive Tucson Stories</p><h1>Welcome to Tucson Adventures</h1><p class="lede">Everyday Tucson takes one strange turn. You decide what happens next.</p>${tiles}</section>`;
  positionView("scene");
}
function renderScene(push = false, position = "scene") {
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
  const adventureNumber = adventures.indexOf(adventure) + 1;
  app.innerHTML = `<article class="card ${scene.final && selected !== null ? "ending" : ""}"><p class="eyebrow">Adventure ${adventureNumber}</p><h2>${scene.title}</h2><div class="story">${scene.body}</div><p class="question">${scene.question}</p><div class="choices">${choices}</div>${result}${controls()}</article>`;
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
  const start = event.target.closest("[data-start]");
  if (start) {
    event.preventDefault();
    adventure = adventures.find((item) => item.slug === start.dataset.start) || adventure1;
    storyPath = `/adventures/${adventure.slug}/`;
    restart(); history.pushState({}, "", storyPath); renderScene(); return;
  }
  const home = event.target.closest("[data-home]");
  if (home) { event.preventDefault(); renderHome(true); return; }
  const choiceButton = event.target.closest("[data-choice]");
  if (choiceButton && state.selected === null) { state.selected = Number(choiceButton.dataset.choice); renderScene(false, "result"); return; }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "continue") {
    state.history.push({ scene: state.scene, selected: state.selected });
    state.scene = adventure.scenes[state.scene].next; state.selected = null; renderScene();
  } else if (action === "back" && state.history.length) {
    const previous = state.history.pop(); state.scene = previous.scene; state.selected = previous.selected; renderScene(false, "result");
  } else if (action === "restart") restart();
  else if (action === "share") shareAdventure();
  else if (action === "end") renderHome(true);
});
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.addEventListener("popstate", () => isStoryPath() ? renderScene() : renderHome());

if (isStoryPath()) { load(); renderScene(); } else renderHome();
