This property sets the preferred orientation mode for users with mobile
devices. For the different modes available, see [ScreenOrientation](https://developer.roblox.com/en-us/api-reference/enum/ScreenOrientation).

When a [Player](https://create.roblox.com/docs/reference/engine/classes/Player) joins the game, if they are using a mobile device, this
property will determine the device's starting orientation.
[PlayerGui.ScreenOrientation](https://create.roblox.com/docs/reference/engine/classes/PlayerGui#ScreenOrientation) will be set to this value for
[Players](https://create.roblox.com/docs/reference/engine/classes/Player) joining the game. For example, the following code would
set the default to _'Portrait'_:

```lua
game:GetService("StarterGui").ScreenOrientation = Enum.ScreenOrientation.Portrait
```

By default, this property is set to _'LandscapeSensor'_, meaning the
viewport will rotate so it is always right-side-up in landscape.

Changing this property will not change the `Enum/ScreenOrientation` for
`Player|Players` already in the game. To change the orientation for an
existing player use their `PlayerGui/ScreenOrientation` property.

You can also get the current screen orientation for a user's device using
`PlayerGui/CurrentScreenOrientation`. This is useful when using the
'sensor' `Enum/ScreenOrientation` settings.