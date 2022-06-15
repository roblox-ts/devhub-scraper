Generates a temporary asset ID from a [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence) that can be used for localized testing of an animation.

This function performs the same function to [KeyframeSequenceProvider:RegisterActiveKeyframeSequence](https://developer.roblox.com/en-us/api-reference/function/KeyframeSequenceProvider/RegisterActiveKeyframeSequence) however this function generates a hash instead of an _active://_ URL.

The ID generated can be used for the [Animation.AnimationId](https://developer.roblox.com/en-us/api-reference/property/Animation/AnimationId) property to test animations.

The asset ID generated by this function is temporary and cannot be used outside of Studio. Developers wishing to generate an asset ID that can be used online should upload the [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence) to Roblox.