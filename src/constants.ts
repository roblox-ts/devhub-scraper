import path from "path";

export const DIST = path.resolve(__dirname, "..", "dist");

export const BASE_URL = "https://developer.roblox.com";
export const EN_US_URL = `${BASE_URL}/en-us`;
export const API_URL = `${EN_US_URL}/api-reference`;
export const ARTICLES_URL = `${EN_US_URL}/articles`;

export const CLASS_SELECTOR = "div.markdown-field-data";
export const FIELD_SELECTOR = "div.markdown-field-data.description";

//  body > div.main-container.api-pages.sub-pages > div.container-fluid > div > main > div > div > div > div > div

export const API_DUMP_URL =
	"https://raw.githubusercontent.com/CloneTrooper1019/Roblox-Client-Watch/roblox/API-Dump.json";

export const LINK_TEXT_REGEX = /^\/?([^\|]+)\|([^\|]+)$/;
export const FIELD_REGEX = /^\/?([^\/]+)\/([^\/]+)$/;
