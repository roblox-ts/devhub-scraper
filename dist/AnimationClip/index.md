The non-creatable [`AnimationClip`](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) instance type represents abstract
animation data that can be fed to the Roblox animation system.
[`KeyframeSequence`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence) and [`CurveAnimation`](https://create.roblox.com/docs/reference/engine/classes/CurveAnimation) are two current instance
types that inherit from [`AnimationClip`](https://create.roblox.com/docs/reference/engine/classes/AnimationClip).

There are different ways to represent animation data. To simplify the use of
Roblox's animation system, all such representations are their own instance
types but inherit from the [`AnimationClip`](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) instance. Animation clips
published to Roblox via the [Animation Editor](https://create.roblox.com/docs/animation/editor)
can be loaded into the Roblox engine using an [`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation) instance.