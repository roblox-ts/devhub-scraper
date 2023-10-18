**IKControl** instances generate procedural animation poses using Inverse
Kinematics (IK). They allow you to make characters respond realistically to
their environment.

For example, you can make a character place its hand on a door handle exactly,
and the character will do so independently of its position. IKControls provide
the advantage of needing to create much fewer animations for your game while
giving your experience a more realistic and polished feel.

[`IKControl`](https://create.roblox.com/docs/reference/engine/classes/IKControl)s must be a child of a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) or
[`AnimationController`](https://create.roblox.com/docs/reference/engine/classes/AnimationController) with an [`Animator`](https://create.roblox.com/docs/reference/engine/classes/Animator) and have all of their
required properties set properly, otherwise they don't have any effect. The
required properties are [`Type`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Type),
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector), [`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target),
[`ChainRoot`](https://create.roblox.com/docs/reference/engine/classes/IKControl#ChainRoot). As soon as those are set, the IkControl
modifies the pose of your character as you specify. The following code sample
demonstrates how to set up your first [`IKControl`](https://create.roblox.com/docs/reference/engine/classes/IKControl) and get started with
creating more realistic animations for your game.

You can use IKControls to make a character:

- Rotate its head and torso to look at a point of interest in the world.
- Modify its feet positions to respond to dynamic terrain. Adjust its legs and
feet to place them accordingly on terrain with rocks and slopes.
- Hold a gun and place its hands appropriately on the grip without needing to
create animations for each gun in the game.
- Aim at a point in the world, so that the tip of the gun point exactly at
what you want to shoot. Especially useful in third person shooters.
- Place its hands on the steering wheel of a car and follow it when it
rotates.
- Much more!

[`IKControl`](https://create.roblox.com/docs/reference/engine/classes/IKControl) will override the animation for all the parts between the
[`ChainRoot`](https://create.roblox.com/docs/reference/engine/classes/IKControl#ChainRoot) and the
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector). You can enable/disable it using
[`Enabled`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Enabled) or change how much they have an effect over
the underlying animation using the [`Weight`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Weight). Be
careful: if you do not set up your [`IKControl`](https://create.roblox.com/docs/reference/engine/classes/IKControl)s correctly, you might
generate bad and unrealistic poses!