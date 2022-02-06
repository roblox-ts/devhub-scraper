**LocalPlayer** is a read-only property which refers to the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) whose client is running the game.

This property is only defined for [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)s (and [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript)s required by them), as they run on the client. For the server (on which [Script](https://developer.roblox.com/en-us/api-reference/class/Script) objects run their code), this property is nil. See [Roblox Client-Server Model](https://developer.roblox.com/en-us/articles/roblox-client-server-model) for more information on game networking on Roblox.

This property is useful in [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)s which display information about the player viewing a GUI. Using For example, if there were [IntValue](https://developer.roblox.com/en-us/api-reference/class/IntValue) parented to a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) named “Coins” which represented how much money that player has, you could use the following to display this value for them:

\-- This code is appropriate for a LocalScript in StarterGui,
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

Loading GUIs
------------

When creating loading GUIs using [ReplicatedFirst](https://developer.roblox.com/en-us/api-reference/class/ReplicatedFirst), sometimes a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) can run before the LocalPlayer is available. In this case, you should yield until it becomes available by using [Instance:GetPropertyChangedSignal](https://developer.roblox.com/en-us/api-reference/function/Instance/GetPropertyChangedSignal)

local Players = game:GetService("Players")
-- Below: access Players.LocalPlayer; if it is nil, we'll wait for it using GetPropertyChangedSignal.
local player = Players.LocalPlayer or Players:GetPropertyChangedSignal("LocalPlayer"):wait()

Doing this isn't for a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) within [StarterGui](https://developer.roblox.com/en-us/api-reference/class/StarterGui), [StarterPlayerScripts](https://developer.roblox.com/en-us/api-reference/class/StarterPlayerScripts) or [StarterCharacterScripts](https://developer.roblox.com/en-us/api-reference/class/StarterCharacterScripts): these scripts can only run after a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) object is already available, and LocalPlayer will have been set by then.