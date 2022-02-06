import axios from "axios";
import cheerio from "cheerio";
import fs from "fs-extra";
import path from "path";
import TurndownService from "turndown";
import { ApiDump, ApiMember } from "./api";
import {
	API_DUMP_URL,
	API_URL,
	ARTICLES_URL,
	BASE_URL,
	CLASS_SELECTOR,
	DIST,
	FIELD_REGEX,
	FIELD_SELECTOR,
	LINK_TEXT_REGEX,
} from "./constants";
import { sleep } from "./util/sleep";

type ApiType = "property" | "function" | "event";

const MEMBER_TYPE_TO_API_TYPE: { [K in ApiMember["MemberType"]]: ApiType } = {
	Property: "property",
	Function: "function",
	Event: "event",
	Callback: "property",
};

class Generator {
	private readonly turndownService: TurndownService;

	private constructor(
		private readonly apiDump: ApiDump,
		private readonly apiTypeMap: Map<string, Map<string, ApiMember["MemberType"]>>,
	) {
		this.turndownService = this.createTurndownService();
	}

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

	public async run() {
		const tasks = new Array<[string, string | undefined]>();

		// debugging
		// tasks.push(["Accoutrement", undefined]);
		// tasks.push(["AlignOrientation", "AlignType"]);

		for (const apiClass of this.apiDump.Classes) {
			tasks.push([apiClass.Name, undefined]);
			for (const apiMember of apiClass.Members) {
				tasks.push([apiClass.Name, apiMember.Name]);
			}
		}

		for (let i = 0; i < tasks.length; i++) {
			const [className, fieldName] = tasks[i];
			console.log(`[${i + 1} / ${tasks.length}] ${className}${fieldName ? "/" + fieldName : ""}`);
			await this.write(className, fieldName);
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

	private processCode(content: string, node: TurndownService.Node): string {
		if (node.parentElement?.tagName === "PRE") {
			return "```lua\n" + content.replace(/\t/g, " ".repeat(4)) + "\n```";
		}
		return this.processCodeLink(content) ?? "`" + content + "`";
	}

	private createTurndownService() {
		return new TurndownService()
			.addRule("pre", {
				filter: "pre",
				replacement: content => content,
			})
			.addRule("code", {
				filter: "code",
				replacement: (content, node) => this.processCode(content, node),
			});
	}

	private makeApiLink(className: string, fieldName?: string) {
		if (fieldName === undefined) {
			return `${API_URL}/class/${className}`;
		}
		const type = this.apiTypeMap.get(className)?.get(fieldName);
		if (type) {
			return `${API_URL}/${MEMBER_TYPE_TO_API_TYPE[type]}/${className}/${fieldName}`;
		} else {
			console.warn(`Warning: No API type for ${className}.${fieldName}`);
		}
	}

	public async write(className: string, fieldName?: string) {
		const link = this.makeApiLink(className, fieldName);
		if (!link) return;
		const repsonse = await axios.get<string>(link);
		const $ = cheerio.load(repsonse.data);
		const selector = fieldName !== undefined ? FIELD_SELECTOR : CLASS_SELECTOR;
		const html = $(selector).first().html()?.trim() ?? "";
		const fixedHTML = html.replace(/href=\"\//g, `href="${BASE_URL}/`).replace(/src=\"\//g, `src="${BASE_URL}/`);
		const markdown = this.turndownService.turndown(fixedHTML);
		const fixedMarkdown = markdown
			.replace(/[‘’]/g, "'") // fix weird quotes
			.replace(/\*\//g, "* /"); // fix */ breaking out of jsdoc
		if (fixedMarkdown.length > 0) {
			await fs.outputFile(path.join(DIST, className, (fieldName ?? "index") + ".md"), fixedMarkdown);
		}
	}
}

async function main() {
	const generator = await Generator.create();
	await generator.run();
}

main();
