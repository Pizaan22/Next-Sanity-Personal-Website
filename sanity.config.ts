import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

const config = defineConfig({
  projectId: "x9cdzb6x",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2024-09-19",
  basePath: "/admin",
  plugins: [deskTool(), vercelDeployTool()],
  schema: { types: schemas },
});

export default config;
