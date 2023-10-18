import axios, { AxiosError, AxiosResponse } from "axios";
import fs from "fs-extra";
import path from "path";
import { ApiDump } from "./api";
import { API_DUMP_URL, BUILD_ID_REGEX, CREATE_DOCS_URL, DIST } from "./constants";
import md from "./nodes";
import { render } from "./renderer/render";
import { assert } from "./util/assert";
import { sleep } from "./util/sleep";

async function getBuildId() {
	const response = await axios.get<string>(CREATE_DOCS_URL);
	return response.data.match(BUILD_ID_REGEX)?.[1];
}

function renderDescription(node: md.Node): string {
	return render(node)
		.replace(/\n[\n]+/g, "\n\n") // cap consecutive new lines to 2
		.trim();
}

function isDuplicateMember(members: ReadonlyArray<{ name: string }>, member: { name: string }) {
	const lowerName = member.name.toLowerCase();
	return member.name[0] === lowerName[0] && members.find(v => v.name.toLowerCase() === lowerName) !== undefined;
}

async function write(buildId: string, className: string) {
	const url = `${CREATE_DOCS_URL}/_next/data/${buildId}/reference/engine/classes/${className}.json`;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let response!: AxiosResponse<any, any>;
	try {
		response = await axios.get(url);
	} catch (e) {
		if (e instanceof AxiosError) {
			assert(e.status !== 429, "Rate limited");
		}
		return;
	}

	const apiReference = response.data.pageProps.data.apiReference;

	if (apiReference.description !== "") {
		await fs.outputFile(path.join(DIST, className, "index.json"), JSON.stringify(apiReference.description));
		await fs.outputFile(path.join(DIST, className, "index.md"), renderDescription(apiReference.description));
	}
	for (const property of apiReference.properties) {
		if (property.description === "" || isDuplicateMember(apiReference.properties, property)) continue;
		const [, propName] = property.name.split(".");
		await fs.outputFile(path.join(DIST, className, `${propName}.md`), renderDescription(property.description));
	}
	for (const method of apiReference.methods) {
		if (method.description === "" || isDuplicateMember(apiReference.methods, method)) continue;
		const [, methodName] = method.name.split(":");
		await fs.outputFile(path.join(DIST, className, `${methodName}.md`), renderDescription(method.description));
	}
	for (const event of apiReference.events) {
		if (event.description === "" || isDuplicateMember(apiReference.events, event)) continue;
		const [, eventName] = event.name.split(".");
		await fs.outputFile(path.join(DIST, className, `${eventName}.md`), renderDescription(event.description));
	}
}

async function main() {
	const apiDumpResponse = await axios.get(API_DUMP_URL);
	const apiDump = apiDumpResponse.data as ApiDump;

	const tasks = new Array<string>();

	// debugging
	// tasks.push("TestService");

	for (const apiClass of apiDump.Classes) {
		tasks.push(apiClass.Name);
	}

	const buildId = await getBuildId();
	if (buildId === undefined) {
		throw "Unable to fetch build ID!";
	}

	for (let i = 0; i < tasks.length; i++) {
		const className = tasks[i];
		console.log(`[${i + 1} / ${tasks.length}] - ${className}`);
		await write(buildId, className);
		await sleep(100);
	}
}

void main();
