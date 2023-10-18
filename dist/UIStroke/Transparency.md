The [`Transparency`](https://create.roblox.com/docs/reference/engine/classes/UIStroke#Transparency) property sets the stroke
opacity independently of the parent object's
[`BackgroundTransparency`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundTransparency) or
[`TextTransparency`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextTransparency). This allows you to
render text and borders that are "hollow" (consisting of only an outline).

![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Outline-Transparency-A.png)
Stroke `UIStroke/Transparency|Transparency` of **0.5**Object `TextLabel/TextTransparency|TextTransparency` of **0**

![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Outline-Transparency-B.png)
Stroke `UIStroke/Transparency|Transparency` of **0**Object `TextLabel/TextTransparency|TextTransparency` of **1**

For more details on the **UIStroke** object, see [here](https://create.roblox.com/docs/ui/layout-and-appearance#uistroke).