"use strict";

(() => {
  const publishedSlugs = new Set([
    "the-pothole-subway",
    "the-mural-map",
    "the-doctor-is-a-data-center",
    "the-boneyard-restroom",
    "signs-of-trouble",
    "biosphere-2-misplaced-the-oxygen",
    "the-crossing-guard-in-the-sky"
  ]);

  const currentSlug = location.pathname.match(/^\/adventures\/([^/]+)\/?/)?.[1];
  if (currentSlug && !publishedSlugs.has(currentSlug)) {
    location.replace("/");
    return;
  }

  function pruneUnpublishedTiles() {
    document.querySelectorAll("a.adventure-tile").forEach((tile) => {
      try {
        const slug = new URL(tile.href, location.origin).pathname.match(/^\/adventures\/([^/]+)\/?/)?.[1];
        if (slug && !publishedSlugs.has(slug)) tile.remove();
      } catch (_) {
        // Leave malformed/non-adventure links alone.
      }
    });
  }

  pruneUnpublishedTiles();
  new MutationObserver(pruneUnpublishedTiles).observe(document.querySelector("#app"), { childList: true, subtree: true });
})();
