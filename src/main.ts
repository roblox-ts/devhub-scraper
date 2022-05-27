import axios from "axios";
import fs from "fs-extra";
import path from "path";
import { ApiDump, ApiMember } from "./api";

import {
	API_DUMP_URL,
	API_URL,
	ARTICLES_URL,
	ASSETS_SITE_URL,
	BUILD_ID_REGEX,
	CREATE_DOCS_URL,
	DIST,
	FIELD_REGEX,
	LINK_TEXT_REGEX,
} from "./constants";
import { sleep } from "./util/sleep";
import { transformHtml } from "./util/transformHtml";

const HTML_BLACKLIST = new Set([
	"BodyAngularVelocity.P", // misinterprets "<https" as an element
	"BodyGyro.P", // misinterprets "<https" as an element
	"BodyPosition.P", // misinterprets "<https" as an element
	"BodyVelocity.P", // misinterprets "<https" as an element
	"RocketPropulsion.ThrustP", // misinterprets "<https" as an element
	"RocketPropulsion.TurnP", // misinterprets "<https" as an element
	"UIStroke", // misinterprets "<stroke>" as an element
]);

class Generator {
	private constructor(
		private readonly apiDump: ApiDump,
		private readonly apiTypeMap: Map<string, Map<string, ApiMember["MemberType"]>>,
	) {}

	public static async create() {
		const apiDumpResponse = await axios.get(API_DUMP_URL);
		const apiDump = apiDumpResponse.data as ApiDump;

		const apiTypeMap = new Map<string, Map<string, ApiMember["MemberType"]>>();
		for (const apiClass of apiDump.Classes) {
			const classMap = new Map<string, ApiMember["MemberType"]>();
			apiTypeMap.set(apiClass.Name, classMap);
			for (const apiField of apiClass.Members) {
				classMap.set(apiField.Name, apiField.MemberType);
			}
		}

		return new Generator(apiDump, apiTypeMap);
	}

	public async getBuildId() {
		const response = await axios.get<string>(CREATE_DOCS_URL);
		return response.data.match(BUILD_ID_REGEX)?.[1];
	}

	public async run() {
		const tasks = new Array<string>();

		// debugging
		// tasks.push("TextBox");
		// tasks.push("AlignOrientation");

		for (const apiClass of this.apiDump.Classes) {
			tasks.push(apiClass.Name);
		}

		const buildId = await this.getBuildId();
		if (buildId === undefined) {
			throw "Unable to fetch build ID!";
		}

		for (let i = 0; i < tasks.length; i++) {
			const className = tasks[i];
			console.log(`[${i + 1} / ${tasks.length}] ${className}`);
			await this.write(buildId, className);
			await sleep(100);
		}
	}

	private makeLink(className: string, fieldName: string | undefined, text: string | undefined) {
		if (text === undefined) {
			if (fieldName !== undefined) {
				const type = this.apiTypeMap.get(className)?.get(fieldName);
				const sep = type === "Function" ? ":" : ".";
				text = `${className}${sep}${fieldName}`;
			} else {
				text = className;
			}
		}
		const link = this.makeApiLink(className, fieldName);
		if (link) {
			return `[${text}](${link})`;
		}
	}

	private makeArticlesLink(articleName: string, text: string | undefined) {
		return `[${text ?? articleName}](${ARTICLES_URL}/${articleName.toLowerCase().replace(/ /g, "-")})`;
	}

	private makeDataTypeLink(dataType: string, text: string | undefined) {
		return `[${text ?? dataType}](${API_URL}/datatype/${dataType})`;
	}

	private makeEnumLink(enumName: string, text: string | undefined) {
		return `[${text ?? enumName}](${API_URL}/enum/${enumName})`;
	}

	private processCodeLink(content: string): string | undefined {
		let className = content;
		let fieldName: string | undefined;
		let text: string | undefined;

		const textMatch = className.match(LINK_TEXT_REGEX);
		if (textMatch) {
			className = textMatch[1];
			text = textMatch[2];
		}

		const fieldMatch = className.match(FIELD_REGEX);
		if (fieldMatch) {
			className = fieldMatch[1];
			fieldName = fieldMatch[2];
		}

		if (className.toLowerCase() === "articles" && fieldName) {
			return this.makeArticlesLink(fieldName, text);
		}

		if (className.toLowerCase() === "datatype" && fieldName) {
			return this.makeDataTypeLink(fieldName, text);
		}

		if (className.toLowerCase() === "enum" && fieldName) {
			return this.makeEnumLink(fieldName, text);
		}

		if (textMatch || fieldMatch || this.apiTypeMap.has(content)) {
			return this.makeLink(className, fieldName, text);
		}
	}

	private makeApiLink(className: string, fieldName?: string) {
		let url = `${CREATE_DOCS_URL}/reference/engine/classes/${className}`;
		if (fieldName !== undefined) {
			url += `#${fieldName}`;
		}
		return url;
	}

	private processDescription(description: string, skipHtml: boolean): string {
		if (!skipHtml) {
			description = transformHtml(description);
		}
		description = description.replace(/`([^`]+)`/gm, (raw, match) => this.processCodeLink(match) ?? raw);
		description = description.replace(/(?<!com)(\/assets\/)/g, raw => `${ASSETS_SITE_URL}${raw}`);
		description = description.trim();
		return description;
	}

	private async write(buildId: string, className: string) {
		const url = `${CREATE_DOCS_URL}/_next/data/${buildId}/reference/engine/classes/${className}.json`;
		const response = await axios.get(url);

		const apiReference = response.data.pageProps.data.apiReference;

		await fs.outputFile(
			path.join(DIST, className, "index.md"),
			this.processDescription(apiReference.description, HTML_BLACKLIST.has(className)),
		);
		for (const property of apiReference.properties) {
			await fs.outputFile(
				path.join(DIST, className, `${property.name.split(".")[1]}.md`),
				this.processDescription(property.description, HTML_BLACKLIST.has(property.name)),
			);
		}
	}
}

async function main() {
	const generator = await Generator.create();
	await generator.run();
}

void main();
