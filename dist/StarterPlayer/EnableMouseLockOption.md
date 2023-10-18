The EnableMouseLockOption [`StarterPlayer`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer) property determines if a
player can toggle mouse lock by default.

Mouselock will lock the player's cursor to the center of the screen.
Moving the mouse will rotate the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) and [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) will
move relative to the current rotation of the camera.

This property sets the value of [`Player.DevEnableMouseLock`](https://create.roblox.com/docs/reference/engine/classes/Player#DevEnableMouseLock).

Note that shift-lock related APIs are in the process of being deprecated,
so it's recommended to use [`UserInputService.MouseBehavior`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#MouseBehavior) instead
to lock the mouse.