Provides functions to load and preview [`AnimationClips`](https://create.roblox.com/docs/reference/engine/classes/AnimationClip).
It includes a number of functions that are useful when working with an
[`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation).

The [`AnimationClipProvider`](https://create.roblox.com/docs/reference/engine/classes/AnimationClipProvider) replaces the deprecated
[`KeyframeSequenceProvider`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequenceProvider) that was used to download `KeyframeSequences`
by content ID.

The AnimationClipProvider has a number of uses.

- Download the [`AnimationClip`](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) associated with an animation content ID
from the Roblox website, regardless of the underlying type of
[`AnimationClip`](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) ([`KeyframeSequence`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence) or [`CurveAnimation`](https://create.roblox.com/docs/reference/engine/classes/CurveAnimation)).
- Generate a temporary id to locally preview an animation.
- Fetch the content IDs of animations owned by a particular user.