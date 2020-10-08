import path from "path";

export const DIST = path.resolve(__dirname, "..", "dist");

export const BASE_URL = "https://developer.roblox.com";
export const API_URL = `${BASE_URL}/en-us/api-reference`;

export const CLASS_SELECTOR = "div.markdown-field-data";
export const FIELD_SELECTOR = "div.markdown-field-data.description";

//  body > div.main-container.api-pages.sub-pages > div.container-fluid > div > main > div > div > div > div > div

export const API_DUMP_URL =
	"https://raw.githubusercontent.com/CloneTrooper1019/Roblox-Client-Watch/roblox/API-Dump.json";

export const LINK_TEXT_REGEX = /^\/?([^\|]+)\|(\w+)$/;
export const FIELD_REGEX = /^\/?(\w+)\/(\w+)$/;
