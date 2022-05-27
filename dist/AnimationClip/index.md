The non-creatable [AnimationClip](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) instance type represents abstract animation
data that can be fed to the Roblox animation system. KeyframeSequence and
CurveAnimation are two current instance types that inherit from AnimationClip.

There are different ways to represent animation data. To simplify the use of
Roblox's animation system, all such representations are their own instance
types but inherit from the AnimationClip instance. AnimationClip instance
published to Roblox (via the Animation Clip Editor) can be loaded into the
Roblox animation System using an [Animation](https://create.roblox.com/docs/reference/engine/classes/Animation) instance by providing the asset
ID of the published AnimationClip. Use the AnimationClipProvider to be able to
retrieve any type of animation data using an asset ID.