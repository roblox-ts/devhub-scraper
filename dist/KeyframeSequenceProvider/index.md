The KeyframeSequenceProvider is a service that is used to load and preview [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence)s. It includes a number of functions that are useful when working with [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation)s.

What is a KeyframeSequence?
---------------------------

The animation data Roblox uses in the playback of an animation, referenced by the [Animation.AnimationId](https://developer.roblox.com/en-us/api-reference/property/Animation/AnimationId) property, is constructed from a [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence). Every animation has a [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence) associated with it. [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence)s are usually created by the Roblox Animation Editor but can be created through other plugins or even manually.

For more information, see the [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence) page.

What does the KeyframeSequenceProvider do?
------------------------------------------

The KeyframeSequenceProvider has a number of uses.

*   Download the [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence) associated with an animation content ID from the Roblox website
*   Generate a temporary id to locally preview an animation
*   Fetch the content IDs of animations owned by a particular user.