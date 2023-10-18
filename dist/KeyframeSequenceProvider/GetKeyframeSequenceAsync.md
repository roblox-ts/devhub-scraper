GetKeyframeSequenceAsync returns a [`KeyframeSequence`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence) based on the
specified assetId. The assetId must correspond to an animation. The
function will yield until the [`KeyframeSequence`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence) is loaded from the
website. Because this is a webcall it should wrapped in a pcall.