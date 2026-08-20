"use strict";

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
