"use strict";

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
      body: `<p>The app sends you south on Oracle, then west on <strong>Grant Road</strong>.</p><p>Grant behaves like an ordinary road until Silverbell. There, without a turn or farewell, it becomes <strong>Ironwood Hills Drive</strong>.</p><p>The pavement has not changed. The scenery has barely changed. Only the road's confidence has improved.</p><div class="sign">GRANT ROAD HAS LEFT THE CITY<br><small>Please address it by its new professional name.</small></div>`,
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
