Takes a screen position and returns a list of all the [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject)
instances that are occupying that screen position, sorted in the order
they appear on-screen from top to bottom as the first and last index,
respectively.

The main use case is to get GUI objects under the player's mouse or touch
inputs to do things like allow selection or highlighting. These effects
can already be achieved using [`GuiObject.MouseEnter`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseEnter) and
[`GuiObject.MouseLeave`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseLeave) but this requires the developer to track
these events for their UI objects all the time even if they only need this
functionality in specific circumstances.

Since the child classes of [`BasePlayerGui`](https://create.roblox.com/docs/reference/engine/classes/BasePlayerGui) inherit this function, it
can be fired by class objects such as the [`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui) and
[`StarterGui`](https://create.roblox.com/docs/reference/engine/classes/StarterGui) folders.