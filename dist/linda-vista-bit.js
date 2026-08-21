"use strict";

(() => {
  const targetSlug = "signs-of-trouble";
  const currentSlug = location.pathname.match(/^\/adventures\/([^/]+)\/?/)?.[1];
  if (currentSlug !== targetSlug) return;

  const marker = "Linda Vista isn't a location. It's a franchise.";

  function addLindaVistaBit() {
    if (document.body.textContent.includes(marker)) return;

    const paragraphs = [...document.querySelectorAll("#app .story p")];
    const anchor = paragraphs.find((p) => p.textContent.includes("Ironwood Hills Drive"));
    if (!anchor) return;

    const bit = document.createElement("div");
    bit.className = "linda-vista-bit";
    bit.innerHTML = `<p>A little later, the map offers <strong>Linda Vista Boulevard</strong>.</p><p>Fine.</p><p>Then you notice <strong>Linda Vista Road</strong>. Different road.</p><p>Then <strong>Linda Vista Park</strong> appears. Naturally, Linda Vista Park is on <strong>Camino del Grijalva</strong>—not Linda Vista Boulevard.</p><p>At this point you understand the system.</p><div class="quote">Linda Vista isn't a location.<br>It's a franchise.</div><p>Somewhere in Pima County, there is probably a Linda Vista Vista overlooking the other Linda Vistas.</p>`;

    anchor.insertAdjacentElement("afterend", bit);
  }

  addLindaVistaBit();
  new MutationObserver(addLindaVistaBit).observe(document.querySelector("#app"), { childList: true, subtree: true });
})();
