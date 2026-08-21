"use strict";

(() => {
  const unwantedSlug = "the-address-that-isnt-in-tucson";
  const currentSlug = location.pathname.match(/^\/adventures\/([^/]+)\/?/)?.[1];

  if (currentSlug === unwantedSlug) {
    location.replace("/");
    return;
  }

  const removeUnrequestedTile = () => {
    document.querySelectorAll("a.adventure-tile").forEach((tile) => {
      try {
        const slug = new URL(tile.href, location.origin).pathname.match(/^\/adventures\/([^/]+)\/?/)?.[1];
        if (slug === unwantedSlug) tile.remove();
      } catch (_) {
        // Leave unrelated links alone.
      }
    });
  };

  removeUnrequestedTile();
  new MutationObserver(removeUnrequestedTile).observe(document.querySelector("#app"), { childList: true, subtree: true });
})();
