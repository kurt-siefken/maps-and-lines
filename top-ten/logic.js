document.querySelectorAll(".list-shell").forEach((shell) => {
    const button = shell.querySelector(".list-name");
    const panel = shell.querySelector(".list-numbers");

    const setPanelHeightVar = () => {
      // Temporarily ensure it's measurable
      const wasHidden = panel.hidden;
      if (wasHidden) panel.hidden = false;

      // If it's currently closed, height is 0; we still want scrollHeight.
      const target = panel.scrollHeight;
      panel.style.setProperty("--target-height", target + "px");

      if (wasHidden) panel.hidden = true;
    };

    const openPanel = () => {
      panel.hidden = false;           // must be visible so we can animate
      setPanelHeightVar();
      // Force a reflow so the browser picks up the starting height=0
      panel.getBoundingClientRect();
      panel.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    };

    const closePanel = () => {
      // Set current height explicitly before collapsing (handles dynamic content)
      panel.style.setProperty("--target-height", panel.scrollHeight + "px");
      panel.getBoundingClientRect();
      panel.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");

      // After transition ends, hide it (keeps tab order clean)
      const onEnd = (e) => {
        if (e.propertyName !== "height") return;
        panel.hidden = true;
        panel.removeEventListener("transitionend", onEnd);
      };
      panel.addEventListener("transitionend", onEnd);
    };

    // Initialize measured height (in case fonts load, etc.)
    setPanelHeightVar();

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      isOpen ? closePanel() : openPanel();
    });

    // Re-measure on resize so it stays correct for responsive layouts
    window.addEventListener("resize", () => {
      if (!panel.hidden) {
        setPanelHeightVar();
        // Keep it open at the new size
        panel.style.setProperty("--target-height", panel.scrollHeight + "px");
      } else {
        setPanelHeightVar();
      }
    });
  });





document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("all-lists");
  const items = Array.from(container.querySelectorAll(".list-shell"));

  // Fisher–Yates shuffle
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  // Re-append in shuffled order
  items.forEach(item => container.appendChild(item));

});