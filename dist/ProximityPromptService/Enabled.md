This property determines whether [ProximityPrompts](https://developer.roblox.com/en-us/api-reference/class/ProximityPrompt) are enabled, and therefore shown, in-game. When false, no prompts will be shown.

For example, in a round based system developers could disable prompts at certain points in the game to disable proximity-based interactions.

\-- Server Script 1
local ProximityPromptService = game:GetService("ProximityPromptService")
local enablePrompts = workspace.EnablePrompts -- BindableEvent

-- Connected to a BindableEvent that is fired by another script controlling game logic
enablePrompts.OnServerEvent:Connect(function(enabled)
	ProximityPromptService.Enabled = enabled
end)\-- Server Script 2
local enablePrompts = workspace.EnablePrompts -- BindableEvent

-- Some game event
enablePrompts:FireServer(false) -- Disable
wait(5)
enablePrompts:FireServer(true) -- Re-enable