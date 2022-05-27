The main storage object for 2D [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject) displayed on the player's screen.
ScreenGuis will only be shown if parented to a player's [PlayerGui](https://create.roblox.com/docs/reference/engine/classes/PlayerGui). To make
sure a ScreenGui is displayed to your player, it should be parented into the
[StarterGui](https://create.roblox.com/docs/reference/engine/classes/StarterGui), as that service will clone it's contents into each player's
[PlayerGui](https://create.roblox.com/docs/reference/engine/classes/PlayerGui) when they join the game.

## Caching static UI for performance improvements

A Gui's appearance is cached until one of the following events occurs:

- A descendant is added to the Gui.
- A descendant is removed from the Gui.
- A property of a descendant of the Gui changes.
- A property of the Gui changes.

If any of these events occur, the Gui's appearance will be recomputed the next
frame it gets rendered.