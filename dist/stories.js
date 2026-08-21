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
      body: `<p>Luis leads everyone into the old control room. A wall map shows tunnels to the university, airport, and northwest Tucson. One line is labeled:</p><div class="sign">CORTARO EXPRESS — NO RAILROAD DELAYS</div><p>Three people in the crowd weep.</p><p>A narrow construction tunnel branches west and joins an abandoned mine shaft near the present-day Caterpillar offices. Luis explains that workers used the shaft to build the system without tearing up downtown.</p><p>Elena studies the map. “So Tucson put a mining office beside a forgotten mine?”</p><p>“Convenient parking,” Luis says.</p><p>A filing cabinet contains the original 1948 plans. The underground system was nearly finished, tested, and then removed from every public map.</p><p>The mayor asks the obvious question: “Why would Tucson bury a working transit system?”</p><p>Luis points to one remaining locked cabinet marked <strong>DO NOT OPEN WITHOUT COMMUNITY INPUT</strong>.</p>`,
      question: "How do you investigate the abandoned system?",
      choices: [
        ["A", "Open the locked cabinet.", "Inside is a 900-page study recommending that the city study whether to preserve the completed system. The cover says FINAL DRAFT 7."],
        ["B", "Follow the Cortaro Express tunnel first.", "The rails are intact, the signals still have power, and the first sign reads CORTARO—17 MINUTES. Several witnesses accuse it of showing off."],
        ["C", "Inspect the old control panel before moving any trains.", "Most switches are clearly labeled. One large green button simply says RESUME NORMAL SERVICE."],
        ["D", "Ask the mayor to explain the missing public records.", "She promises full transparency, then discovers every relevant file has been classified as routine utility work. Even she looks impressed."]
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

const adventure3 = {
  slug: "the-doctor-is-a-data-center",
  title: "The Doctor Is a Data Center",
  subtitle: "A newcomer searches for a primary-care doctor and discovers the county's best-kept server farm.",
  scenes: [
    {
      title: "Accepting New Patients",
      body: `<p>Three weeks after moving to Pima County, your new neighbor Priya needs a primary-care provider.</p><p>Her insurance directory lists 184 doctors accepting new patients.</p><p>The first 61 phone numbers are disconnected. Twenty-eight offices accept new patients who are already patients. One doctor retired during the Obama administration. Another is apparently a veterinarian.</p><p>At 11:43 P.M., Priya finds one listing with appointments available tomorrow:</p><div class="sign">DESERT CLOUD FAMILY MEDICINE<br>Accepting all patients · Open 24/7<br>Directions: Continue past pavement</div><p>“I'm either getting a physical,” she tells you, “or joining a cult. Want to drive?”</p>`,
      question: "How do you investigate the miraculous opening?",
      choices: [
        ["A", "Call the office before driving anywhere.", "A cheerful voice says, “Your health is important to us,” then places you on hold. After forty minutes, you realize the hold music is generated from your own elevated blood pressure."],
        ["B", "Check the address on a map.", "The pin sits on an unnamed road beyond a gravel pit. Street View shows desert, a locked gate, and a saguaro blurred for privacy."],
        ["C", "Book the first available appointment immediately.", "The portal confirms Priya for 8:00 A.M. with DR. PCP-PRIMARY-NULL. It asks her to arrive fifteen minutes early and bring every medical record since birth."],
        ["D", "Search public records for Desert Cloud Family Medicine.", "You find no medical license. You do find a building permit for a “small records-storage annex” requiring enough electrical capacity to make the application portal briefly sweat."]
      ],
      next: 1
    },
    {
      title: "Continue Past Pavement",
      body: `<p>The next morning, you follow the directions. Pavement ends. Cell service ends. Priya's patience ended Tuesday.</p><p>Beyond a decorative wall disguised as desert landscaping stands an enormous windowless building. Cooling towers hum behind painted silhouettes of saguaros.</p><p>The sign at the gate reads:</p><div class="sign">DESERT CLOUD FAMILY MEDICINE<br><small>Please have insurance card and security clearance ready</small></div><p>A guard scans Priya's appointment confirmation.</p><p>“You're the first actual patient,” he says.</p>`,
      question: "What do you ask the guard?",
      choices: [
        ["A", "Ask where the doctor is.", "He checks a tablet. “Rack C, aisle twelve.” Priya explains that a rack is not a physician. The guard says nobody covered that distinction in orientation."],
        ["B", "Ask what the building really is.", "He lowers his voice. “Regional data center. Officially it stores medical records. Unofficially it stores every appointment request nobody could schedule.”"],
        ["C", "Ask who approved construction.", "The permit displays signatures from the city, county, three development authorities, and a committee called Residents for Projects Residents Have Not Heard About."],
        ["D", "Insist that Priya has a confirmed appointment.", "The guard honors it. Inside, a kiosk measures her temperature, prints a healthy-looking receipt, and schedules follow-up care for the first Tuesday after someone answers the phone." ]
      ],
      next: 2
    },
    {
      title: "The Server Room Examination",
      body: `<p>The guard escorts you into a refrigerated hall containing thousands of blinking servers.</p><p>Every machine is labeled with a healthcare function:</p><div class="sign">FIND A PROVIDER<br>VERIFY COVERAGE<br>REQUEST APPOINTMENT<br>REQUEST REQUEST STATUS<br>APOLOGIZE FOR INCONVENIENCE</div><p>A technician named Mateo explains that the center uses advanced artificial intelligence to maintain Pima County's provider directory.</p><p>“Does it find doctors?” Priya asks.</p><p>“No,” Mateo says. “But it can rearrange the same unavailable doctors in under two seconds.”</p><p>Then alarms sound. The system has detected an unauthorized living patient.</p>`,
      question: "What should Priya do?",
      choices: [
        ["A", "Ask the AI to locate one real appointment.", "Every server spins up. Lights across the valley dim. After seven minutes, the system recommends an urgent-care clinic 83 miles away that closed last Thursday."],
        ["B", "Download evidence of the false provider listings.", "Mateo helps export the records. The file is so large that the progress bar applies for Medicare before reaching 20 percent."],
        ["C", "Trigger the building's patient-assistance protocol.", "A robot delivers a clipboard containing seventeen forms and a pen chained to nothing. The emergency protocol has now exhausted its resources."],
        ["D", "Ask why politicians concealed the data center.", "Mateo shows you the project name: OPERATION HEALTHY GROWTH. Officials feared residents might object to its power use, water use, and complete absence of healthcare." ]
      ],
      next: 3
    },
    {
      title: "Community Input Arrives",
      body: `<p>Priya sends one photograph to a neighborhood group.</p><p>Within twelve minutes, the gate is surrounded by residents, reporters, environmental groups, retired nurses, and six people who have been waiting for dermatology referrals since spring.</p><p>Local officials arrive together and independently announce that they have only just learned about the project they approved.</p><p>One supervisor steps to the microphones.</p><p>“This facility was never hidden,” she says. “It was described in Appendix Q of a 900-page agenda posted online for eleven minutes.”</p><p>The crowd expresses its appreciation using several traditional Tucson hand gestures.</p>`,
      question: "How should the discovery be made public?",
      choices: [
        ["A", "Let Priya explain how a PCP search led here.", "Her story is devastating because everybody has their own version. The press conference becomes a support group with microphones."],
        ["B", "Make officials read the provider directory aloud.", "The first supervisor reaches three disconnected numbers before requesting a recess. The crowd denies prior authorization."],
        ["C", "Give Mateo the technical records.", "He demonstrates that the center spends more computing power explaining why appointments are unavailable than scheduling them."],
        ["D", "Open the gates and let residents tour the facility.", "The server hall fills with people searching the racks for their missing referrals. Someone locates a colonoscopy request from 2024 blinking quietly behind a firewall." ]
      ],
      next: 4
    },
    {
      title: "The Emergency Public Meeting",
      body: `<p>Officials schedule an emergency public meeting for 2:00 P.M. on a weekday in a room with eleven chairs.</p><p>The meeting is moved outside after 600 residents arrive.</p><p>The county presents four facts:</p><div class="quote">The data center is already built.<br>Its contracts run for twenty years.<br>Its cooling system consumes substantial local resources.<br>It has successfully scheduled zero medical appointments.</div><p>Priya raises her hand.</p><p>“Before we discuss the building,” she says, “does anyone here know a primary-care doctor accepting new patients?”</p><p>Every official studies the ground.</p>`,
      question: "What should happen to the facility now?",
      choices: [
        ["A", "Require it to verify every provider listing with a real phone call.", "The AI places thousands of calls. Half reach voicemail. A quarter reach fax machines. One is answered by the veterinarian, who remains surprisingly open to new patients."],
        ["B", "Convert part of the building into an actual community clinic.", "Engineers discover the server lobby is large enough for exam rooms, but the original plans allocated it entirely to a sculpture titled ACCESS."],
        ["C", "Shut the data center down immediately.", "Officials warn that every broken provider directory would go offline. Residents ask how they would notice."],
        ["D", "Keep it operating but publish its contracts and resource use.", "The records reveal consulting fees for Community Listening, Public Confidence, and Choosing a Calming Shade of Beige for the security wall." ]
      ],
      next: 5
    },
    {
      title: "Priya's Follow-Up Appointment",
      body: `<p>Public pressure produces the fastest government action anyone in attendance can remember.</p><p>The hidden sign comes down. The contracts go online. A temporary clinic opens inside the former security office while community leaders negotiate the facility's future.</p><p>Mateo reprograms one server to call medical offices and remove listings that are not genuinely accepting patients.</p><p>The directory shrinks from 184 doctors to three.</p><p>“That looks terrible,” an official says.</p><p>“It is terrible,” Priya replies. “Now it's also accurate.”</p><p>One of the three offices calls her back. The first appointment is in eleven weeks.</p><p>Everyone celebrates, which tells you more about the healthcare situation than the data center ever could.</p>`,
      question: "What lasting solution does the community choose?",
      final: true,
      choices: [
        ["A", "Turn the data center into a clinic-and-scheduling hub.", "Half the servers continue managing records. The rest of the building gains exam rooms, telehealth booths, and humans authorized to answer telephones.", "The Cloud Gets a Waiting Room", "Priya finally sees a doctor in the same building that once pretended to be one."],
        ["B", "Create a legally verified public provider directory.", "Medical offices must confirm availability regularly or disappear from the list. The directory becomes much smaller and dramatically more useful.", "Three Honest Doctors", "Pima County loses 181 imaginary options and gains something rarer: accurate information."],
        ["C", "Use the facility to recruit and support local clinicians.", "Cooling subsidies become training grants, clinic space, and support for practices taking new patients. Officials unveil the plan without using the word synergy.", "Processing People, Not Requests", "The first new physician arrives before the old system finishes generating its apology."],
        ["D", "Preserve one server exactly as officials designed it.", "It remains in the lobby, endlessly searching for an available PCP and displaying PLEASE HOLD. Schoolchildren visit to learn about early twenty-first-century bureaucracy.", "The Monument to Access", "Once a year, the server recommends the veterinarian." ]
      ]
    }
  ]
};



const adventure4 = {
  slug: "the-wash-woke-up",
  title: "The Wash Woke Up",
  subtitle: "A blue sky, one grocery run, and a wash that remembers it is a river.",
  scenes: [
    {
      title: "Ten Minutes to Fry's",
      body: `<p>You leave for a ten-minute grocery run beneath a perfectly blue Tucson sky.</p><p>Seven minutes later, rain is moving sideways. Your phone announces a dust warning while water begins crossing the road ahead.</p><p>A handwritten sign beside the wash reads:</p><div class="sign">ROAD MAY FLOOD<br><small>Road currently considering it</small></div><p>The railroad crossing behind you closes.</p>`,
      question: "What do you do?",
      choices: [
        ["A","Turn around before the water rises.","The train blocks your retreat. The wash rises another inch and appears pleased with itself."],
        ["B","Wait on high ground and watch the crossing.","Other drivers line up behind you. One honks, apparently believing your sedan controls both weather and freight rail."],
        ["C","Follow a pickup through the shallow-looking water.","The pickup clears it. Your smaller car reaches the edge just as a trash bin floats past like a warning buoy."],
        ["D","Open navigation and find another route.","The app recommends a road named Dry River Lane. Even the app pauses before saying it aloud."]
      ], next: 1
    },
    {
      title: "The New Riverfront District",
      body: `<p>Water spreads across the intersection. A city crew arrives and places one cone where forty would be useful.</p><p>A television reporter calls the scene “unexpected flooding.” Three longtime residents simultaneously shout, “It's a wash.”</p><p>A stranded driver says his dog is waiting at home. Another car contains melting groceries and a birthday cake reading CONGRATULATIONS ON STAYING DRY.</p>`,
      question: "Where do you help first?",
      choices: [
        ["A","Move everyone farther uphill.","People cooperate once the birthday cake begins drifting inside its box."],
        ["B","Call emergency services about the stranded cars.","Dispatch already knows. The wash has generated more calls than the county budget meeting."],
        ["C","Use your car to block impatient drivers.","You become an unofficial barricade. The honking driver promotes you to Acting Mayor of Rain."],
        ["D","Record the flooding and road signs.","Your video captures a storm drain ejecting a traffic cone. The cone immediately rejoins city service downstream."]
      ], next: 2
    },
    {
      title: "Do Not Enter When Flooded",
      body: `<p>A delivery van ignores everyone and enters the water. It stalls halfway across.</p><p>The driver climbs onto the roof and announces that the package was guaranteed by 5:00.</p><p>Firefighters are approaching, but a loose dumpster is moving toward the van. Nobody should enter the current.</p>`,
      question: "What is the safest useful action?",
      choices: [
        ["A","Warn the driver and let firefighters handle the rescue.","The driver stays on the roof. The dumpster changes lanes without signaling."],
        ["B","Throw a rope from shore.","A firefighter stops you before the rope turns two people into a rescue instead of one."],
        ["C","Move bystanders away from the channel.","The crowd backs up just before the dumpster bumps the van and continues toward Phoenix."],
        ["D","Ask what is inside the guaranteed package.","“Pool noodles,” the driver says. Tucson has achieved perfect comic timing." ]
      ], next: 3
    },
    {
      title: "After the Water",
      body: `<p>The rain stops as abruptly as it began. Firefighters bring the driver to shore. The wash drops, leaving mud, branches, and the original city cone lying sideways in victory.</p><p>A council representative arrives for photographs and announces a comprehensive review of signs that already say not to drive into flooded roads.</p>`,
      question: "What should the neighborhood demand?",
      choices: [
        ["A","A real gate that closes before flooding.","Officials call a gate technologically ambitious. Residents point toward the railroad crossing."],
        ["B","Better drainage and wash maintenance.","The city discovers maintenance requests dating back far enough to qualify as historical documents."],
        ["C","A public alert tied to the actual road.","The proposed alert says WATER HERE NOW, which tests better than HYDROLOGICAL EVENT POSSIBLE."],
        ["D","Nothing; the warning signs were clear.","The signs were clear. The driver was clearer about same-day delivery." ]
      ], next: 4
    },
    {
      title: "The Grocery Run",
      body: `<p>The road reopens three hours later. Fry's is still seven minutes away. Your grocery list is now damp, the birthday cake has survived, and the delivery driver has offered everyone a pool noodle.</p>`,
      question: "How does the neighborhood remember the storm?",
      final: true,
      choices: [
        ["A","Install the automatic flood gate.","The gate closes during the next monsoon before the first impatient driver arrives.","The Wash Gets Boundaries","Tucson installs infrastructure before making the commemorative plaque."],
        ["B","Adopt the pool noodles as warning markers.","Bright noodles appear on every flood sign in the neighborhood.","The Noodle Alert System","It is ridiculous, visible, and therefore more effective than the old plan."],
        ["C","Name the surviving traffic cone.","Cone-stance becomes a local weather celebrity.","Cone-stance Holds the Line","She has no authority and a better approval rating than most committees."],
        ["D","Finish the grocery run.","You arrive home with milk, bread, and a story nobody outside Tucson believes.","Ten Minutes, Tucson Time","The receipt says 4:52 P.M. Your watch declines comment."]
      ]
    }
  ]
};

const adventure5 = {
  slug: "the-javelina-valet",
  title: "The Javelina Valet Service",
  subtitle: "A tipped trash cart becomes a wildlife operation with surprisingly firm parking rules.",
  scenes: [
    {
      title: "Trash Night",
      body: `<p>At 5:40 A.M., every trash cart on your street has been moved into one perfect line across the road.</p><p>Behind them stands a family of javelinas eating the contents of Tuesday.</p><p>The largest javelina wears a reflective HOA parking sticker on its ear.</p>`,
      question: "What do you do first?",
      choices: [
        ["A","Stay inside and observe.","The javelina moves your neighbor's cart two inches and appears satisfied with the alignment."],
        ["B","Use the car horn to scare them away.","The family scatters, then returns with the offended confidence of residents who pay dues."],
        ["C","Call animal control.","The recording advises you not to feed or approach wildlife. It does not address wildlife enforcing parking."],
        ["D","Photograph the sticker.","The number belongs to a parking permit reported missing from the HOA office last week." ]
      ], next: 1
    },
    {
      title: "The New Parking Committee",
      body: `<p>By sunrise, the javelinas have relocated six carts, two patio cushions, and a plastic flamingo.</p><p>Every item was previously in violation of some HOA rule.</p><p>The board president arrives and whispers, “They cleared our entire complaint backlog.”</p>`,
      question: "How should the neighborhood respond?",
      choices: [
        ["A","Secure the trash and remove the food source.","Without breakfast, the committee begins inspecting decorative gravel."],
        ["B","Let them finish the violations.","They cite a pickup truck by rubbing mud across its windshield."],
        ["C","Find out how the sticker reached the javelina.","Security video shows the board president dropping it while chasing a rolling recycle bin."],
        ["D","Warn neighbors to keep their distance.","The message spreads quickly, except one resident who replies ALL CAPS that javelinas are technically peccaries." ]
      ], next: 2
    },
    {
      title: "The Golf Cart Incident",
      body: `<p>A landscaping golf cart arrives. The driver leaves it running while moving a branch.</p><p>The largest javelina bumps the accelerator. The cart rolls slowly toward the community pool with three smaller javelinas trotting behind it.</p>`,
      question: "How do you stop the slowest pursuit in Tucson?",
      choices: [
        ["A","Tell the driver to cut power remotely.","He removes the key fob from his pocket. The cart stops beside the No Animals sign."],
        ["B","Run alongside and grab the brake.","You reconsider after the passenger huffs. Your fitness goal survives for another day."],
        ["C","Open the pool gate as an escape route.","That solves a problem nobody currently has and creates three new ones."],
        ["D","Block the cart with empty trash bins.","The bins work. The javelina looks impressed by your command of municipal equipment." ]
      ], next: 3
    },
    {
      title: "A Humane Transition of Power",
      body: `<p>The cart is stopped and nobody is hurt. Wildlife officers advise removing food, securing carts, and giving the family space to leave.</p><p>The board president wants to keep the sticker on the javelina because violation reports are down 80 percent.</p>`,
      question: "What policy does the neighborhood adopt?",
      choices: [
        ["A","Wildlife-proof trash carts for everyone.","The board objects to the cost until residents compare it with the decorative fountain nobody requested."],
        ["B","Earlier trash pickup.","The contractor offers 4:30 A.M., a time previously occupied only by coyotes and regret."],
        ["C","Fine residents who attract wildlife.","The first citation goes to the HOA dumpster."],
        ["D","Appoint a human parking committee.","Nobody volunteers. The javelina remains the leading candidate." ]
      ], next: 4
    },
    {
      title: "Permit Returned",
      body: `<p>With food secured, the javelina family leaves through the wash. The reflective sticker falls beside the pool gate.</p>`,
      question: "How does the episode end?",
      final: true,
      choices: [
        ["A","Install wildlife-proof carts.","Trash morning becomes boring again.","The Buffet Closes","The neighborhood misses the drama but not the smell."],
        ["B","Frame the recovered permit.","It hangs in the clubhouse under EXEMPLARY SERVICE.","Employee of the Month","The honoree cannot attend due to foraging commitments."],
        ["C","Keep one cart out as a test.","It is overturned before dawn by an ordinary raccoon.","Management Changes","The new contractor works nights."],
        ["D","Retire the parking rule entirely.","The street survives crooked carts and gains several hours of human life.","Natural Deregulation","The javelina accomplished what three annual meetings could not." ]
      ]
    }
  ]
};

const adventure6 = {
  slug: "the-crossing-that-would-not-open",
  title: "The Crossing That Wouldn't Open",
  subtitle: "One freight train, two meetings, and Cortaro Road's longest unofficial neighborhood gathering.",
  scenes: [
    {
      title: "Just One Train",
      body: `<p>You approach the Cortaro Road railroad crossing as the gates lower.</p><p>The freight train stops after car 73. Then it backs up. Then it moves forward exactly far enough to inspire hope.</p><p>Your navigation app changes your arrival time from 9:02 to “emotionally unavailable.”</p>`,
      question: "What do you do?",
      choices: [
        ["A","Wait; it will move eventually.","Eventually applies for an extension."],
        ["B","Turn around for another crossing.","Every car behind you has formed a defensive treaty."],
        ["C","Check traffic reports.","The report says MINOR DELAY, apparently written from orbit."],
        ["D","Call the meeting organizer.","She says not to worry; half the meeting is behind the same train." ]
      ], next: 1
    },
    {
      title: "The Parking Lot Forms",
      body: `<p>After twenty minutes, drivers turn off their engines. A coffee truck trapped in the line opens for business.</p><p>Someone unfolds a lawn chair. A child starts counting train cars and reaches a number the school has not taught yet.</p><p>A man claims there is a secret route through a nearby warehouse lot.</p>`,
      question: "Which escape plan do you trust?",
      choices: [
        ["A","Stay put and buy coffee.","The coffee truck introduces surge pricing at minute thirty."],
        ["B","Follow the warehouse shortcut.","The route ends at another locked gate with a clearer view of the same train."],
        ["C","Coordinate a safe turnaround.","Drivers reverse in order, briefly demonstrating more transportation planning than anyone expected."],
        ["D","Walk toward the front for information.","The locomotive is visible in the distance, as is a crew member eating a sandwich with no sense of urgency." ]
      ], next: 2
    },
    {
      title: "The Meeting Comes to You",
      body: `<p>The stranded meeting organizer climbs onto the coffee truck.</p><p>“Since everyone is here,” she announces, “we may as well begin.”</p><p>The meeting topic is regional transportation.</p><p>People laugh long enough to become a quorum.</p>`,
      question: "What issue goes first on the agenda?",
      choices: [
        ["A","Build an overpass or underpass.","Officials cite a study. Three drivers produce older studies from their glove compartments."],
        ["B","Publish real-time train blockage data.","The railroad representative says location data is complex while standing beside a train nobody can fail to locate."],
        ["C","Limit how long crossings stay blocked.","Everyone supports the idea except the sandwich."],
        ["D","Move all meetings to the crossing.","Attendance projections rise immediately." ]
      ], next: 3
    },
    {
      title: "Movement Detected",
      body: `<p>The train finally moves. The crowd cheers—then notices the gates remain down.</p><p>A maintenance truck arrives. The technician opens a control box and removes a bird nest built directly on the sensor.</p>`,
      question: "What deserves the blame?",
      choices: [
        ["A","The train operations.","The railroad promises to review procedures during a meeting reachable only by crossing the tracks."],
        ["B","The neglected sensor.","Maintenance records show it was scheduled for inspection next fiscal decade."],
        ["C","The bird.","The bird has already retained counsel."],
        ["D","The road design.","The road quietly points toward the stack of overpass studies." ]
      ], next: 4
    },
    {
      title: "Gates Up",
      body: `<p>The gates rise after 58 minutes. Nobody remembers where they were going, but the transportation meeting has minutes, coffee receipts, and unanimous recommendations.</p>`,
      question: "What changes afterward?",
      final: true,
      choices: [
        ["A","Fund the grade-separated crossing.","Construction begins after the newest study confirms the previous six.","The Road Escapes","Cortaro finally stops scheduling life around freight."],
        ["B","Install reliable blockage alerts.","Phones now say 43-MINUTE DELAY instead of MINOR.","Accurate Misery","Nobody is happier, but everyone leaves earlier."],
        ["C","Protect and relocate the bird nest.","The bird receives a platform away from the sensor.","Transit-Oriented Wildlife","It remains the only resident with direct track access."],
        ["D","Keep the coffee truck stationed nearby.","It becomes the most profitable transportation project on Cortaro Road.","The Cortaro Café","Every tenth delay earns a free pastry." ]
      ]
    }
  ]
};

const adventure7 = {
  slug: "the-gem-show-ate-downtown",
  title: "The Gem Show Ate Downtown",
  subtitle: "A harmless mineral purchase expands into a temporary international government.",
  scenes: [
    {
      title: "Just Looking",
      body: `<p>You enter the Tucson Gem Show intending to spend twenty dollars and leave within an hour.</p><p>Three tents later, you own a twelve-pound amethyst, cannot locate the exit, and have crossed into a wholesale district requiring credentials.</p><p>A vendor asks whether you represent a sovereign buyer.</p>`,
      question: "How do you respond?",
      choices: [
        ["A","Admit you are lost.","The vendor gives directions using minerals as landmarks."],
        ["B","Say you represent your household.","He issues you a provisional purchasing badge for the Republic of Guest Bedroom."],
        ["C","Follow signs back downtown.","Every sign says MORE VENDORS."],
        ["D","Call a rideshare.","The driver is 400 feet away and estimates arrival in 37 minutes." ]
      ], next: 1
    },
    {
      title: "The Missing Shuttle",
      body: `<p>The official shuttle stop has moved because its former location is now a fossil marketplace.</p><p>A volunteer hands you a map printed before three tents achieved statehood.</p><p>Your amethyst has become heavier through a process unknown to geology.</p>`,
      question: "How do you escape?",
      choices: [
        ["A","Board the first shuttle.","It takes you to another show containing larger rocks."],
        ["B","Trade the amethyst for directions.","The vendor offers directions plus two smaller amethysts."],
        ["C","Use the mountains for orientation.","Every reflective display creates a new mountain."],
        ["D","Ask a local food vendor.","She marks the real exit and sells you a Sonoran hot dog for emergency strength." ]
      ], next: 2
    },
    {
      title: "Customs at Tent 43",
      body: `<p>You reach a checkpoint. Your household badge now contains stamps from Brazil, Morocco, and a parking garage.</p><p>An organizer explains that downtown traffic has collapsed because one unauthorized tent was erected across the shuttle lane.</p>`,
      question: "What can you contribute?",
      choices: [
        ["A","Help move the unauthorized tent.","Its owner agrees after learning the tent is technically in a bus lane and possibly Nevada."],
        ["B","Direct trapped visitors toward the exit.","You become trusted because you look equally desperate."],
        ["C","Report the blockage to the city.","The city asks for the tent's parcel number."],
        ["D","Declare the tent an independent municipality.","It immediately applies for tourism funding." ]
      ], next: 3
    },
    {
      title: "The Twenty-Dollar Budget",
      body: `<p>The shuttle lane reopens. Your wallet contains eleven dollars. Your possessions include the amethyst, two tiny fossils, and a badge recognizing your domestic sovereignty.</p>`,
      question: "What do you keep?",
      choices: [
        ["A","Keep the amethyst.","Your car's suspension makes a formal objection."],
        ["B","Return everything except the badge.","The Republic of Guest Bedroom establishes a no-rock monetary policy."],
        ["C","Trade for one small Tucson souvenir.","You receive a stone the vendor assures you is local to Earth."],
        ["D","Spend the last eleven dollars on food.","This is the first purchase your spine supports." ]
      ], next: 4
    },
    {
      title: "Exit Through the Gift Shop",
      body: `<p>You find daylight six hours after entering. The Gem Show continues in every direction and possibly underneath you.</p>`,
      question: "What becomes of the adventure?",
      final: true,
      choices: [
        ["A","Display the amethyst at home.","It occupies the chair nobody was using much anyway.","The Twenty-Dollar Rock","Total cost: twenty dollars plus orthopedic follow-up."],
        ["B","Frame the household badge.","Visitors must clear customs before entering the guest room.","A Tiny Mineral Republic","Its chief export is laundry."],
        ["C","Volunteer as a shuttle guide next year.","You carry a current map and become legendary.","The One Who Found the Exit","Your directions use streets instead of quartz."],
        ["D","Promise never to return.","A vendor emails you a preview invitation eleven months later.","Just Looking, Again","You immediately click the amethyst section." ]
      ]
    }
  ]
};

const adventure8 = {
  slug: "but-its-a-dry-heat",
  title: "But It's a Dry Heat",
  subtitle: "A new snowbird attempts July with confidence, optimism, and one decorative water bottle.",
  scenes: [
    {
      title: "The July Walking Tour",
      body: `<p>Your new neighbor Gary arrives from Minnesota and announces a noon walking tour of downtown Tucson.</p><p>The temperature display reads 111°F.</p><p>Gary taps his decorative eight-ounce water bottle and says, “But it's a dry heat.”</p><p>The sidewalk begins preheating him.</p>`,
      question: "What do you tell Gary?",
      choices: [
        ["A","Reschedule for early morning.","Gary asks whether 10:00 A.M. counts. The sun answers for you."],
        ["B","Drive instead.","His steering wheel has achieved a defensive temperature."],
        ["C","Explain hydration and shade.","Gary says he drank coffee. Arizona removes one confidence point."],
        ["D","Let him step outside for ten seconds.","At second seven, Gary begins renegotiating his beliefs." ]
      ], next: 1
    },
    {
      title: "The Oven-Mitt Economy",
      body: `<p>Gary agrees to drive. The seat belt buckle brands a small Chevrolet logo into his optimism.</p><p>The air conditioner blows hot air while deciding whether the relationship is serious.</p><p>A dashboard warning reports HIGH ENGINE TEMPERATURE.</p>`,
      question: "What comes first?",
      choices: [
        ["A","Stop safely and shut the car down.","The car appreciates becoming shade-adjacent."],
        ["B","Turn the AC colder.","The AC responds with warmer wind and management-level silence."],
        ["C","Open the radiator cap.","You stop Gary before he converts dry heat into steam heat."],
        ["D","Call roadside assistance.","The estimated arrival is forty minutes. The hold message recommends remaining somewhere cool." ]
      ], next: 2
    },
    {
      title: "Somewhere Cool",
      body: `<p>You reach a nearby library lobby. Gary drinks water slowly and studies a heat-safety poster featuring every mistake he proposed.</p><p>Outside, his plastic sunglasses soften into a more relaxed shape.</p>`,
      question: "How should the rest of the day change?",
      choices: [
        ["A","Cancel outdoor plans.","Gary discovers indoor Tucson contains food and functioning air conditioning."],
        ["B","Resume at sunset.","The forecast says 104°F at sunset, which Gary calls a clerical error."],
        ["C","Tour by streetcar.","The air-conditioned streetcar becomes Gary's favorite municipal institution."],
        ["D","Buy a larger water bottle.","He selects one capable of supporting a small household." ]
      ], next: 3
    },
    {
      title: "The Phrase Retires",
      body: `<p>Roadside assistance confirms a failing cooling fan. Gary admits the heat felt different than expected.</p><p>“Still dry,” he says weakly.</p><p>A librarian drops a stack of summer safety brochures on the desk with judicial force.</p>`,
      question: "What lesson does Gary accept?",
      choices: [
        ["A","Dry heat is still dangerous heat.","The sentence enters his vocabulary without a joke attached."],
        ["B","Plan outdoor activity around the sun.","Gary schedules tomorrow's walk for 5:15 A.M. and learns birds have meetings then."],
        ["C","Cars need summer preparation too.","He adds coolant checks, battery checks, and windshield mittens to his list."],
        ["D","Locals are not hiding indoors from weakness.","They are demonstrating successful adaptation." ]
      ], next: 4
    },
    {
      title: "Minnesota Reports Back",
      body: `<p>Gary video-calls his family from an air-conditioned restaurant. They ask how he likes the famous dry heat.</p>`,
      question: "What does Gary say?",
      final: true,
      choices: [
        ["A","“Dry is not the same as imaginary.”","His family writes it down.","The Tucson Amendment","Gary retires the phrase after one day in active service."],
        ["B","“It's beautiful before breakfast.”","He becomes a sunrise walker.","Snowbird, Early Edition","By 9:00 A.M., Gary has completed his day."],
        ["C","“My car tried to cook me.”","The family sends oven mitts as a housewarming gift.","Preheated Resident","Gary keeps them in the glove compartment."],
        ["D","“But it's a—” then stops.","Every Tucson resident in the restaurant applauds.","Personal Growth","The air conditioner receives a standing ovation too." ]
      ]
    }
  ]
};

const adventure9 = {
  slug: "the-jurisdiction-line",
  title: "The Jurisdiction Line",
  subtitle: "One fallen traffic sign lands in Tucson, Marana, and unincorporated Pima County at the same time.",
  scenes: [
    {
      title: "Whose Sign Is It?",
      body: `<p>A windstorm knocks down a stop sign at the entrance to your neighborhood.</p><p>The pole lies in Marana. The sign face rests in unincorporated Pima County. Its shadow falls inside Tucson.</p><p>Three service-request apps reject your photograph.</p>`,
      question: "Who do you call first?",
      choices: [
        ["A","Marana.","They confirm ownership of the pole but not the stopping instruction."],
        ["B","Pima County.","The county accepts the sign face pending proof it has resided there thirty days."],
        ["C","Tucson.","Tucson offers to inspect the shadow during normal business hours."],
        ["D","Call 911 about the dangerous intersection.","Deputies place temporary cones while dispatch begins a jurisdictional group chat." ]
      ], next: 1
    },
    {
      title: "Three Trucks Arrive",
      body: `<p>By noon, three maintenance trucks surround the sign. Each crew has a different map.</p><p>All maps agree on one point: responsibility belongs six feet away.</p><p>Traffic now moves according to eye contact and spiritual readiness.</p>`,
      question: "How do you force a decision?",
      choices: [
        ["A","Measure the exact boundary.","The survey marker is beneath the fallen pole."],
        ["B","Ask one crew to repair it and bill the others.","This proposal is rejected for being both practical and comprehensible."],
        ["C","Invite local news.","A reporter arrives and every crew immediately locates a supervisor."],
        ["D","Stand the sign up yourself.","A crew stops you because unauthorized repair could confuse the jurisdiction." ]
      ], next: 2
    },
    {
      title: "The Boundary Hearing",
      body: `<p>Officials convene a roadside hearing. The folding table crosses all three jurisdictions.</p><p>Marana controls one leg, Tucson another, and the county claims the coffee.</p><p>A fourth agency arrives because the road may receive regional transportation funding.</p>`,
      question: "What solution goes on record?",
      choices: [
        ["A","Create a shared maintenance agreement.","Lawyers estimate six months to define the word shared."],
        ["B","Move the sign entirely into one jurisdiction.","Everyone supports this until asked which one."],
        ["C","Replace it with a portable stop sign.","The portable sign requires a temporary-location permit."],
        ["D","Install three smaller stop signs.","Drivers would stop once for each government, increasing civic participation." ]
      ], next: 3
    },
    {
      title: "Nature Chooses",
      body: `<p>Another gust rolls the sign twelve feet downhill, entirely into Pima County.</p><p>The county crew measures twice, sighs, and loads a replacement pole.</p><p>Marana and Tucson remain to supervise from their respective edges.</p>`,
      question: "What should prevent the next dispute?",
      choices: [
        ["A","One emergency contact for shared boundaries.","The contact receives three phone numbers and one very large coffee."],
        ["B","A public jurisdiction map people can understand.","Designers remove seventeen layers and discover streets underneath."],
        ["C","Joint repair authority for safety hazards.","Crews celebrate permission to fix first and argue later."],
        ["D","Heavier stop signs.","Engineering calls this emotionally satisfying but incomplete." ]
      ], next: 4
    },
    {
      title: "Stop Means Stop",
      body: `<p>The new sign stands before sunset. It occupies one jurisdiction, serves three, and has four agency stickers on the back.</p>`,
      question: "How is the border remembered?",
      final: true,
      choices: [
        ["A","Adopt the joint repair agreement.","The next fallen sign is fixed before anyone locates a folding table.","Fix First, Map Later","Government briefly resembles a service."],
        ["B","Publish the simplified map.","Residents learn who maintains their road and who merely sends newsletters.","You Are Here, Probably","The map includes only one footnote."],
        ["C","Preserve the three-legged hearing table.","It enters a museum of regional cooperation.","Shared Furniture","The county retains custody of the coffee stain."],
        ["D","Let wind settle future disputes.","A weather vane is added to the emergency plan.","Natural Arbitration","Monsoon season becomes legally binding." ]
      ]
    }
  ]
};

const adventure10 = {
  slug: "the-last-sonoran-hot-dog",
  title: "The Last Sonoran Hot Dog",
  subtitle: "A missing cart, a secret recipe, and Tucson's least neutral food investigation.",
  scenes: [
    {
      title: "The Empty Corner",
      body: `<p>Your favorite Sonoran hot-dog cart is missing from its usual corner.</p><p>In its place is one folding chair and a handwritten note:</p><div class="sign">WE HAVE THE RECIPE.<br>BRING THREE PERFECT CHILES.</div><p>The owner's apron lies beneath the chair. The owner, Rosa, is not answering her phone.</p>`,
      question: "What do you investigate first?",
      choices: [
        ["A","Call Rosa again.","Her voicemail says, “If this is about ketchup, you have the wrong number.”"],
        ["B","Ask neighboring vendors.","They saw Rosa leave voluntarily with a cooler and a man carrying an enormous bag of bolillos."],
        ["C","Examine the note.","The back contains a grease mark shaped like A Mountain."],
        ["D","Report the missing cart.","Police ask for its license plate. You explain the cart's relationship with plates is culinary." ]
      ], next: 1
    },
    {
      title: "Three Perfect Chiles",
      body: `<p>The clue leads to a produce market. The vendor offers three chiles: one mild, one dangerous, and one that requires signing a waiver.</p><p>He says Rosa bought the same set that morning and left a message: “Follow the beans.”</p>`,
      question: "Which clue do you follow?",
      choices: [
        ["A","Buy the mild chile.","The vendor stamps your receipt with a tiny bacon-wrapped arrow."],
        ["B","Buy the dangerous chile.","Your eyes provide turn-by-turn navigation through tears."],
        ["C","Refuse the waiver chile.","The vendor respects your desire to retain sensation."],
        ["D","Ask where the beans came from.","He points toward a warehouse near the railroad tracks." ]
      ], next: 2
    },
    {
      title: "The Recipe Auction",
      body: `<p>Inside the warehouse, Tucson food vendors sit around Rosa's missing cart.</p><p>Rosa stands at the front holding her recipe card.</p><p>This is not a kidnapping. It is a secret meeting.</p><p>A national restaurant chain offered to buy the recipe and rename it the Desert Bacon Dog.</p>`,
      question: "Why did Rosa stage the disappearance?",
      choices: [
        ["A","To test whether Tucson would notice.","The empty corner generated 600 calls before lunch. Tucson noticed."],
        ["B","To unite local vendors against the sale.","Every vendor agrees except one who wants to negotiate condiment royalties."],
        ["C","To identify who leaked the recipe.","Only three people knew about the three-chile note. One is wearing a corporate lanyard under his apron."],
        ["D","To create publicity.","Rosa admits mystery performs better online than a two-for-one coupon." ]
      ], next: 3
    },
    {
      title: "The Taste Test",
      body: `<p>The chain representative unveils its Desert Bacon Dog. It contains turkey bacon, sweet relish, and something described as southwest-inspired foam.</p><p>The warehouse becomes dangerously quiet.</p><p>Rosa serves the original beside it.</p>`,
      question: "How should Tucson decide?",
      choices: [
        ["A","Blind taste test.","Every blindfolded judge identifies the foam by disappointment."],
        ["B","Protect the recipe as a local tradition.","Lawyers begin discussing trademarks while everyone else keeps eating."],
        ["C","Let Rosa sell if the price is right.","Rosa says the issue is not selling—it is watching the buyer remove everything worth buying."],
        ["D","Require the chain to use the real name.","The representative pronounces Sonoran three different ways and loses negotiating privileges." ]
      ], next: 4
    },
    {
      title: "The Cart Returns",
      body: `<p>By sunset, Rosa's cart returns to its corner. A line stretches down the block. The recipe card remains in her apron.</p>`,
      question: "What happens to the recipe?",
      final: true,
      choices: [
        ["A","Create a Tucson vendor cooperative.","Local carts share purchasing power without surrendering their recipes.","The Cartel of Deliciousness","Legal counsel strongly recommends a different name."],
        ["B","Publish the basic recipe but keep Rosa's touch secret.","Thousands copy it. None tastes exactly like Rosa's.","Ingredients Aren't the Whole Story","The missing ingredient is apparently Rosa refusing shortcuts."],
        ["C","Reject the chain and hold an annual taste festival.","The Desert Bacon Dog enters once and finishes behind a napkin.","Tucson Chooses Lunch","The foam is never seen again."],
        ["D","Sell the recipe with strict conditions.","The contract requires the correct ingredients, name, and one Tucson cook in every kitchen.","Going National, Still Sonoran","America finally learns beans belong on more things." ]
      ]
    }
  ]
};

const adventure11 = {
  slug: "the-boneyard-restroom",
  title: "The Boneyard Restroom Connection",
  subtitle: "A 35-minute flight to Phoenix adds one unscheduled stop and an increasingly urgent question.",
  scenes: [
    {
      title: "A Slight Change in Our Route",
      body: `<p>Your flight from Tucson to Phoenix has barely climbed above the city when the pilot makes an announcement.</p><div class="quote">Ladies and gentlemen, due to unexpected congestion at Sky Harbor, we will make a brief unscheduled stop at an alternate Tucson facility.</div><p>The plane banks east instead of north.</p><p>Below you, thousands of retired military aircraft sit in perfect desert rows.</p><p>The passenger beside you presses her face to the window. “Is that the Boneyard?”</p><p>You press the call button. You had too much coffee at the airport, and history can wait.</p>`,
      question: "What do you ask the flight attendant?",
      choices: [
        ["A","“Are we actually landing in the Boneyard?”","She says the proper term is an unscheduled ground experience."],
        ["B","“How brief is brief?”","She gives the same smile airlines use before introducing a new definition of brief."],
        ["C","“Is the restroom available?”","She points toward the occupied sign. Somebody got there one announcement ahead of you."],
        ["D","“Can Phoenix congestion send us anywhere else?”","She says the alternate list included Mesa, Las Vegas, and apparently aviation history." ]
      ], next: 1
    },
    {
      title: "Welcome to the Connection",
      body: `<p>The plane lands on a narrow strip beside rows of silent aircraft. A stair truck arrives bearing the words:</p><div class="sign">TEMPORARY PASSENGER TRANSFER<br><small>Not normally passengers</small></div><p>The pilot says everyone must leave the plane while a mysterious indicator light is inspected.</p><p>A ground employee leads the passengers between retired cargo planes, bombers, and helicopters. There is no terminal. There is no restroom sign. There is, however, a gift shop arrow pointing toward a trailer.</p>`,
      question: "Where do you look first?",
      choices: [
        ["A","Follow the gift shop arrow.","The trailer sells patches, postcards, and a mug reading I SURVIVED MY TUCSON LAYOVER. It has no public restroom."],
        ["B","Ask the ground employee directly.","He radios Operations. Operations asks whether you are civilian, military, airline, contractor, or an unrecognized fifth category."],
        ["C","Return to the airplane restroom.","The stairs have already pulled away. Your seat is now twelve vertical feet and one federal rule away."],
        ["D","Follow a sign marked FACILITIES.","It leads to aircraft maintenance. Technically correct. Medically unhelpful." ]
      ], next: 2
    },
    {
      title: "Restroom Clearance Required",
      body: `<p>A security officer arrives with a clipboard.</p><p>He explains that the nearest restroom is inside a restricted building. To enter, every passenger needs a temporary badge, a government-issued ID, and the name of a sponsoring department.</p><p>“My sponsoring department is coffee,” you say.</p><p>The officer does not laugh, but the woman beside you does enough for both of them.</p><p>Meanwhile, a maintenance tug begins towing your airliner deeper into the rows of retired aircraft.</p>`,
      question: "What do you do now?",
      choices: [
        ["A","Complete the temporary badge form.","Question 14 asks for your purpose. You write RESTROOM in letters large enough to qualify as an emergency beacon."],
        ["B","Ask to use the pilot's facilities.","The officer explains that pilots use the same restricted building, but possess the advanced credential of knowing where it is."],
        ["C","Point out that your airplane is leaving without you.","The officer radios the tug. The tug driver says he was told to park it beside similar equipment and may have interpreted similar too broadly."],
        ["D","Organize the passengers into a restroom delegation.","Thirty-seven people raise their hands. The security officer upgrades the situation from individual request to infrastructure problem." ]
      ], next: 3
    },
    {
      title: "Gate B-52",
      body: `<p>The group is escorted to a low building hidden behind the tail of a retired bomber.</p><p>A paper sign on the door reads:</p><div class="sign">PASSENGER COMFORT STATION<br><small>Established eleven minutes ago</small></div><p>Inside is one restroom and a departure monitor salvaged from somewhere. It lists your flight at <strong>Gate B-52</strong>.</p><p>The pilot announces that the indicator light was caused by a loose coffee-pot latch. The aircraft is ready, but the tug driver cannot remember which row he parked it in.</p>`,
      question: "How do you help locate the plane?",
      choices: [
        ["A","Use the photo you took during landing.","The image shows your airliner beside a faded tail marked 82. Unfortunately, the Boneyard contains several miles of faded 82s."],
        ["B","Call your own phone left at your seat.","A flight attendant answers. Her directions begin, “We are between two large gray airplanes.”"],
        ["C","Ask operations to track the tug.","Operations tracks every vehicle except the one currently relocating commercial aviation."],
        ["D","Search for the only plane with active cabin lights.","At sunset, one glowing row stands out among the retired aircraft. Thirty-seven passengers cheer for electricity." ]
      ], next: 4
    },
    {
      title: "Departing the Boneyard",
      body: `<p>You reboard the plane. The pilot promises Phoenix is now accepting arrivals.</p><p>The flight attendant closes the door and asks whether anyone needs anything before departure.</p><p>Every passenger looks at you.</p><p>You are finally comfortable, officially badged, and carrying a Boneyard gift-shop mug you do not remember buying.</p>`,
      question: "How does the unscheduled connection end?",
      final: true,
      choices: [
        ["A","Keep the temporary restroom badge.","Security stamps it VOID but lets you take it home.","Cleared for Facilities","You possess the Boneyard's least glamorous and most urgently earned souvenir."],
        ["B","Suggest making the stop a regular route.","The airline tests TUS–BONEYARD–PHX until passengers learn the connection has no lounge.","The Historic Layover","Frequent flyers receive priority restroom clearance."],
        ["C","Write a glowing review of the restroom.","You give it five stars for existence and one star for access.","Comfort Station Critic","Your review becomes the facility's entire public-relations campaign."],
        ["D","Ask the pilot to drive to Phoenix instead.","He points out that you are now on a working airplane, which is more than can be said for most of the neighborhood.","Back in the Air","The remaining flight takes twenty-three minutes. The story takes years to explain." ]
      ]
    }
  ]
};

const adventure12 = {
  slug: "signs-of-trouble",
  title: "Signs of Trouble",
  subtitle: "You were only trying to cross Tucson. The street signs had other plans.",
  scenes: [
    {
      title: "Cortaro, Cortaro Farms, Magee—Pick One",
      body: `<p>You are driving east on Cortaro Road with one modest goal: remain on Cortaro Road.</p><p>At the freeway, the signs call it <strong>Cortaro Farms Road</strong>. Farther east, the same strip of pavement introduces itself as <strong>Magee Road</strong>.</p><p>Your navigation app says, “Continue straight.” The street sign says you have already changed roads twice without turning.</p><p>A cardboard sign beneath it adds:</p><div class="sign">ROAD CURRENTLY EXPERIENCING AN IDENTITY CRISIS</div>`,
      question: "Which authority do you trust?",
      choices: [
        ["A","Trust the navigation app.","It recalculates while insisting you never left the route it just renamed."],
        ["B","Trust the street signs.","Three consecutive signs give three answers. Democracy has reached asphalt."],
        ["C","Follow the car ahead.","Its driver is following you, creating Tucson's first closed-loop navigation system."],
        ["D","Stop and ask a local.","She says, “It depends which side of the freeway remembers naming it.”"]
      ], next: 1
    },
    {
      title: "Turn Right on Thornydale",
      body: `<p>You turn right onto Thornydale Road and relax. Thornydale is a name. South is a direction. For several miles, the two appear to cooperate.</p><p>At River Road, your navigation app tells you to turn left. You follow <strong>River Road</strong> east as it bends and wanders across town.</p><p>Eventually, River delivers you to <strong>Oracle Road</strong> as though this had been the plan all along.</p><p>A visitor from Canada pulls alongside and points nervously toward La Cañada Drive.</p><p>“Does that take us back to Canada?”</p><p>“No,” you say. “But at least Canadians can figure that out before reaching Nogales.”</p>`,
      question: "Who designed this route?",
      choices: [
        ["A","Someone trying to confuse visitors.","The tourism office denies this while selling a map titled GOOD LUCK."],
        ["B","Someone who was naming roads while driving them.","Each name change marks the exact place the planner forgot what road he started on."],
        ["C","The roads themselves.","Thornydale wanted riverfront property. River wanted an oracle. Oracle refuses to comment."],
        ["D","Nobody. It simply evolved.","This is the official explanation, which somehow sounds more sinister."]
      ], next: 2
    },
    {
      title: "Grant Requests a New Identity",
      body: `<p>The app sends you along Oracle, then tells you to turn right onto <strong>Grant Road</strong>.</p><p>Grant behaves like an ordinary road until Silverbell. There, without a turn or farewell, it becomes <strong>Ironwood Hills Drive</strong>.</p><p>The pavement has not changed. The scenery has barely changed. Only the road's confidence has improved.</p><div class="sign">GRANT ROAD HAS LEFT THE CITY<br><small>Please address it by its new professional name.</small></div>`,
      question: "How do you respond to the rebranding?",
      choices: [
        ["A","Keep calling it Grant.","Your navigation app corrects you in the tone of a disappointed teacher."],
        ["B","Use Ironwood Hills immediately.","The road appreciates your support during this transition."],
        ["C","Ask what happened at Silverbell.","Silverbell declines to discuss personnel matters."],
        ["D","Turn around before another name appears.","The eastbound pavement changes back to Grant and pretends nothing happened."]
      ], next: 3
    },
    {
      title: "Four Names Toward One Mountain",
      body: `<p>Ironwood Hills ends at Camino de Oeste, so you turn south. Soon <strong>Speedway Boulevard</strong> and <strong>Anklam Road</strong> converge ahead.</p><p>The two roads merge and emerge as <strong>Gates Pass Road</strong>. West of the pass, the same route becomes <strong>Saguaro Road</strong>.</p><p>You have now watched two roads enter, one road leave, and that road change its name before the dust settled.</p><p>A warning sign says:</p><div class="sign">MERGE AHEAD<br><small>Road names must settle their own differences.</small></div>`,
      question: "What do you call the road you are on?",
      choices: [
        ["A","Speedway.","A bicyclist points out that nobody here should be speeding."],
        ["B","Anklam.","The left half of the pavement agrees. The right half files an objection."],
        ["C","Gates Pass.","The road accepts this until it reaches the other side of the mountain."],
        ["D","Saguaro.","Three thousand actual saguaros refuse responsibility."]
      ], next: 4
    },
    {
      title: "Tucson Invents a Direction",
      body: `<p>Your navigation app finally guides you back toward central Tucson, where the grid meets a diagonal road near Aviation Parkway.</p><p>The street sign identifies it as a <strong>STRAVENUE</strong>.</p><p>In Tucson, streets generally run east and west. Avenues generally run north and south. This road runs diagonally, so somebody combined the words and declared the problem solved.</p><p>Your app pauses long enough to look up the abbreviation.</p><div class="sign">STRAV<br><small>Neither street nor avenue. Please lower your expectations.</small></div>`,
      question: "Does “stravenue” clarify anything?",
      choices: [
        ["A","Yes. It is perfectly Tucson.","The city accepts this as the highest available standard of clarity."],
        ["B","No. Pick street or avenue.","The road continues diagonally out of spite."],
        ["C","Ask whether it counts as a shortcut.","Only if your destination is uncertainty."],
        ["D","Request an ordinary road.","Navigation offers I-10 during rush hour. You withdraw the request."]
      ], next: 5
    },
    {
      title: "You Have Arrived Somewhere",
      body: `<p>Two hours later, you reach the address where you started.</p><p>Your navigation history says you traveled on Cortaro, Cortaro Farms, Magee, Thornydale, River, Oracle, Grant, Ironwood Hills, Speedway, Anklam, Gates Pass, Saguaro, and one stravenue whose full name exceeded the available memory.</p><p>La Cañada never reached Canada. You never made a wrong turn. You merely experienced every correct name in the wrong order.</p>`,
      question: "How should Tucson mark the route?",
      final: true,
      choices: [
        ["A","Install a sign reading YOU ARE PROBABLY HERE.","It becomes the most trusted directional sign in Pima County.","A Qualified Success","Nobody knows where they are, but expectations are finally accurate."],
        ["B","Declare the entire trip a scenic loop.","Tourists love it because they assume the confusion is curated.","The Northwest Passage","The brochure promises beautiful scenery and no unnecessary certainty."],
        ["C","Give every road one permanent name.","The proposal dies when officials discover the roads have already formed separate identities.","Government Restraint","For once, Tucson decides not to add another sign."],
        ["D","Keep driving until the names make sense.","Tanque Verde becomes Redington Road and then the pavement disappears.","Signs of Trouble","The road provides its own closing argument."]
      ]
    }
  ]
};

const adventure13 = {
  slug: "the-address-that-isnt-in-tucson",
  title: "The Address That Isn’t in Tucson",
  subtitle: "Your mail says Tucson. Your permit says Marana. Pima County would like your parcel number before confirming you exist.",
  scenes: [
    {
      title: "One Modest Shade Structure",
      body: `<p>You decide to build a twelve-foot shade structure in your backyard, an extravagant Tucson luxury commonly known elsewhere as “not standing directly inside the sun.”</p><p>The permit form asks for your city. You type <strong>Tucson</strong>, exactly as it appears on every piece of mail you have received for ten years.</p><p>The City of Tucson website responds:</p><div class="sign">ADDRESS NOT FOUND WITHIN CITY LIMITS<br><small>Please reconsider where you live.</small></div><p>You look outside. Your house is still there.</p>`,
      question: "How do you establish your location?",
      choices: [
        ["A","Enter the address again.","The website admires your persistence and rejects your house in a slightly darker shade of red."],
        ["B","Check a map.","The map places you in Tucson, Marana, and an unincorporated area depending on the zoom level."],
        ["C","Call the City of Tucson.","A helpful employee confirms that your Tucson address is not in Tucson. She says this without laughing, proving extensive training."],
        ["D","Build the shade structure anyway.","A permit inspector materializes before the first post hole is finished. You ask which government sent him. He checks his badge."]
      ], next: 1
    },
    {
      title: "Tucson for Mailing Purposes",
      body: `<p>The post office confirms that your mailing address is Tucson.</p><p>The City of Tucson confirms that your property is not Tucson.</p><p>An online parcel map says your jurisdiction is Marana. A second map says Pima County. A third map is still loading imagery from 2009, when your backyard was apparently a shrub.</p><p>A temporary boundary sign appears beside your mailbox:</p><div class="sign">WELCOME TO TUCSON<br><small>For mailing purposes only.</small></div>`,
      question: "Who do you contact next?",
      choices: [
        ["A","Call Marana.","Marana asks whether you are inside the town limits or merely emotionally adjacent to them."],
        ["B","Call Pima County.","The county asks for your parcel number. You provide your street address. The county repeats its request more slowly."],
        ["C","Call the post office.","The clerk explains that mail delivery is not a constitutional opinion about municipal government."],
        ["D","Ask a neighbor.","She says she lives in Tucson, pays Marana taxes, receives county services, and votes wherever the ballot tells her."]
      ], next: 2
    },
    {
      title: "You Are Now a Parcel",
      body: `<p>Pima County locates your property after you recite a parcel number long enough to unlock a submarine.</p><p>“Good news,” the representative says. “Your land definitely exists.”</p><p>Your house is assigned a jurisdiction, postal city, school district, fire district, water provider, sanitation contractor, and voting precinct. No two boundaries appear to have met socially.</p><p>The representative emails a diagram. Your kitchen and garage are the same color, which feels encouraging.</p>`,
      question: "Which identity matters for the permit?",
      choices: [
        ["A","The postal city.","The permit office explains that the post office may deliver a pergola but cannot authorize one."],
        ["B","The parcel jurisdiction.","Correct—until the map refreshes and moves the boundary six pixels through your recycling bin."],
        ["C","The tax authority.","Everyone agrees taxes are jurisdictionally valid no matter where you think you live."],
        ["D","The fire district.","The fire district will protect the shade structure once somebody else permits it."]
      ], next: 3
    },
    {
      title: "The Jurisdiction Potluck",
      body: `<p>You schedule a conference call with Tucson, Marana, Pima County, the post office, the fire district, and the company that collects your trash.</p><p>Every participant explains a different boundary. Each explanation is accurate. Together they describe a house rotating slowly through local government.</p><p>The trash company remains silent until someone says “annexation,” then announces that annexed recycling is collected on alternate Thursdays unless the month contains a fifth Tuesday.</p><div class="sign">YOUR CALL IS IMPORTANT<br><small>It has been transferred to the appropriate century.</small></div>`,
      question: "How do you force a decision?",
      choices: [
        ["A","Ask one agency to take responsibility.","Everyone experiences sudden microphone trouble."],
        ["B","Share your screen and display the parcel map.","Six professionals begin drawing six different circles around your house."],
        ["C","Ask where to send the permit fee.","Marana unmutes instantly. The meeting has found its sense of direction."],
        ["D","Threaten to cancel the project.","All agencies approve this option without requiring a form."]
      ], next: 4
    },
    {
      title: "The Republic of One Parcel",
      body: `<p>After four transfers and one hold recording performed entirely on pan flute, you propose declaring your property an independent municipality.</p><p>Your spouse is appointed mayor because she left the room at the wrong moment. The dog becomes zoning administrator after sitting on the site plan.</p><p>The new nation possesses one house, two residents, three trash bins, and a disputed northern border running behind the air conditioner.</p><p>Your first council meeting begins beneath the unfinished shade structure.</p>`,
      question: "What is the municipality’s first ordinance?",
      choices: [
        ["A","Approve the shade structure.","The dog stamps the plan with one paw. It is the clearest approval you have received."],
        ["B","Adopt Tucson as the postal city.","The measure passes because nobody wants to notify every catalog company."],
        ["C","Annex the neighbor’s pool.","The neighbor mobilizes two patio umbrellas and demands international observers."],
        ["D","Require all boundaries to be visible.","Survey crews paint fourteen overlapping lines across the driveway and declare transparency achieved."]
      ], next: 5
    },
    {
      title: "Permit Issued Somewhere",
      body: `<p>A week later, an official envelope arrives.</p><p>It is addressed to your home in <strong>Tucson</strong>. Inside is a permit issued by the <strong>Town of Marana</strong>, identified by a <strong>Pima County</strong> parcel number.</p><p>The permit authorizes construction subject to inspection by an office whose phone number routes back to the first website.</p><p>You stand in the backyard holding the document. The afternoon temperature is 108 degrees. The unbuilt shade structure has become less of an improvement and more of a rescue operation.</p>`,
      question: "How does the jurisdiction crisis end?",
      final: true,
      choices: [
        ["A","Build the shade structure exactly as approved.","The inspector signs off while standing in its shade and refuses to discuss which city he drove from.","The Pergola Accord","Three governments recognize the structure. None admits recognizing one another."],
        ["B","Frame the permit instead.","It hangs beside your property tax bill as proof that local government once agreed long enough to print something.","Documented Existence","Your house is still difficult to locate, but it now has paperwork."],
        ["C","Keep the independent municipality.","Your first tax bill arrives from yourself. It includes a convenience fee.","The Republic of Backyard","The nation survives six days before requesting county trash service."],
        ["D","Move somewhere with simpler boundaries.","You find a house listed in Tucson with an Oro Valley school district and a Marana water provider.","Manifest Destiny Denied","The realtor hands you a parcel map. You return to your car without speaking."]
      ]
    }
  ]
};

const adventure14 = {
  slug: "biosphere-2-misplaced-the-oxygen",
  title: "Biosphere 2 Has Misplaced the Oxygen Again",
  subtitle: "A one-hour tour becomes a two-year mission after the building mistakes visitors for scientists.",
  scenes: [
    {
      title: "Please Exit Through the Airlock",
      body: `<p>Your Biosphere 2 guide leads twelve visitors through an airlock during what she calls “a brief demonstration of closed-system living.”</p><p>The outer door seals. The inner door opens. Somewhere, an elderly computer wakes up and mistakes the tour group for a research crew.</p><div class="sign">CLOSED-ECOLOGY MISSION ACTIVE<br><small>Estimated duration: 730 days</small></div><p>The guide presses the exit button. The computer replies, “Outside assistance would compromise your experience.”</p><p>A tourist wearing sandals asks whether lunch is included.</p>`,
      question: "What do you do first?",
      choices: [
        ["A","Find the emergency release.","It is behind glass labeled BREAK ONLY IF SCIENTIFIC INTEGRITY IS NO LONGER A CONCERN. Nobody wants to be first."],
        ["B","Call the control room.","Control congratulates the new crew and asks everyone to submit research objectives before dinner."],
        ["C","Explain that you bought a one-hour tour.","The computer extends the mission by one hour to compensate for the misunderstanding."],
        ["D","Ask about lunch.","The guide points toward six banana plants and lowers her voice. “Those are now strategic resources.”"]
      ], next: 1
    },
    {
      title: "The Oxygen Budget",
      body: `<p>The oxygen display drops from 20.9 percent to 20.8.</p><p>A recorded announcement advises everyone to breathe normally but “with greater institutional awareness.”</p><p>The guide explains that oxygen famously declined during the original mission. Soil microbes consumed it, and exposed concrete helped hide the resulting carbon dioxide.</p><p>Everyone looks at the walls.</p><p>The walls offer no comment, which is exactly what guilty concrete would do.</p>`,
      question: "How should the group conserve oxygen?",
      choices: [
        ["A","Stop unnecessary talking.","Three visitors immediately begin debating what qualifies as unnecessary."],
        ["B","Increase plant photosynthesis.","The rainforest requests better lighting and a written definition of overtime."],
        ["C","Interrogate the concrete.","You tap the wall. The oxygen meter drops another tenth, which feels evasive."],
        ["D","Open the emergency oxygen valve.","A warning says imported oxygen must be declared at Biosphere customs."]
      ], next: 2
    },
    {
      title: "The Biomes Reorganize",
      body: `<p>The artificial desert is becoming humid. A rainforest vine has crossed two habitat boundaries and is negotiating access to the kitchen.</p><p>Most carefully selected insects have vanished. Ants and cockroaches have formed a highly efficient coalition and now control agricultural distribution.</p><p>The banana crop is guarded by ants wearing crumbs.</p><div class="sign">BIOME REALIGNMENT IN PROGRESS<br><small>Nature has reviewed the original plan.</small></div>`,
      question: "Which ecological problem gets priority?",
      choices: [
        ["A","Restore the desert.","The dehumidifier drains into the ocean, which files a formal complaint about salinity."],
        ["B","Contain the rainforest vine.","Cutting one tendril produces three more. The vine has interpreted pruning as encouragement."],
        ["C","Negotiate with the ants.","They demand sugar, territorial recognition, and one seat on the research committee."],
        ["D","Eliminate the cockroaches.","The computer rejects your proposal because they are now the mission's most successful livestock."]
      ], next: 3
    },
    {
      title: "The Crew Divides",
      body: `<p>By afternoon, the twelve visitors have split into factions.</p><p>The <strong>Open the Door Group</strong> wants air, lunch, and the return of personal liberty.</p><p>The <strong>Protect the Experiment Group</strong> has designed mission patches and refuses to waste this opportunity merely because nobody volunteered.</p><p>A third faction consists of one child who has befriended the ants and now possesses most of the crackers.</p>`,
      question: "Who should lead the accidental mission?",
      choices: [
        ["A","The tour guide.","She accepts command while quietly searching her employee handbook for the word mutiny."],
        ["B","The person with the mission patches.","He promotes himself to commander and immediately schedules a documentary interview."],
        ["C","The child controlling the crackers.","The agricultural economy stabilizes under a strict one-cookie standard."],
        ["D","Let everyone vote.","The ants arrive with 40,000 unverified ballots."]
      ], next: 4
    },
    {
      title: "Outside Air, Locally Sourced",
      body: `<p>The oxygen level reaches 19.7 percent. Control offers to inject outside oxygen and unlock the doors.</p><p>Unfortunately, accepting outside help would end the closed-system experiment and reduce the mission's scientific purity from 100 percent to “still more controlled than most family vacations.”</p><p>The computer presents a compromise:</p><div class="sign">EMERGENCY OXYGEN AVAILABLE<br><small>May be classified as locally sourced atmospheric research material.</small></div>`,
      question: "Do you accept the oxygen?",
      choices: [
        ["A","Yes. Breathing outranks branding.","Fresh oxygen enters. The mission patch committee adds a tiny asterisk nobody can see from Earth."],
        ["B","No. Protect the experiment.","The sandals tourist begins licking a rainforest leaf and scientific purity loses the moral high ground."],
        ["C","Accept it but rename it.","The official report records an internal relocation of regional atmosphere."],
        ["D","Open the doors instead.","The computer asks whether you are certain you want to expose Biosphere 2 to Biosphere 1."]
      ], next: 5
    },
    {
      title: "Biosphere 1 Fails Inspection",
      body: `<p>The doors finally open. Everyone prepares to leave.</p><p>Then the computer displays satellite images of drought, smoke, disappearing habitat, overheated cities, and several meetings about scheduling future meetings.</p><p>A final message appears:</p><div class="quote">BIOSPHERE 2 ASSESSMENT COMPLETE.<br>BEGINNING RECERTIFICATION OF BIOSPHERE 1.</div><p>The guide explains that Biosphere 1 is Earth.</p><p>The computer asks who has been maintaining it.</p><p>Nobody reaches for the microphone.</p>`,
      question: "What does humanity tell the inspector?",
      final: true,
      choices: [
        ["A","“We thought someone else was handling it.”","The computer accepts this as the most thoroughly documented human response.","Deferred Planetary Maintenance","Earth receives a temporary occupancy permit and thirty days to clear the atmosphere."],
        ["B","“We have formed a committee.”","The computer requests evidence of progress. Humanity submits a logo and three postponed agendas.","The Blue-Ribbon Biosphere","Earth remains operational pending a report nobody has authority to release."],
        ["C","“Can we move into Biosphere 2?”","The ants reject the application because humanity lacks references and has a history of damaging rentals.","No Vacancy","The backup planet has reviewed the original tenant."],
        ["D","“We will fix Biosphere 1.”","The computer unlocks the exit and schedules a follow-up inspection. Nobody asks whether 730 days might have been easier.","Return to Earth","You leave with oxygen, a mission patch, and the uncomfortable feeling that the experiment followed you outside."]
      ]
    }
  ]
};


// Keep the premise, but make the joke concrete enough to land without knowing
// anything about local government: three agencies arguing over one stop sign.
adventure9.subtitle = "One stop sign falls down. Three governments show up. Nobody wants to be the one who owns it.";
adventure9.scenes = [
  {
    title: "The Stop Sign Nobody Owns",
    body: `<p>A windstorm knocks down the stop sign at the entrance to your neighborhood.</p><p>The pole lands in Marana. The red sign lands in Pima County. One corner is still touching Tucson.</p><p>You take a picture and report it.</p><p>Marana says, “Not ours.”</p><p>Pima County says, “Mostly not ours.”</p><p>Tucson says, “We own that tiny corner.”</p><p>The stop sign is lying in the dirt, wondering whether it should hire a lawyer.</p>`,
    question: "Who do you try first?",
    choices: [
      ["A","Call Marana.","They agree the pole is in Marana. Unfortunately, the important red part is not."],
      ["B","Call Pima County.","They agree the red part is in the county. They ask whether you can move the pole six feet first."],
      ["C","Call Tucson.","Tucson agrees to take responsibility for the corner. Nobody knows what to do with one corner of a stop sign."],
      ["D","Report the dangerous intersection.","Someone quickly puts out cones. The cones are the first objects all day that everybody agrees belong there."]
    ], next: 1
  },
  {
    title: "Three Trucks, One Sign",
    body: `<p>A Marana truck arrives.</p><p>Then a Pima County truck.</p><p>Then a Tucson truck.</p><p>Six workers stand around the fallen sign looking at three different maps.</p><p>Every map has a bright line showing where somebody else's problem begins.</p><p>Meanwhile, drivers are taking turns by waving politely, waving angrily, or just closing their eyes and hoping.</p>`,
    question: "How do you get someone to fix it?",
    choices: [
      ["A","Ask all three crews at once.","All three point in different directions. For one beautiful second, they look like a synchronized dance team."],
      ["B","Ask the closest crew to just put it back up.","They like the idea until somebody asks who would pay for the bolts."],
      ["C","Call a TV reporter.","The camera comes out. Suddenly every truck contains a supervisor."],
      ["D","Pick up the sign yourself.","Three people shout, “WAIT!” Apparently this is the first thing everyone agrees on."]
    ], next: 2
  },
  {
    title: "The Meeting About the Sign",
    body: `<p>Instead of fixing the sign, everyone holds a meeting beside it.</p><p>A folding table appears.</p><p>Half the table is in Marana. One leg is in Tucson. The coffee is in Pima County.</p><p>The stop sign is still flat on the ground.</p><p>A kid riding by on a bicycle asks, “Why don't you just stand it up?”</p><p>Nobody answers.</p>`,
    question: "What should happen next?",
    choices: [
      ["A","Let one crew fix it now and sort out the bill later.","Everyone stares at you as if you just suggested fixing a problem."],
      ["B","Move the whole sign into one city.","Excellent idea. Now everyone argues about which city gets it."],
      ["C","Use a temporary stop sign.","Someone produces one from a truck. The crowd reacts as if a magician pulled out a rabbit."],
      ["D","Put up three stop signs.","Drivers would have to stop three times. Government efficiency has officially gone too far."]
    ], next: 3
  },
  {
    title: "The Wind Solves It",
    body: `<p>Another gust of wind blows the fallen sign downhill.</p><p>It slides twelve feet.</p><p>Now the entire sign is in Pima County.</p><p>Everyone becomes very quiet.</p><p>The county worker looks at the sign.</p><p>Then at the other two crews.</p><p>Then back at the sign.</p><p>“Fine,” she says.</p><p>Everyone applauds the wind.</p>`,
    question: "What would prevent this next time?",
    choices: [
      ["A","One phone number for road emergencies.","A revolutionary idea: the caller does not need to know which map owns the pothole, sign, or squirrel."],
      ["B","A simple map regular people can understand.","The new map has roads, names, and almost no mysterious colored blobs. People become suspicious."],
      ["C","Let the nearest crew fix safety problems.","The crews celebrate. They have secretly wanted permission to use their tools."],
      ["D","Make stop signs heavier.","This would solve the wind problem while leaving the government problem completely untouched."]
    ], next: 4
  },
  {
    title: "Stop Means Stop",
    body: `<p>Before sunset, the new stop sign is standing.</p><p>It has four agency stickers on the back and one simple word on the front:</p><div class="sign">STOP</div><p>After an entire day of government discussion, the sign turns out to have the clearest instructions of anyone involved.</p>`,
    question: "How does the story end?",
    final: true,
    choices: [
      ["A","Let crews fix safety problems first.","The next fallen sign is repaired before anyone unfolds a table.","Fix It First","For one glorious afternoon, the toolbox beats the rulebook."],
      ["B","Publish the simple map.","Residents finally learn who to call without needing a geography degree.","Now You Know","The map fits on one page. Civilization survives."],
      ["C","Save the folding table in a museum.","The label reads: TABLE USED TO DISCUSS ONE FALLEN STOP SIGN.","Historic Furniture","Visitors assume the exhibit is satire. It is not."],
      ["D","Thank the wind.","A small plaque appears: THIS PROBLEM WAS SOLVED BY WEATHER.","Employee of the Month","The wind is unavailable for comment."]
    ]
  }
];


(() => {
  if (typeof adventure12 === "undefined") return;

  const scene = adventure12.scenes.find((item) => item.title === "Grant Requests a New Identity");
  if (!scene || scene.body.includes("Linda Vista Boulevard")) return;

  const marker = `<p>The pavement has not changed. The scenery has barely changed. Only the road's confidence has improved.</p>`;
  const bit = `<p>Then Tucson introduces a different problem: apparently some road names were purchased in bulk.</p><p>You see <strong>Linda Vista Boulevard</strong>. Then <strong>Linda Vista Road</strong>. Then <strong>Linda Vista Park</strong>, which is not even on either one.</p><p>So Linda Vista is not one place. It is a name Tucson keeps handing out.</p><p>Then <strong>Country Club</strong> starts multiplying too: <strong>Country Club Road</strong>, <strong>Country Club Vista Drive</strong>, <strong>Country Club Vista Circle</strong>, Country Club Park, and Country Club Manor.</p><div class="quote">Tucson did not run out of road names.<br>It started reusing them.</div><p>“Meet me near Country Club” is not a location. It is a guessing game.</p>`;

  scene.body = scene.body.replace(marker, `${bit}${marker}`);
})();


const adventure15 = {
  slug: "the-crossing-guard-in-the-sky",
  title: "The Crossing Guard in the Sky",
  subtitle: "Tucson turns a crossing guard into three lights and assumes the rest is obvious.",
  scenes: [
    {
      title: "The Traffic Light That Is Off",
      body: `<p>You approach a pedestrian crossing and see three lights hanging over the road.</p><p>They are completely dark.</p><p>You briefly wonder whether the signal is broken. Then a pedestrian presses a button.</p><p>The machine wakes up.</p><div class="sign">YELLOW</div><p>Good. You know yellow. You have trained for yellow.</p>`,
      question: "What do you do?",
      choices: [
        ["A","Slow down and prepare to stop.","Excellent. The signal has begun speaking a language you recognize."],
        ["B","Keep watching because something is clearly about to happen.","A solid red appears. Your confidence returns. Red is one of your strongest subjects."],
        ["C","Assume the dark signal was broken.","It immediately proves otherwise with enough colored lights to make the diagnosis awkward."],
        ["D","Look for a crossing guard.","There isn't one. Tucson has apparently moved the position into the electrical department."]
      ], next: 1
    },
    {
      title: "Still Within Your Training",
      body: `<p>The signal turns solid red.</p><p>You stop. The pedestrian begins crossing.</p><p>Everything makes sense again.</p><p>Then the two red lights begin flashing alternately.</p><div class="sign">RED &nbsp; RED<br><small>Now taking turns</small></div><p>Tucson has changed the rules in the middle of the exam.</p>`,
      question: "What does flashing red mean here?",
      choices: [
        ["A","Remain stopped until you are sure what comes next.","Reasonable. The driver beside you does exactly the same thing, possibly because you did."],
        ["B","Treat it like a stop sign and proceed only when the crossing is clear.","That is the idea. Unfortunately, the machine has no arms with which to wave you through reassuringly."],
        ["C","Wait for green.","There is no green. You have discovered the signal's first personality trait."],
        ["D","Look at the other drivers for guidance.","They look back. Tucson has accidentally created a four-car committee."]
      ], next: 2
    },
    {
      title: "The Crossing Guard Has Been Automated",
      body: `<p>Then you understand what Tucson has done.</p><p><strong>They turned a school crossing guard into a traffic signal.</strong></p><p>The dark signal means the crossing guard is off duty. Yellow means the guard has noticed the pedestrian. Solid red means everybody stops. Flashing red means stop, then proceed when the crossing is clear.</p><p>Unfortunately, they removed the crossing guard's most useful feature: an actual person standing there making it obvious what you should do.</p>`,
      question: "What would make this easier for a first-time driver?",
      choices: [
        ["A","A small sign explaining FLASHING RED = STOP, THEN GO WHEN CLEAR.","Six words accomplish what your facial expression has been attempting for thirty seconds."],
        ["B","An electronic hand that waves cars through.","Transportation officials reject it as ridiculous, which seems like a surprisingly late objection."],
        ["C","A recorded crossing guard voice.","The speaker says, “You're good, go ahead,” and three drivers nearly applaud."],
        ["D","Nothing. Everyone will eventually learn it.","True. Tucson has historically relied heavily on eventually."]
      ], next: 3
    },
    {
      title: "The Four-Car Committee",
      body: `<p>The pedestrian reaches the sidewalk. The crossing is clear.</p><p>You stop at the flashing red and prepare to proceed.</p><p>The driver beside you remains stopped.</p><p>You wonder whether she knows something you don't.</p><p>She wonders exactly the same thing about you.</p><p>The driver behind both of you has now become an unpaid consultant.</p>`,
      question: "Who breaks the deadlock?",
      choices: [
        ["A","You stop, verify the crossing is clear, then proceed.","The other cars immediately follow. You have been elected temporary HAWK interpreter."],
        ["B","Wait for someone else.","Everyone agrees with this strategy independently. Nothing happens with impressive coordination."],
        ["C","Point at the empty crosswalk.","The gesture communicates more information than the entire overhead installation."],
        ["D","Roll down the window and ask whether anybody understands this thing.","Three windows open. A brief seminar begins at the intersection."]
      ], next: 4
    },
    {
      title: "Graduation",
      body: `<p>You proceed safely through the crossing.</p><p>Two blocks later you encounter an ordinary traffic light: red, yellow, green.</p><p>You have never been so happy to see government equipment you understand.</p><p>Behind you, another driver approaches the HAWK for the first time. The signal is dark.</p><p>You know exactly what that driver is thinking.</p>`,
      question: "How does Tucson improve the experience?",
      final: true,
      choices: [
        ["A","Add plain-language instructions at HAWK crossings.","New drivers understand the flashing red without needing an intersection apprenticeship.","The Six-Word Manual","STOP, THEN GO WHEN CLEAR becomes Tucson's shortest transportation study."],
        ["B","Bring back a human crossing guard to explain the automated crossing guard.","The guard spends the morning pointing at the lights and the afternoon wondering why automation required another employee.","Full Circle","Tucson successfully automates a job by adding the job back."],
        ["C","Require every Tucson driver to encounter one during the license test.","The examiner activates the HAWK. Half the applicants ask whether the signal is broken before it even turns on.","Local Knowledge","Nobody is embarrassed. Everybody learns."],
        ["D","Leave it exactly as it is.","Eventually every local learns the sequence and begins giving visiting relatives a small lecture before leaving the airport.","Welcome to Tucson","Your first attraction is a traffic signal with an orientation program."]
      ]
    }
  ]
};


const adventure16 = {
  slug: "your-emergency-is-apparently-my-commute",
  title: "Your Emergency Is Apparently My Commute",
  subtitle: "One ordinary Tucson errand. Everybody else gets a vote in how it goes.",
  scenes: [
    {
      title: "Apparently You're in the Way",
      body: `<p>You need one thing from the store.</p><p>One.</p><p>This should take twenty minutes.</p><p>You pull onto Oracle Road and settle into traffic. Almost immediately, a pickup appears in your rearview mirror.</p><p>Actually, you don't so much <em>notice</em> it as discover that you've apparently acquired a trailer.</p><p>The driver is close enough to inspect your rear upholstery. You're already keeping up with traffic.</p><p>He disagrees.</p>`,
      question: "What do you do?",
      choices: [
        ["A","Keep doing exactly what you're doing.","You maintain your speed. The pickup driver interprets this as an act of aggression, rockets around you, and disappears ahead. Thirty seconds later, you pull up beside him at a red light. He has converted several gallons of adrenaline into seventeen feet."],
        ["B","Move over and let him go.","The pickup launches past you like a donor organ is being transported in the truck bed. At the next red light, you pull up behind him. He has risked four people's lives and successfully moved from behind you to directly in front of you."],
        ["C","Speed up a little.","You increase your speed. So does he. Ah. This wasn't about your speed. This was about his rightful ownership of the pavement currently occupied by your car. You move over. At the next light, you're beside him anyway."],
        ["D","Take the next turn and get away from him.","You escape the pickup and add four minutes to the trip. Your navigation app congratulates you by routing you back onto Oracle directly behind the same pickup."]
      ], next: 1
    },
    {
      title: "Courtesy, Donated on Your Behalf",
      body: `<p>Traffic starts moving normally again.</p><p>Then the SUV ahead suddenly brakes.</p><p>You brake.</p><p>No pedestrian. No animal. No emergency.</p><p>The driver is waving someone out of a shopping-center driveway.</p><p>The waiting driver hesitates. The SUV driver waves harder. The waiting driver waves back.</p><p>Nobody moves.</p><p>You are witnessing a negotiation between two extremely courteous people who have forgotten that twenty-seven other people are involved.</p>`,
      question: "What do you do?",
      choices: [
        ["A","Wait patiently.","You wait. Someone behind you honks—not at the SUV, at you. Apparently you are now management."],
        ["B","Give one short honk.","The SUV driver looks in the mirror with the expression of someone who has just discovered that kindness has critics. You immediately regret participating in society."],
        ["C","Change lanes and escape.","Excellent decision for approximately six seconds. A sedan ahead crosses two lanes after discovering that the turn it takes every week is, astonishingly, still located here."],
        ["D","Leave extra room and let the ceremony finish.","The waiting car finally pulls out, then stops halfway across both lanes to decide which lane it wanted. Courtesy has successfully reproduced."]
      ], next: 2
    },
    {
      title: "Yellow Means Something Different to Everyone",
      body: `<p>A few blocks later, the next light turns yellow.</p><p>You're far enough away that stopping is easy.</p><p>The car beside you reaches a different conclusion.</p><p>It accelerates.</p><p>The light turns red while the car is still in the intersection. Cross traffic gets green. Nobody can move because our hero is now sitting sideways in everybody else's afternoon.</p>`,
      question: "When your light finally turns green, what do you do?",
      choices: [
        ["A","Go as soon as there's room.","You start forward. Someone from the cross street makes one final attempt to squeeze through. You stop again. Your green light is apparently advisory."],
        ["B","Wait an extra second.","Good call. A car sails through the red light. Had you moved immediately, the two of you would have become considerably better acquainted."],
        ["C","Let somebody else test the intersection first.","The car next to you starts forward. Nothing hits it. Promising. You follow, having pioneered the use of another Tucson driver as a laboratory mouse."],
        ["D","Turn right and avoid the intersection.","You turn right. Navigation adds another three minutes and immediately directs you toward an intersection occupied by someone making a left turn from the right lane."]
      ], next: 3
    },
    {
      title: "The Lane Is a Suggestion",
      body: `<p>You can finally see the store ahead.</p><p>A sedan in the far-left lane suddenly realizes the entrance is on the right.</p><p>Its turn signal appears at the exact moment the car begins crossing three lanes.</p><p>The signal is less a request than a press release.</p><p>Everyone brakes. The sedan reaches the driveway and continues as though the maneuver had been approved in advance.</p>`,
      question: "How do you respond?",
      choices: [
        ["A","Brake and give the driver room.","You lose six seconds and retain the front half of your car. This is considered a strong outcome."],
        ["B","Hold your lane.","The sedan keeps coming until both drivers discover the ancient Tucson negotiating tool known as eye contact."],
        ["C","Move away from the sedan.","You change lanes safely and immediately inherit a new problem: a driver entering from the parking lot who believes merging means choosing a victim."],
        ["D","Miss the entrance and circle back.","You continue to the next driveway. The sedan that cut across traffic is now stopped at the first parking-lot speed bump. You have somehow passed it without trying."]
      ], next: 4
    },
    {
      title: "The Great Parking Space Expedition",
      body: `<p>At last, you enter the parking lot.</p><p>The twenty-minute errand is already losing its argument with the clock.</p><p>Then you see him.</p><p>The pickup driver from Oracle.</p><p>Speed Racer is circling the lot at walking speed.</p><p>He passes an empty space.</p><p>Too far from the entrance.</p><p>Another empty space.</p><p>Unacceptable.</p><p>The man who treated Oracle Road like qualifying at Talladega is now unwilling to walk an additional forty yards.</p>`,
      question: "Where do you park?",
      choices: [
        ["A","Take the first ordinary space.","You park, get out, and start walking. The pickup passes you again, still hunting. For the first time all afternoon, his urgency has vanished."],
        ["B","Look for a closer space too.","You join the hunt. For thirty seconds, you and the pickup orbit the same row like two moons competing for handicapped-adjacent real estate. You abandon the mission first."],
        ["C","Park at the far edge of the lot.","You park immediately. The walk takes forty-five seconds. The pickup is still circling when you reach the entrance."],
        ["D","Wait to see what Speed Racer does.","He stops for a departing shopper who is loading twelve bags, returning a cart, checking a receipt, and apparently refinancing the vehicle before leaving." ]
      ], next: 5
    },
    {
      title: "Eleven Seconds",
      body: `<p>You walk toward the store.</p><p>Behind you, the pickup finally finds a space.</p><p>You reach the entrance.</p><p>A few seconds later, Speed Racer walks in behind you.</p><p>After tailgating, weaving, accelerating, changing lanes, and treating several traffic laws as interesting suggestions, he has arrived approximately eleven seconds after you.</p><p>You only wanted one thing from the store.</p><p>But all the way here, strangers made decisions for themselves—and handed you the consequences.</p><div class="quote">Everybody drives their own car.<br>Unfortunately, they're also driving yours.</div>`,
      question: "What have you learned from the trip?",
      final: true,
      choices: [
        ["A","Getting ahead isn't the same as getting there sooner.","Speed Racer reaches the automatic doors just as you do.","The Eleven-Second Victory","He won Oracle Road. You both arrived at the produce section at the same time."],
        ["B","Other people's tiny decisions become your problem.","The trip required you to react to choices you never made and risks you never volunteered for.","Involuntary Driver's Ed","Nobody asked you to join the experiment. Tucson enrolled you automatically."],
        ["C","Leave more room for other people's bad ideas.","You decide that extra space is not surrender. It is simply somewhere for somebody else's nonsense to happen without involving your bumper.","The Nonsense Buffer","Defensive driving turns out to be mostly defensive predicting."],
        ["D","Buy the one thing and go home.","You enter the store and discover you forgot the shopping list. Fortunately, you only needed one thing. Unfortunately, you can no longer remember what it was.","The Actual Emergency","After surviving Tucson traffic, you are defeated by the reason you left home." ]
      ]
    }
  ]
};
