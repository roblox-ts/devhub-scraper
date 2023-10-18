This property indicates the [`ProximityPrompt`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt)'s style. When set to
Custom, no default UI will be provided.

The provided UI can be swapped out for a custom UI. In order to do this,
set Style to Custom. Then, listen to the
[`ProximityPrompt.PromptShown`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#PromptShown) and
[`ProximityPrompt.PromptHidden`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#PromptHidden) events in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript),
where developers should create and tear down the UI.

Developers may also use [`ProximityPrompt.PromptButtonHoldBegan`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#PromptButtonHoldBegan) and
[`ProximityPrompt.PromptButtonHoldEnded`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#PromptButtonHoldEnded) in order to utilize the
[`ProximityPrompt.HoldDuration`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#HoldDuration) progress animation feature.