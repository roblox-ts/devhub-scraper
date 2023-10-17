import path from "path";

export const DIST = path.resolve(__dirname, "..", "dist");

export const API_DUMP_URL = "https://raw.githubusercontent.com/MaximumADHD/Roblox-Client-Tracker/roblox/API-Dump.json";
export const CREATE_DOCS_URL = "https://create.roblox.com/docs";
export const CLASS_URL = `${CREATE_DOCS_URL}/reference/engine/classes`;
export const ASSETS_SITE_URL = "https://prod.docsiteassets.roblox.com";

export const BUILD_ID_REGEX = /"buildId":"([^"]+)"/;
