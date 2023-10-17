import { CLASS_URL, DATA_TYPE_URL, ENUM_URL } from "../constants";
import md from "../nodes";
import { assetUrl, url } from "../urls";
import { assert } from "../util/assert";

const ASSERT_NO_RENDER = (): string => {
	assert(false);
};

const NOOP_RENDER = (node: md.NodeWithChildren) => renderNodeChildren(node.children);

function renderNodeChildren(children: ReadonlyArray<md.Node>) {
	let result = "";
	for (const child of children) {
		result += render(child);
	}
	return result;
}

function renderRootNode(node: md.RootNode): string {
	return renderNodeChildren(node.children);
}

function renderTextNode(node: md.TextNode): string {
	return node.value;
}

function renderBoldTextElementNode(node: md.BoldTextElementNode): string {
	return `**${renderNodeChildren(node.children)}**`;
}

function renderBlockQuoteElementNode(node: md.BlockQuoteElementNode): string {
	const innerText = renderNodeChildren(node.children);
	return innerText
		.split("\n")
		.filter(v => v.trim().length > 0)
		.map(v => `> ${v}`)
		.join("\n");
}

function renderAnchorElementNode(node: md.AnchorElementNode): string {
	return `[${renderNodeChildren(node.children)}](${url(node.properties.href)})`;
}

function renderBreakElementNode(node: md.BreakElementNode): string {
	assert(node.children.length === 0);
	return `\n\n`;
}

function renderCodeElementNode(node: md.CodeElementNode): string {
	const innerText = renderNodeChildren(node.children);

	const [path, textOverride] = innerText.split("|");
	const pathSegments = path.split(".");

	const namespaceName = pathSegments.shift();
	if (namespaceName === "Class") {
		let isMethod = false;
		const last = pathSegments.pop();
		assert(last !== undefined);
		const [lastSegment, methodCall] = last.split(":");
		pathSegments.push(lastSegment);
		if (methodCall) {
			isMethod = true;
			assert(methodCall.endsWith("()"));
			const methodName = methodCall.endsWith("()") ? methodCall.slice(0, -2) : methodCall;
			pathSegments.push(methodName);
		}

		const className = pathSegments.shift();
		if (className) {
			const memberName = pathSegments.shift();
			if (memberName) {
				const text = textOverride ?? (isMethod ? `${className}:${memberName}()` : `${className}.${memberName}`);
				return `[\`${text}\`](${CLASS_URL}/${className}#${memberName})`;
			} else {
				const text = textOverride ?? className;
				return `[\`${text}\`](${CLASS_URL}/${className})`;
			}
		}
	} else if (namespaceName === "Enum") {
		const enumName = pathSegments.shift();
		if (enumName) {
			const text = textOverride ?? `Enum.${enumName}`;
			return `[\`${text}\`](${ENUM_URL}/${enumName})`;
		}
	} else if (namespaceName === "Datatype") {
		const dataTypeName = pathSegments.shift();
		if (dataTypeName) {
			const text = textOverride ?? dataTypeName;
			return `[\`${text}\`](${DATA_TYPE_URL}/${dataTypeName})`;
		}
	}

	return `\`${innerText}\``;
}

function renderEmphasizedTextElementNode(node: md.EmphasizedTextElementNode): string {
	return `*${renderNodeChildren(node.children)}*`;
}

const createHeadingRenderer =
	<T extends md.NodeWithChildren>(n: number) =>
	(node: T) =>
		`${"#".repeat(n)} ${renderNodeChildren(node.children)}`;
const renderHeading1ElementNode = createHeadingRenderer<md.Heading1ElementNode>(1);
const renderHeading2ElementNode = createHeadingRenderer<md.Heading2ElementNode>(2);
const renderHeading3ElementNode = createHeadingRenderer<md.Heading3ElementNode>(3);
const renderHeading4ElementNode = createHeadingRenderer<md.Heading4ElementNode>(4);
const renderHeading5ElementNode = createHeadingRenderer<md.Heading5ElementNode>(5);
const renderHeading6ElementNode = createHeadingRenderer<md.Heading6ElementNode>(6);

function renderImageElementNode(node: md.ImageElementNode): string {
	assert(node.children.length === 0);
	return `![${node.properties.alt}](${assetUrl(node.properties.src)})`;
}

function renderKeyboardElementNode(node: md.KeyboardElementNode): string {
	return renderNodeChildren(node.children);
}

function renderOrderedListElementNode(node: md.OrderedListElementNode): string {
	let result = "";
	let i = 1;
	for (const child of node.children) {
		if (md.isListItemElementNode(child)) {
			result += `${i + 1}. ${renderNodeChildren(child.children)}`;
		} else {
			result += render(child);
		}
	}
	return result;
}

function renderParagraphElementNode(node: md.ParagraphElementNode): string {
	return `\n${renderNodeChildren(node.children)}`;
}

function renderPreformattedTextElementNode(node: md.PreformattedTextElementNode): string {
	assert(node.children.length === 1);
	const code = node.children[0];
	assert(md.isCodeElementNode(code));
	assert(code.children.length === 1);
	const text = code.children[0];
	assert(md.isTextNode(text));

	let result = "";
	result += "```lua\n";
	result += text.value;
	if (!text.value.endsWith("\n")) {
		result += "\n";
	}
	result += "```";
	return result;
}

function renderSuperscriptTextElementNode(node: md.SuperscriptTextElementNode): string {
	return `^${renderNodeChildren(node.children)}`;
}

function renderTableElementNode(node: md.TableElementNode): string {
	return renderNodeChildren(node.children.filter(v => !md.isTextNode(v)));
}

function renderTableBodyElementNode(node: md.TableBodyElementNode): string {
	let result = "";
	for (const child of node.children.filter(v => !md.isTextNode(v))) {
		result += `${render(child)}\n`;
	}
	return result;
}

function renderTableHeaderElementNode(node: md.TableHeaderElementNode): string {
	let result = "";

	for (const child of node.children.filter(v => !md.isTextNode(v))) {
		result += `${render(child)}\n`;
	}

	const [headerRow] = node.children.filter(v => !md.isTextNode(v));
	assert(headerRow && md.isTableRowElementNode(headerRow));
	const columnCount = headerRow.children.filter(v => !md.isTextNode(v)).length;
	result += "| - ".repeat(columnCount) + "|\n";

	return result;
}

function renderTableDataElementNode(node: md.TableDataElementNode): string {
	return renderNodeChildren(node.children).trim();
}

function renderTableHeadElementNode(node: md.TableHeadElementNode): string {
	return renderNodeChildren(node.children).trim();
}

function renderTableRowElementNode(node: md.TableRowElementNode): string {
	const children = node.children.filter(v => !md.isTextNode(v));
	return `| ${children.map(render).join(" | ")} |`;
}

function renderUnorderedListElementNode(node: md.UnorderedListElementNode): string {
	let result = "";
	for (const child of node.children) {
		if (md.isListItemElementNode(child)) {
			result += `- ${renderNodeChildren(child.children)}`;
		} else {
			result += render(child);
		}
	}
	return result;
}

const TAG_TO_RENDERER = {
	[md.ElementTag.a]: renderAnchorElementNode,
	[md.ElementTag.b]: renderBoldTextElementNode,
	[md.ElementTag.blockquote]: renderBlockQuoteElementNode,
	[md.ElementTag.br]: renderBreakElementNode,
	[md.ElementTag.code]: renderCodeElementNode,
	[md.ElementTag.em]: renderEmphasizedTextElementNode,
	[md.ElementTag.figcaption]: NOOP_RENDER,
	[md.ElementTag.figure]: NOOP_RENDER,
	[md.ElementTag.h1]: renderHeading1ElementNode,
	[md.ElementTag.h2]: renderHeading2ElementNode,
	[md.ElementTag.h3]: renderHeading3ElementNode,
	[md.ElementTag.h4]: renderHeading4ElementNode,
	[md.ElementTag.h5]: renderHeading5ElementNode,
	[md.ElementTag.h6]: renderHeading6ElementNode,
	[md.ElementTag.img]: renderImageElementNode,
	[md.ElementTag.kbd]: renderKeyboardElementNode,
	[md.ElementTag.li]: ASSERT_NO_RENDER,
	[md.ElementTag.ol]: renderOrderedListElementNode,
	[md.ElementTag.p]: renderParagraphElementNode,
	[md.ElementTag.pre]: renderPreformattedTextElementNode,
	[md.ElementTag.strong]: renderBoldTextElementNode,
	[md.ElementTag.sup]: renderSuperscriptTextElementNode,
	[md.ElementTag.table]: renderTableElementNode,
	[md.ElementTag.tbody]: renderTableBodyElementNode,
	[md.ElementTag.thead]: renderTableHeaderElementNode,
	[md.ElementTag.td]: renderTableDataElementNode,
	[md.ElementTag.th]: renderTableHeadElementNode,
	[md.ElementTag.tr]: renderTableRowElementNode,
	[md.ElementTag.ul]: renderUnorderedListElementNode,
} satisfies { [K in md.ElementTag]: (node: md.ElementNodesByTag[K]) => string };

function renderElementNode(node: md.ElementNode): string {
	assert(node.tagName in TAG_TO_RENDERER, `Unexpected tagName "${node.tagName}"!`);
	return TAG_TO_RENDERER[node.tagName](node as never);
}

const TYPE_TO_RENDERER = {
	[md.NodeType.root]: renderRootNode,
	[md.NodeType.text]: renderTextNode,
	[md.NodeType.element]: renderElementNode,
} satisfies { [K in md.NodeType]: (node: md.NodesByType[K]) => string };

export function render(node: md.Node): string {
	assert(node.type in TYPE_TO_RENDERER, `Unexpected type "${node.type}"!`);
	return TYPE_TO_RENDERER[node.type](node as never);
}
