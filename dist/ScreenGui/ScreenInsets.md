This property controls the safe area insets that are applied to the
contents of this [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui). The default of
`Enum.ScreenInsets|CoreUISafeInsets` keeps all descendant
[`GuiObjects`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) inside the core UI safe area, clear of the
Roblox top bar buttons and other screen cutouts like the device's camera
notch. This setting is recommended for any [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) containing
interactive and/or important UI elements such as buttons and status
messages.

![Mobile device showing UI buttons inside core UI safe area](https://prod.docsiteassets.roblox.com/assets/engine-api/classes/ScreenGui/Core-UI-Safe-Area.png)

If you set this property to `Enum.ScreenInsets|None`, UI objects may be
obscured behind core UI objects or device cutouts like the camera notch.
As such, you should only use `Enum.ScreenInsets|None` for a
[`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) that contains noninteractive content like background
images.

If you set this property to `Enum.ScreenInsets|TopbarSafeInsets`, all
descendant [`GuiObjects`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) will be kept between Roblox
left-most controls and right-most controls within the top bar space. This
[`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) will then automatically adjust its size and position
based on control visibility/size to avoid UI collisions.

![Mobile device showing the location of top bar safe area with minimal Roblox UI controls](https://prod.docsiteassets.roblox.com/assets/engine-api/classes/ScreenGui/Top-Bar-Safe-Area-Collapsed.png)

![Mobile device showing the location of top bar safe area responding dynamically to expanded Roblox UI controls](https://prod.docsiteassets.roblox.com/assets/engine-api/classes/ScreenGui/Top-Bar-Safe-Area-Expanded.png)