"use strict";

(() => {
  // Tucson roads do not reliably behave like a compass grid. Story navigation
  // should describe the driver's action (left/right/continue/follow), not a
  // compass turn, unless the direction is genuinely geographic context.
  const replacements = new Map([
    [
      "The app sends you south on Oracle, then west on Grant Road.",
      "The app sends you along Oracle, then tells you to turn right onto Grant Road."
    ]
  ]);

  function clarifyDrivingDirections() {
    document.querySelectorAll("#app .story p").forEach((paragraph) => {
      const replacement = replacements.get(paragraph.textContent.trim());
      if (!replacement) return;

      if (paragraph.querySelector("strong")) {
        paragraph.innerHTML = "The app sends you along Oracle, then tells you to turn right onto <strong>Grant Road</strong>.";
      } else {
        paragraph.textContent = replacement;
      }
    });
  }

  clarifyDrivingDirections();
  new MutationObserver(clarifyDrivingDirections).observe(document.querySelector("#app"), { childList: true, subtree: true });
})();
