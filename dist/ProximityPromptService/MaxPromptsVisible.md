This property indicates the maximum number of [ProximityPrompts](https://developer.roblox.com/en-us/api-reference/class/ProximityPrompt) that will be shown to the user.

The code block below demonstrates how this limit would be applied:

```lua
local ProximityPromptService = game:GetService("ProximityPromptService")
ProximityPromptService.MaxPromptsVisible = 2 -- No more than 2 prompts will be shown to the user at any given time
```