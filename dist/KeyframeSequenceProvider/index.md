The KeyframeSequenceProvider service provides functions to load and preview
[KeyframeSequence](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence)s. It includes a number of functions that are useful when
working with [Animation](https://create.roblox.com/docs/reference/engine/classes/Animation)s.

## What is a KeyframeSequence?

A [KeyframeSequence](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence) stores a series of [Pose](https://create.roblox.com/docs/reference/engine/classes/Pose)s that encode the hierarchy and
motion of an animation. The animation data Roblox uses in the playback of an
animation, referenced by the [Animation.AnimationId](https://create.roblox.com/docs/reference/engine/classes/Animation#AnimationId) property, can be
constructed from a [KeyframeSequence](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence). [KeyframeSequence](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence)s are usually created
by the Roblox Animation Editor but can be created through other plugins or
even manually.

For more information, see the [KeyframeSequence](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence) page.

## What does the KeyframeSequenceProvider do?

The KeyframeSequenceProvider has a number of uses.

- Download the [KeyframeSequence](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence) associated with an animation content ID from
  the Roblox website
- Generate a temporary id to locally preview an animation
- Fetch the content IDs of animations owned by a particular user.