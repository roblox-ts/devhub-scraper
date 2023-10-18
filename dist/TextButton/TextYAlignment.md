TextYAlignment determines the vertical alignment (Y-axis) of text rendered
within a UI element's space. For Top and Bottom, text is rendered such
that the top/bottom text bounds just touch the edge of the UI element
rectangle. For Center, text is rendered such that there is an equal space
from the top bounds of the text to the top of the element and the bottom
bounds of the text to the bottom of the element.

This property is used in conjunction with
[`TextButton.TextXAlignment`](https://create.roblox.com/docs/reference/engine/classes/TextButton#TextXAlignment) to fully determine text alignment on
both axes. This property won't affect the read-only properties
[`TextButton.TextBounds`](https://create.roblox.com/docs/reference/engine/classes/TextButton#TextBounds) and [`TextButton.TextFits`](https://create.roblox.com/docs/reference/engine/classes/TextButton#TextFits).