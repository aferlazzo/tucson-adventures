"use strict";

(() => {
  if (typeof adventure12 === "undefined") return;

  const scene = adventure12.scenes.find((item) => item.title === "Grant Requests a New Identity");
  if (!scene || scene.body.includes("Linda Vista Boulevard")) return;

  const marker = `<p>The pavement has not changed. The scenery has barely changed. Only the road's confidence has improved.</p>`;
  const bit = `<p>Then Tucson introduces a different problem: apparently some road names were purchased in bulk.</p><p>You see <strong>Linda Vista Boulevard</strong>. Then <strong>Linda Vista Road</strong>. Then <strong>Linda Vista Park</strong>, which is not even on either one.</p><p>So Linda Vista is not one place. It is a name Tucson keeps handing out.</p><p>Then <strong>Country Club</strong> starts multiplying too: <strong>Country Club Road</strong>, <strong>Country Club Vista Drive</strong>, <strong>Country Club Vista Circle</strong>, Country Club Park, and Country Club Manor.</p><div class="quote">Tucson did not run out of road names.<br>It started reusing them.</div><p>“Meet me near Country Club” is not a location. It is a guessing game.</p>`;

  scene.body = scene.body.replace(marker, `${bit}${marker}`);
})();
