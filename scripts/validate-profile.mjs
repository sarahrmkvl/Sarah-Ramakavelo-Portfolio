import { readFile } from "node:fs/promises";

const fail = (message) => {
  console.error(`\nErreur dans profile.json : ${message}\n`);
  process.exit(1);
};

let profile;
let projectsFile;
try {
  profile = JSON.parse(await readFile(new URL("../profile.json", import.meta.url), "utf8"));
  projectsFile = JSON.parse(await readFile(new URL("../projects.json", import.meta.url), "utf8"));
} catch (error) {
  fail(`profile.json ou projects.json n'est pas un JSON valide. ${error.message}`);
}

const requiredString = (value, path) => {
  if (typeof value !== "string" || !value.trim()) fail(`« ${path} » doit contenir du texte.`);
};

const localized = (value, path) => {
  if (!value || typeof value !== "object") fail(`« ${path} » doit contenir les versions fr et en.`);
  requiredString(value.fr, `${path}.fr`);
  requiredString(value.en, `${path}.en`);
};

requiredString(profile?.identity?.fullName, "identity.fullName");
requiredString(profile?.identity?.initials, "identity.initials");
localized(profile?.positioning?.fr && { fr: profile.positioning.fr.headline, en: profile.positioning.en?.headline }, "positioning.headline");
localized(profile?.positioning?.fr && { fr: profile.positioning.fr.summary, en: profile.positioning.en?.summary }, "positioning.summary");
localized(profile?.story?.fr && { fr: profile.story.fr.title, en: profile.story.en?.title }, "story.title");
localized(profile?.story?.fr && { fr: profile.story.fr.subtitle, en: profile.story.en?.subtitle }, "story.subtitle");

if (!Array.isArray(profile?.story?.cards)) fail("« story.cards » doit être une liste.");
for (const [index, item] of profile.story.cards.entries()) {
  requiredString(item.id, `story.cards[${index}].id`);
  localized(item.kicker, `story.cards[${index}].kicker`);
  localized(item.title, `story.cards[${index}].title`);
  localized(item.text, `story.cards[${index}].text`);
}

for (const [index, item] of (profile.experience ?? []).entries()) {
  requiredString(item.company, `experience[${index}].company`);
  localized(item.role, `experience[${index}].role`);
  localized(item.summary, `experience[${index}].summary`);
  if (!Array.isArray(item.bullets?.fr) || !Array.isArray(item.bullets?.en)) {
    fail(`« experience[${index}].bullets » doit contenir deux listes fr et en.`);
  }
}

for (const [index, item] of (profile.education ?? []).entries()) {
  requiredString(item.school, `education[${index}].school`);
  localized(item.degree, `education[${index}].degree`);
  if (!Array.isArray(item.coursework) || !Array.isArray(item.courseworkFr)) {
    fail(`« education[${index}].coursework » et « courseworkFr » doivent être des listes.`);
  }
  if (item.coursework.length !== item.courseworkFr.length) {
    fail(`les listes de cours FR et EN de « education[${index}] » doivent avoir la même longueur.`);
  }
}

if (!Array.isArray(projectsFile?.projects)) fail("« projects.json > projects » doit être une liste.");
const projectIds = new Set();
for (const [index, item] of projectsFile.projects.entries()) {
  requiredString(item.id, `projects[${index}].id`);
  if (!/^[a-z0-9-]+$/.test(item.id)) fail(`« projects[${index}].id » doit utiliser uniquement minuscules, chiffres et tirets.`);
  if (projectIds.has(item.id)) fail(`l'identifiant de projet « ${item.id} » est utilisé plusieurs fois.`);
  projectIds.add(item.id);
  localized(item.name, `projects[${index}].name`);
  localized(item.timeframe, `projects[${index}].timeframe`);
  localized(item.summary, `projects[${index}].summary`);
  localized(item.context, `projects[${index}].context`);
  localized(item.problem, `projects[${index}].problem`);
  localized(item.learnings, `projects[${index}].learnings`);
  if (!Array.isArray(item.technologies)) fail(`« projects[${index}].technologies » doit être une liste.`);
  for (const field of ["method", "results"]) {
    if (!Array.isArray(item[field]?.fr) || !Array.isArray(item[field]?.en) || item[field].fr.length !== item[field].en.length) {
      fail(`« projects[${index}].${field} » doit contenir deux listes fr/en de même longueur.`);
    }
  }
  if (!Array.isArray(item.images)) fail(`« projects[${index}].images » doit être une liste.`);
  for (const [imageIndex, image] of item.images.entries()) {
    requiredString(image.src, `projects[${index}].images[${imageIndex}].src`);
    localized(image.alt, `projects[${index}].images[${imageIndex}].alt`);
  }
}

console.log(`Données valides : ${profile.experience.length} expériences, ${profile.education.length} formations, ${projectsFile.projects.length} projets.`);
