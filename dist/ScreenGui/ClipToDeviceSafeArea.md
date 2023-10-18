If this property is `true`, all [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) descendants of this
[`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) will be clipped to the device's safe area (see
[`Enum.ScreenInsets`](https://create.roblox.com/docs/reference/engine/enums/ScreenInsets)). The default is `true` to maintain backwards
compatibility of UI that is intentionally hidden offscreen, such as
objects that slide into view from a screen edge when they're needed.

![Mobile device showing UI button clipped by device safe
area](https://prod.docsiteassets.roblox.com/assets/engine-api/classes/ScreenGui/ClipToDeviceSafeArea-True.png)
When set to `true`, UI objects are clipped
by the device's safe area

If this property is `false`, [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) descendants will **not** be
clipped to the device's safe area and may be obscured by the camera notch
or other screen cutouts.

![Mobile device showing UI button overflowing device safe
area, obscured by screen camera notch](https://prod.docsiteassets.roblox.com/assets/engine-api/classes/ScreenGui/ClipToDeviceSafeArea-False.png)
When set to `false`, UI objects may overflow the
safe area and become obscured

Note that this property will be ignored if you set
[`ScreenGui.ScreenInsets`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#ScreenInsets) to [`None`](https://create.roblox.com/docs/reference/engine/enums/ScreenInsets), as doing so
implies that you intentionally want to disregard the device's safe insets.