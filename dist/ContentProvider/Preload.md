Usually, content is loaded only when it starts being used. That explains
why it often takes a moment for an image to appear in a
[`GUI`](https://create.roblox.com/docs/reference/engine/classes/GuiObject), or a `Mesh|mesh` to appear in a
[`part`](https://create.roblox.com/docs/reference/engine/classes/BasePart), or why a [`sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) doesn't play for the
first time. All because the asset has not yet finished loading. Preload is
used to load this content beforehand, so that it works instantly.