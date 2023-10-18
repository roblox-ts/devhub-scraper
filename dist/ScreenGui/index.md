The main storage object for 2D [`GuiObjects`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) displayed on the
user's screen. A [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) only shows if parented to a player's
[`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui); parenting a [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) to [`StarterGui`](https://create.roblox.com/docs/reference/engine/classes/StarterGui) ensures
it clones into each player's [`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui) when they join the experience.

For performance improvements, the appearance of a [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) is cached
until one of the following events occurs:

- A descendant is added to or removed from it.
- A property of a descendant changes.
- A property of the [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) itself changes.

If any of these events occur, the [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) appearance is recomputed
on the next frame it gets rendered.