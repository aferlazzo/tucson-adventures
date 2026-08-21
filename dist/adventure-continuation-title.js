"use strict";

(() => {
  const titles = {
    "the-pothole-subway": "The Pothole That Built a Subway",
    "the-mural-map": "The Murals That Hid a Treasure Map",
    "the-doctor-is-a-data-center": "The Doctor Is a Data Center",
    "the-wash-woke-up": "The Wash Woke Up",
    "the-javelina-valet": "The Javelina Valet Service",
    "the-crossing-that-would-not-open": "The Crossing That Wouldn't Open",
    "the-gem-show-ate-downtown": "The Gem Show Ate Downtown",
    "but-its-a-dry-heat": "But It's a Dry Heat",
    "the-jurisdiction-line": "The Jurisdiction Line",
    "the-last-sonoran-hot-dog": "The Last Sonoran Hot Dog",
    "the-boneyard-restroom": "The Boneyard Restroom Connection",
    "signs-of-trouble": "Signs of Trouble",
    "biosphere-2-misplaced-the-oxygen": "Biosphere 2 Has Misplaced the Oxygen Again",
    "the-crossing-guard-in-the-sky": "The Crossing Guard in the Sky",
    "your-emergency-is-apparently-my-commute": "Your Emergency Is Apparently My Commute"
  };

  const style = document.createElement("style");
  style.textContent = `
    .adventure-context { margin: 0 0 .8rem; padding-bottom: .7rem; border-bottom: 1px solid var(--line); }
    .adventure-context-title { margin: 0; color: var(--blue-dark); font-size: clamp(1.05rem, 3.6vw, 1.28rem); font-weight: 850; line-height: 1.2; }
    .adventure-context-continued { display: block; margin-top: .12rem; color: var(--muted); font-size: .78rem; font-style: italic; letter-spacing: .02em; }
  `;
  document.head.append(style);

  function refreshContinuationTitle() {
    const match = location.pathname.match(/^\/adventures\/([^/]+)\/?/);
    const slug = match?.[1];
    const article = document.querySelector("#app article.card");
    if (!slug || !article || !titles[slug]) return;

    let scene = 0;
    try {
      const saved = JSON.parse(localStorage.getItem(`tucson:${slug}`));
      if (saved && Number.isInteger(saved.scene)) scene = saved.scene;
    } catch (_) {
      scene = 0;
    }

    const existing = article.querySelector(":scope > .adventure-context");
    if (scene === 0) {
      existing?.remove();
      return;
    }

    if (existing) return;

    const sceneHeading = article.querySelector(":scope > h2");
    if (!sceneHeading) return;

    const context = document.createElement("div");
    context.className = "adventure-context";
    context.innerHTML = `<p class="adventure-context-title"></p><span class="adventure-context-continued">continued</span>`;
    context.querySelector(".adventure-context-title").textContent = titles[slug];
    sceneHeading.before(context);
  }

  refreshContinuationTitle();
  new MutationObserver(refreshContinuationTitle).observe(document.querySelector("#app"), { childList: true, subtree: true });
})();
