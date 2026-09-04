import { readFile } from "node:fs/promises";

const html = await readFile("index.html", "utf8");
const css = await readFile("styles.css", "utf8");
const js = await readFile("site.js", "utf8");

const screenshotFiles = [
  "teamframe-dashboard.png",
  "teamframe-employees.png",
  "teamframe-employee-record.png",
  "teamframe-leave.png",
  "teamframe-onboarding.png",
  "teamframe-policies.png",
];

const requiredSections = [
  "Who it is for",
  "What TeamFrame handles",
  "Why it is different",
  "Real product screenshots",
  "Pricing",
  "Optional Managed People Ops",
  "Security and data control",
  "Conceptualised by",
];

for (const section of requiredSections) {
  if (!html.includes(section)) {
    throw new Error(`Missing section: ${section}`);
  }
}

if (!html.includes("Book a walkthrough")) {
  throw new Error("Missing Book a walkthrough CTA");
}

if (!js.includes("TEAMFRAME_WALKTHROUGH_URL")) {
  throw new Error("CTA script does not use the configured walkthrough URL");
}

if (!js.includes("configNote.remove()")) {
  throw new Error("Configured walkthrough URL must remove the launch configuration notice");
}

for (const screenshot of screenshotFiles) {
  if (!html.includes(`./assets/screenshots/${screenshot}`)) {
    throw new Error(`Missing screenshot reference: ${screenshot}`);
  }
}

for (const color of ["#01ff22", "#42494d", "#68707d", "#20242b", "#f4f6f8", "#ffffff"]) {
  if (!css.toLowerCase().includes(color)) {
    throw new Error(`Missing Takaven colour token: ${color}`);
  }
}

for (const forbidden of ["US$45/month", "Mauritius-only", "UAE-only", "free trial", "checkout"]) {
  if (html.toLowerCase().includes(forbidden.toLowerCase())) {
    throw new Error(`Forbidden launch-site wording found: ${forbidden}`);
  }
}

console.log("Static site checks passed");
