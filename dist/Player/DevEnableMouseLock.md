This property determines if a player is able to toggle [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) lock
by pressing **Shift**. A player can disable the mouse lock switch in
Roblox's game settings. By default, this property is set to the value of
[`StarterPlayer.EnableMouseLockOption`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#EnableMouseLockOption). This can be set server-side
during run-time by using a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script). It can not be set client-side.

When mouse lock is enabled, the player's cursor is locked to the center of
the screen. Moving the mouse will orbit the camera around the player's
[`character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character), and the character will face the same
direction as the [`camera`](https://create.roblox.com/docs/reference/engine/classes/Camera). It also offsets the camera view
just over the right shoulder of the player's character.

Note that shift-lock related APIs are in the process of being deprecated,
so it's recommended to use [`UserInputService.MouseBehavior`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#MouseBehavior) instead
to lock the mouse.