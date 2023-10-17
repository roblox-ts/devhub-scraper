This property indicates the maximum number of
[`ProximityPrompts`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt) that will be shown to the user.

The code block below demonstrates how this limit would be applied:
```lua
local ProximityPromptService = game:GetService("ProximityPromptService")
ProximityPromptService.MaxPromptsVisible = 2 -- No more than 2 prompts will be shown to the user at any given time
```