"use strict";

const signsAdventureV2 = {
  slug: "signs-of-trouble",
  title: "Signs of Trouble",
  subtitle: "You never made a wrong turn. Tucson changed the road anyway.",
  scenes: [
    {
      title: "Cortaro. Cortaro Farms. Magee.",
      body: `<p>You are driving east on <strong>Cortaro Road</strong> with one modest goal: get across town without becoming part of the story.</p><p>Your navigation app says, “Continue straight for six miles.”</p><p>At I-10, the sign says <strong>Cortaro Farms Road</strong>.</p><p>You did not turn.</p><p>A little farther east, another sign says <strong>Magee Road</strong>.</p><p>You still did not turn.</p><p>Your passenger looks at you.</p><p>“What road are we on?”</p><p>You look at the navigation screen. It says only:</p><div class="sign">CONTINUE STRAIGHT</div>`,
      question: "What do you tell your passenger?",
      choices: [
        ["A","“Cortaro.”","A green sign immediately says Cortaro Farms. Your credibility lasts nine seconds."],
        ["B","“Magee.”","Your passenger points out that Magee did not exist when the trip began."],
        ["C","“Apparently all three.”","Nobody can disprove this, including the navigation app."],
        ["D","“Do not ask questions Tucson has chosen not to answer.”","Your passenger nods and begins watching the signs like a weather warning."]
      ], next: 1
    },
    {
      title: "The First Actual Turn",
      body: `<p>At last the navigation app gives you an instruction that sounds normal:</p><div class="quote">Turn right on Thornydale Road.</div><p>You turn right.</p><p>This feels wonderful. A road has a name. You intentionally entered it. Everyone in the car witnessed the event.</p><p>For several miles, <strong>Thornydale Road</strong> remains Thornydale Road.</p><p>Your passenger relaxes.</p><p>Then the app says, “Turn left on River Road.”</p><p>“Good,” your passenger says. “A river. We can follow a river.”</p><p>You both know there is no reason to be this optimistic.</p>`,
      question: "How much confidence do you allow yourself?",
      choices: [
        ["A","Full confidence. Roads have names for a reason.","Tucson quietly writes this down for later."],
        ["B","Moderate confidence. Keep the map open.","The map shows River Road bending across the screen like it is avoiding a subpoena."],
        ["C","None. Photograph the Thornydale sign as evidence.","Your passenger approves. You now have documentation of one stable road."],
        ["D","Ask the app to repeat the instruction.","It says “River Road” again, but with the confidence of someone who will not be available for questions afterward."]
      ], next: 2
    },
    {
      title: "River Without the River",
      body: `<p>You turn left onto <strong>River Road</strong>.</p><p>The road bends east, then southeast, then east again. The Rillito appears, disappears, and generally refuses to participate in the naming discussion.</p><p>You pass La Cañada Drive.</p><p>Your passenger reads the sign twice.</p><p>“That doesn't go to Canada, does it?”</p><p>“No.”</p><p>“Good. I am learning Tucson.”</p><p>Twenty minutes into the trip, the navigation app announces:</p><div class="quote">Turn right on Oracle Road.</div><p>Your passenger sits up.</p><p>“Before we turn: what road are we on right now?”</p>`,
      question: "Can you answer without looking?",
      choices: [
        ["A","“River.”","Correct. You celebrate this achievement more than the situation warrants."],
        ["B","“Thornydale.”","Your passenger gently reminds you that Thornydale ended several miles and one emotional era ago."],
        ["C","“Cortaro-Magee-River.”","The app does not recognize this road, but it should."],
        ["D","Refuse to answer until parked.","This becomes the car's new navigation policy."]
      ], next: 3
    },
    {
      title: "Ask a Local",
      body: `<p>You stop for gas near Oracle. While the tank fills, you decide to settle the matter scientifically.</p><p>A man at the next pump has Arizona plates, sun sleeves, and the calm expression of someone who has survived this question before.</p><p>“Excuse me,” you say. “If I start on Cortaro, keep going straight, and it becomes Cortaro Farms and then Magee... did I change roads?”</p><p>He thinks for a moment.</p><p>“No.”</p><p>“Then why does the name change?”</p><p>He shrugs.</p><p>“Because that's what it's called there.”</p><p>Your passenger whispers, “That answered nothing.”</p><p>“No,” you say. “That answered everything.”</p>`,
      question: "What is your new rule for Tucson navigation?",
      choices: [
        ["A","Trust the pavement more than the name.","This works surprisingly well until the pavement itself forks."],
        ["B","Trust the app and stop reading signs.","Your passenger takes over sign-reading as an independent audit."],
        ["C","Trust the signs and ignore continuity.","Every block becomes a fresh relationship."],
        ["D","Accept that a road name is a temporary suggestion.","For the first time all morning, Tucson makes sense."]
      ], next: 4
    },
    {
      title: "You Have Arrived",
      body: `<p>The rest of the drive is uneventful by Tucson standards.</p><p>You follow Oracle south, make the required turns, and finally pull into the parking lot at your destination.</p><p>The navigation app announces, “You have arrived.”</p><p>You put the car in park.</p><p>Your passenger looks back toward the street sign at the entrance.</p><p>“Wait. What road is this?”</p><p>You do not look.</p><p>You do not check the map.</p><p>You do not reopen the discussion.</p><p>You take the keys out of the ignition.</p>`,
      question: "How does the trip end?",
      final: true,
      choices: [
        ["A","Say, “The one we came in on.”","Your passenger accepts this as the most accurate answer available.","The Tucson Standard","A road is whatever it needs to be until you get where you're going."],
        ["B","Check the street sign one last time.","It gives you a perfectly ordinary name you have never seen before.","One More Name","You close the map before Tucson can explain."],
        ["C","Ask the navigation app.","It says, “Head northwest on unnamed road.” You turn the phone face down.","Enough Information","Technology finally understands the assignment."],
        ["D","Go inside without finding out.","For the first time all day, you know exactly where you are: lunch.","You Win","Tucson keeps the road. You keep your sanity."]
      ]
    }
  ]
};

// Replace the original Signs of Trouble story without disturbing the rest of the adventure bundle.
adventures[11] = signsAdventureV2;
if (location.pathname.includes("/adventures/signs-of-trouble/")) {
  adventure = signsAdventureV2;
  storyPath = "/adventures/signs-of-trouble/";
  state.scene = 0;
  state.selected = null;
  state.history = [];
  localStorage.removeItem("tucson:signs-of-trouble");
  renderScene();
}
