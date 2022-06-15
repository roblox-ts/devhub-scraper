Generates a temporary asset ID from a [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence) that can be used for localized testing of an animation.

This function performs the same function to [KeyframeSequenceProvider:RegisterKeyframeSequence](https://developer.roblox.com/en-us/api-reference/function/KeyframeSequenceProvider/RegisterKeyframeSequence) however this function generates an _active://_ URL instead of a hash.

The ID generated can be used in an [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation)'s [Animation.AnimationId](https://developer.roblox.com/en-us/api-reference/property/Animation/AnimationId) property for testing.

The asset ID generated by this function is temporary and cannot be used outside of Studio. Developers wishing to generate an asset ID that can be used online should upload the [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence) to Roblox.