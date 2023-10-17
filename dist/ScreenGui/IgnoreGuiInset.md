If this property is `false` (default),
[`ScreenInsets`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#ScreenInsets) is set to
[`CoreUISafeInsets`](https://create.roblox.com/docs/reference/engine/enums/ScreenInsets), effectively keeping its bounds below
the Roblox top bar core UI.

If this property is changed to `true` and
[`ScreenInsets`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#ScreenInsets) is currently set to
[`CoreUISafeInsets`](https://create.roblox.com/docs/reference/engine/enums/ScreenInsets),
[`ScreenInsets`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#ScreenInsets) will be set to
[`DeviceSafeInsets`](https://create.roblox.com/docs/reference/engine/enums/ScreenInsets).

See [`ScreenInsets`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#ScreenInsets) for details on how screen
insets affect the contents of a [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui).