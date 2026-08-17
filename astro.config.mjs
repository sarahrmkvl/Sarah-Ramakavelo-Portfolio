// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isGitHubPages = process.env.GITHUB_ACTIONS === "true" && githubOwner && githubRepository;

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  prefetch: true,
  site: isGitHubPages ? `https://${githubOwner}.github.io` : undefined,
  base: isGitHubPages ? `/${githubRepository}` : "/",
});
