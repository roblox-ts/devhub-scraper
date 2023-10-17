import * as md from "./bundle";

function makeNodeGuard<T extends keyof md.NodesByType>(...kinds: [...Array<T>]) {
	const set = new Set<md.NodeType>(kinds);
	return (node: md.Node): node is md.NodesByType[T] => set.has(node.type);
}

export const isRootNode = makeNodeGuard(md.NodeType.root);
export const isTextNode = makeNodeGuard(md.NodeType.text);
export const isElementNode = makeNodeGuard(md.NodeType.element);

function makeElementNodeGuard<T extends keyof md.ElementNodesByTag>(...kinds: [...Array<T>]) {
	const set = new Set<md.ElementTag>(kinds);
	return (node: md.Node): node is md.ElementNodesByTag[T] => md.isElementNode(node) && set.has(node.tagName);
}

export const isAnchorElementNode = makeElementNodeGuard(md.ElementTag.a);
export const isBreakElementNode = makeElementNodeGuard(md.ElementTag.br);
export const isCodeElementNode = makeElementNodeGuard(md.ElementTag.code);
export const isEmphasizedTextElementNode = makeElementNodeGuard(md.ElementTag.em);
export const isHeading1ElementNode = makeElementNodeGuard(md.ElementTag.h1);
export const isHeading2ElementNode = makeElementNodeGuard(md.ElementTag.h2);
export const isHeading3ElementNode = makeElementNodeGuard(md.ElementTag.h3);
export const isHeading4ElementNode = makeElementNodeGuard(md.ElementTag.h4);
export const isHeading5ElementNode = makeElementNodeGuard(md.ElementTag.h5);
export const isHeading6ElementNode = makeElementNodeGuard(md.ElementTag.h6);
export const isImageElementNode = makeElementNodeGuard(md.ElementTag.img);
export const isKeyboardElementNode = makeElementNodeGuard(md.ElementTag.kbd);
export const isListItemElementNode = makeElementNodeGuard(md.ElementTag.li);
export const isOrderedListElementNode = makeElementNodeGuard(md.ElementTag.ol);
export const isParagraphElementNode = makeElementNodeGuard(md.ElementTag.p);
export const isPreformattedTextElementNode = makeElementNodeGuard(md.ElementTag.pre);
export const isStrongTextElementNode = makeElementNodeGuard(md.ElementTag.strong);
export const isTableElementNode = makeElementNodeGuard(md.ElementTag.table);
export const isTableBodyElementNode = makeElementNodeGuard(md.ElementTag.tbody);
export const isTableHeaderElementNode = makeElementNodeGuard(md.ElementTag.thead);
export const isTableDataElementNode = makeElementNodeGuard(md.ElementTag.td);
export const isTableHeadElementNode = makeElementNodeGuard(md.ElementTag.th);
export const isTableRowElementNode = makeElementNodeGuard(md.ElementTag.tr);
export const isUnorderedListElementNode = makeElementNodeGuard(md.ElementTag.ul);
