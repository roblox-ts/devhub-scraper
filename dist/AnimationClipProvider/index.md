Povides functions to load and preview
[AnimationClips. It includes a number of functions that are useful when working with an ](https://create.roblox.com/docs/reference/engine/classes/AnimationClip)Animation`.

The `AnimationClipProvider` replaces the deprecated `KeyframeSequenceProvider`
that was used to download `KeyframeSequences` by content ID.

The AnimationClipProvider has a number of uses.

- Download the `AnimationClip` associated with an animation content ID from
  the Roblox website, regardless of the underlying type of `AnimationClip`
  (`KeyframeSequence` or `CurveAnimation`).
- Generate a temporary id to locally preview an animation.
- Fetch the content IDs of animations owned by a particular user.