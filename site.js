const configuredUrl = window.TEAMFRAME_WALKTHROUGH_URL || "";
const configNote = document.querySelector(".config-note");

document.querySelectorAll(".walkthrough-cta").forEach((cta) => {
  if (!configuredUrl) {
    cta.addEventListener("click", (event) => event.preventDefault());
    return;
  }

  cta.setAttribute("href", configuredUrl);
  cta.removeAttribute("aria-disabled");
  cta.removeAttribute("title");
});

if (configuredUrl && configNote) {
  configNote.remove();
}
