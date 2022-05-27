**LocalPlayer** is a read-only property which refers to the [Player](https://create.roblox.com/docs/reference/engine/classes/Player) whose
client is running the game.

This property is only defined for [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s (and [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript)s
required by them), as they run on the client. For the server (on which
[Script](https://create.roblox.com/docs/reference/engine/classes/Script) objects run their code), this property is nil.

This property is useful in [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s which display information about
the player viewing a GUI. Using For example, if there were [IntValue](https://create.roblox.com/docs/reference/engine/classes/IntValue)
parented to a [Player](https://create.roblox.com/docs/reference/engine/classes/Player) named "Coins" which represented how much money that
player has, you could use the following to display this value for them:

```lua
-- This code is appropriate for a LocalScript in StarterGui,
-- for example: game.StarterGui.ScreenGui.TextLabel.LocalScript

local player = game:GetService("Players").LocalPlayer
-- Wait for a value we're expecting for the server to have created
local vCoins = player:WaitForChild("Coins")

local textLabel = script.Parent
local function update()
    textLabel.Text = "Coins: " .. vCoins.Value
end

-- Update once, then every time the value changes
update()
vCoins.Changed:Connect(update)
```

#### Loading GUIs

When creating loading GUIs using `ReplicatedFirst`, sometimes a
`LocalScript` can run before the LocalPlayer is available. In this case,
you should yield until it becomes available by using
`Instance/GetPropertyChangedSignal`

```lua
local Players = game:GetService("Players")
-- Below: access Players.LocalPlayer; if it is nil, we'll wait for it using GetPropertyChangedSignal.
local player = Players.LocalPlayer or Players:GetPropertyChangedSignal("LocalPlayer"):wait()
```

Doing this isn't for a `LocalScript` within `StarterGui`,
`StarterPlayerScripts` or `StarterCharacterScripts`: these scripts can
only run after a `Player` object is already available, and LocalPlayer
will have been set by then.