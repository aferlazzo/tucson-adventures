"use strict";

(() => {
  const targetSlug = "signs-of-trouble";
  const currentSlug = location.pathname.match(/^\/adventures\/([^/]+)\/?/)?.[1];
  if (currentSlug !== targetSlug) return;

  const marker = "Tucson did not run out of road names. It started reusing them.";

  function addNameReuseBit() {
    if (document.body.textContent.includes(marker)) return;

    const paragraphs = [...document.querySelectorAll("#app .story p")];
    const anchor = paragraphs.find((p) => p.textContent.includes("Ironwood Hills Drive"));
    if (!anchor) return;

    const bit = document.createElement("div");
    bit.className = "name-reuse-bit";
    bit.innerHTML = `<p>Then Tucson introduces a different problem: apparently some names were purchased in bulk.</p><p>You see <strong>Linda Vista Boulevard</strong>. Then <strong>Linda Vista Road</strong>. Then <strong>Linda Vista Park</strong>, which is on <strong>Camino del Grijalva</strong>.</p><p>So Linda Vista is not one place. It is more of a franchise.</p><p>Then <strong>Country Club</strong> starts multiplying too: <strong>Country Club Road</strong>, <strong>Country Club Vista Drive</strong>, <strong>Country Club Vista Circle</strong>, plus Country Club Park and Country Club Manor.</p><div class="quote">Tucson did not run out of road names.<br>It started reusing them.</div><p>You make a mental note that “meet me near Country Club” is not a location. It is the beginning of a negotiation.</p>`;

    anchor.insertAdjacentElement("afterend", bit);
  }

  addNameReuseBit();
  new MutationObserver(addNameReuseBit).observe(document.querySelector("#app"), { childList: true, subtree: true });
})();
