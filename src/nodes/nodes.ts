import * as md from "./bundle";

interface NodePosition {
	line: number;
	column: number;
	offset: number;
}

export interface Node<T extends md.NodeType = md.NodeType> {
	type: T;
	position: {
		start: NodePosition;
		end: NodePosition;
	};
}

export interface NodeWithChildren<T extends md.NodeType = md.NodeType> extends md.Node<T> {
	children: ReadonlyArray<md.Node>;
}

export interface RootNode extends md.NodeWithChildren<md.NodeType.root> {}

export interface TextNode extends md.Node<md.NodeType.text> {
	value: string;
}

export interface ElementNode<T extends md.ElementTag = md.ElementTag> extends md.NodeWithChildren<md.NodeType.element> {
	tagName: T;
	properties: object;
}

export interface AnchorElementNode extends md.ElementNode<md.ElementTag.a> {
	properties: { href: string };
}

export interface BlockQuoteElementNode extends md.ElementNode<md.ElementTag.blockquote> {}

export interface BoldTextElementNode extends md.ElementNode<md.ElementTag.b | md.ElementTag.strong> {}

export interface BreakElementNode extends md.ElementNode<md.ElementTag.br> {}

export interface CodeElementNode extends md.ElementNode<md.ElementTag.code> {}

export interface EmphasizedTextElementNode extends md.ElementNode<md.ElementTag.em> {}

export interface FigureCaptionElementNode extends md.ElementNode<md.ElementTag.figcaption> {}

export interface FigureElementNode extends md.ElementNode<md.ElementTag.figure> {}

export interface Heading1ElementNode extends md.ElementNode<md.ElementTag.h1> {}
export interface Heading2ElementNode extends md.ElementNode<md.ElementTag.h2> {}
export interface Heading3ElementNode extends md.ElementNode<md.ElementTag.h3> {}
export interface Heading4ElementNode extends md.ElementNode<md.ElementTag.h4> {}
export interface Heading5ElementNode extends md.ElementNode<md.ElementTag.h5> {}
export interface Heading6ElementNode extends md.ElementNode<md.ElementTag.h6> {}

export interface ImageElementNode extends md.ElementNode<md.ElementTag.img> {
	properties: { src: string; alt: string };
}

export interface KeyboardElementNode extends md.ElementNode<md.ElementTag.kbd> {}

export interface ListItemElementNode extends md.ElementNode<md.ElementTag.li> {}

export interface OrderedListElementNode extends md.ElementNode<md.ElementTag.ol> {}

export interface ParagraphElementNode extends md.ElementNode<md.ElementTag.p> {}

export interface PreformattedTextElementNode extends md.ElementNode<md.ElementTag.pre> {}

export interface SampleElementNode extends md.ElementNode<md.ElementTag.samp> {}

export interface SuperscriptTextElementNode extends md.ElementNode<md.ElementTag.sup> {}

export interface TableElementNode extends md.ElementNode<md.ElementTag.table> {}
export interface TableBodyElementNode extends md.ElementNode<md.ElementTag.tbody> {}
export interface TableHeaderElementNode extends md.ElementNode<md.ElementTag.thead> {}
export interface TableDataElementNode extends md.ElementNode<md.ElementTag.td> {}
export interface TableHeadElementNode extends md.ElementNode<md.ElementTag.th> {}
export interface TableRowElementNode extends md.ElementNode<md.ElementTag.tr> {}

export interface UnorderedListElementNode extends md.ElementNode<md.ElementTag.ul> {}

export interface VariableElementNode extends md.ElementNode<md.ElementTag.var> {}
