import { ASSETS_SITE_URL, CREATE_DOCS_URL } from "./constants";

function prefixSlash(path: string) {
	return `${path.startsWith("/") ? "" : "/"}`;
}

export function url(path: string) {
	return `${CREATE_DOCS_URL}${prefixSlash(path)}${path}`;
}

export function assetUrl(path: string) {
	return `${ASSETS_SITE_URL}${prefixSlash(path)}${path}`;
}
