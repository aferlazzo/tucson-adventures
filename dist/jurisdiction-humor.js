"use strict";

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
