"use strict";

(function () {
  function send(eventName, params = {}) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", eventName, params);
  }

  function currentAdventure() {
    const match = location.pathname.match(/^\/adventures\/([^/]+)/);
    return match ? match[1] : null;
  }

  function currentScene() {
    const heading = document.querySelector("#app article.card h2");
    return heading ? heading.textContent.trim() : null;
  }

  function adventureTitle() {
    const slug = currentAdventure();
    if (!slug) return null;
    const tile = document.querySelector(`[data-start="${CSS.escape(slug)}"] strong`);
    if (tile) return tile.textContent.replace(/^Adventure\s+\d+:\s*/, "").trim();
    return document.title;
  }

  function trackVirtualPage(path, title) {
    send("page_view", {
      page_location: location.origin + path,
      page_path: path,
      page_title: title
    });
  }

  document.addEventListener("click", function (event) {
    const start = event.target.closest("[data-start]");
    if (start) {
      send("adventure_start", {
        adventure_slug: start.dataset.start,
        adventure_title: start.querySelector("strong")?.textContent.replace(/^Adventure\s+\d+:\s*/, "").trim() || start.dataset.start
      });
      return;
    }

    const choice = event.target.closest("[data-choice]");
    if (choice && !choice.disabled) {
      const scene = currentScene();
      const sceneIndex = Array.from(document.querySelectorAll(".choice")).indexOf(choice);
      const isFinal = document.querySelector("#app article.card")?.classList.contains("ending") || false;
      send("adventure_choice", {
        adventure_slug: currentAdventure(),
        adventure_title: adventureTitle(),
        scene_title: scene,
        choice_number: Number(choice.dataset.choice) + 1,
        choice_text: choice.textContent.trim()
      });
      setTimeout(function () {
        const ending = document.querySelector(".ending-name");
        if (ending) {
          send("adventure_complete", {
            adventure_slug: currentAdventure(),
            adventure_title: adventureTitle(),
            ending: ending.textContent.replace(/^Ending:\s*/, "").trim()
          });
        }
      }, 0);
      return;
    }

    const daily = event.target.closest("[data-daily-choice]");
    if (daily && !daily.disabled) {
      send("daily_choice", {
        question: document.querySelector(".daily-card h1")?.textContent.trim() || "Tucson Question of the Day",
        choice_number: Number(daily.dataset.dailyChoice) + 1,
        choice_text: daily.textContent.trim()
      });
      return;
    }

    const about = event.target.closest("[data-about]");
    if (about) {
      send("about_view", { source_path: location.pathname });
      setTimeout(() => trackVirtualPage("/about/", "About Tucson Adventures"), 0);
      return;
    }

    const home = event.target.closest("[data-home]");
    if (home) {
      setTimeout(() => trackVirtualPage("/", "Tucson Adventures"), 0);
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;
    const action = actionButton.dataset.action;
    const common = {
      adventure_slug: currentAdventure(),
      adventure_title: adventureTitle(),
      scene_title: currentScene()
    };
    if (action === "restart") send("adventure_restart", common);
    else if (action === "share") send("adventure_share", common);
    else if (action === "end") send("adventure_end", common);
    else if (action === "back") send("adventure_back", common);
    else if (action === "continue") send("adventure_continue", common);
  }, true);

  if (currentAdventure()) {
    send("adventure_view", {
      adventure_slug: currentAdventure(),
      adventure_title: adventureTitle()
    });
  } else if (location.pathname.startsWith("/about")) {
    send("about_view", { source_path: "direct" });
  } else if (location.pathname.startsWith("/daily")) {
    send("daily_view");
  }
})();
