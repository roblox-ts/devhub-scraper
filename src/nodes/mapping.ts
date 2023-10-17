import * as md from "./bundle";

export interface NodesByType {
	[md.NodeType.root]: md.RootNode;
	[md.NodeType.text]: md.TextNode;
	[md.NodeType.element]: md.ElementNode;
}

export interface ElementNodesByTag {
	[md.ElementTag.a]: md.AnchorElementNode;
	[md.ElementTag.b]: md.BoldTextElementNode;
	[md.ElementTag.blockquote]: md.BlockQuoteElementNode;
	[md.ElementTag.br]: md.BreakElementNode;
	[md.ElementTag.code]: md.CodeElementNode;
	[md.ElementTag.em]: md.EmphasizedTextElementNode;
	[md.ElementTag.figcaption]: md.FigureCaptionElementNode;
	[md.ElementTag.figure]: md.FigureElementNode;
	[md.ElementTag.h1]: md.Heading1ElementNode;
	[md.ElementTag.h2]: md.Heading2ElementNode;
	[md.ElementTag.h3]: md.Heading3ElementNode;
	[md.ElementTag.h4]: md.Heading4ElementNode;
	[md.ElementTag.h5]: md.Heading5ElementNode;
	[md.ElementTag.h6]: md.Heading6ElementNode;
	[md.ElementTag.img]: md.ImageElementNode;
	[md.ElementTag.kbd]: md.KeyboardElementNode;
	[md.ElementTag.li]: md.ListItemElementNode;
	[md.ElementTag.ol]: md.OrderedListElementNode;
	[md.ElementTag.p]: md.ParagraphElementNode;
	[md.ElementTag.pre]: md.PreformattedTextElementNode;
	[md.ElementTag.strong]: md.BoldTextElementNode;
	[md.ElementTag.sup]: md.SuperscriptTextElementNode;
	[md.ElementTag.table]: md.TableElementNode;
	[md.ElementTag.tbody]: md.TableBodyElementNode;
	[md.ElementTag.thead]: md.TableHeaderElementNode;
	[md.ElementTag.td]: md.TableDataElementNode;
	[md.ElementTag.th]: md.TableHeadElementNode;
	[md.ElementTag.tr]: md.TableRowElementNode;
	[md.ElementTag.ul]: md.UnorderedListElementNode;
}
