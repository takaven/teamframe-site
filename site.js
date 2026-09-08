const fallbackWalkthroughUrl = "mailto:admin@takaven.com?subject=TeamFrame%20walkthrough%20request";
const configuredUrl = window.TEAMFRAME_WALKTHROUGH_URL || fallbackWalkthroughUrl;
const configNote = document.querySelector(".config-note");

document.querySelectorAll(".walkthrough-cta").forEach((cta) => {
  cta.setAttribute("href", configuredUrl);
  cta.removeAttribute("aria-disabled");
  cta.removeAttribute("title");
});

if (configNote) {
  configNote.remove();
}
