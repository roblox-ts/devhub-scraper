This property specifies whether automatic UI compatibility transformations
are applied to descendant "fullscreen" [`GuiObjects`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) of
this [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) on displays with screen cutouts. Eligibility occurs
if the total area of the descendant [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) (including any
applied border or [`UIStroke`](https://create.roblox.com/docs/reference/engine/classes/UIStroke)) covers the device's safe area both
horizontally and vertically. See the [`Enum.SafeAreaCompatibility`](https://create.roblox.com/docs/reference/engine/enums/SafeAreaCompatibility) enum
reference for details.

The default value is [`FullscreenExtension`](https://create.roblox.com/docs/reference/engine/enums/SafeAreaCompatibility) in
order to automatically improve the appearance of UI that was authored for
screens without any cutouts. However, it's recommended that you avoid
fullscreen extensions for new work; instead, use the
[`ScreenInsets`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#ScreenInsets) property to specify which
insets should be respected for different [`ScreenGuis`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui).

Note that descendant UI objects will continue to be clipped by the
device's safe area if
[`ClipToDeviceSafeArea`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#ClipToDeviceSafeArea) is set to
`true`.