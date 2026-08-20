"use strict";

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
