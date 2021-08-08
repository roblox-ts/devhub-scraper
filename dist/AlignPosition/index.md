An AlignPosition is used to apply a force towards a location. Like other constraints, AlignPositions have two [Attachments](https://developer.roblox.com/en-us/api-reference/class/Attachment). In this case the attachments are constrained to be in the same position, although not necessarily in the same orientation. By default, this constraint only applies forces on [Attachment0](https://developer.roblox.com/en-us/api-reference/property/Constraint/Attachment0), although it can be configured to apply forces on both attachments.

![AlignPosition Demo](https://developer.roblox.com/assets/bltf994f657b0e97add/AlignPositionDemo.gif)

**Note**  

If this constraint attaches one part (**A**) to another part (**B**) that is anchored or connected to an anchored part (**Z**), part **A** will not be locally simulated when interacting with a player.

Reaction force
--------------

AlignPositions by default only apply a force on Attachment0's parent Part. The parent Part of [Attachment1](https://developer.roblox.com/en-us/api-reference/property/Constraint/Attachment1) remains unaffected. However, a force can also be applied to Attachment1 by enabling the [AlignPosition.ReactionForceEnabled](https://developer.roblox.com/en-us/api-reference/property/AlignPosition/ReactionForceEnabled). This will cause a force to be applied to both Attachment0 and Attachment1 in the direction of each other.

Force location
--------------

By default the force created by an AlignPosition is applied to the parent Part of Attachment0 at the Attachment's location. The direction of the force is always towards Attachment1. This means that if the center of mass of the Part is not aligned with the direction of the force, a torque will be applied to the part as well as a force.

AlignPositions' behaviors can be changed with the [AlignPosition.ApplyAtCenterOfMass](https://developer.roblox.com/en-us/api-reference/property/AlignPosition/ApplyAtCenterOfMass) property. When enabled, the AlignPosition will check if other Parts are rigidly connected to the parent Part of Attachment0. If there are, then the force will be applied at the center of mass of those connected parts. If not, then the force will be applied at the center of mass of the parent part itself.

Force magnitude
---------------

The force used to constrain an AlignPosition can either be configured or set to the maximum that constraints allow. Whether the force is configurable is determined by the [AlignPosition.RigidityEnabled](https://developer.roblox.com/en-us/api-reference/property/AlignPosition/RigidityEnabled) property.

When RigidityEnabled is true, then the physics solver will react as quickly as possible to move the attachments together. This is the same scale of force used to connect other constraints, such as hinges when their attachments are separated.

When RigidityEnabled is false, then the force will be determined by the [AlignPosition.MaxForce](https://developer.roblox.com/en-us/api-reference/property/AlignPosition/MaxForce), [AlignPosition.MaxVelocity](https://developer.roblox.com/en-us/api-reference/property/AlignPosition/MaxVelocity), and [AlignPosition.Responsiveness](https://developer.roblox.com/en-us/api-reference/property/AlignPosition/Responsiveness). MaxForce and MaxVelocity are caps to the force and velocities respectively. The actual scale of the force is determined by the Responsiveness. The mechanism for responsiveness is a little complicated, but put simply the higher the responsiveness, the quicker the constraint will try to reach its goal.

See also
--------

*   [Body Movers Example.rbxl](https://doy2mn9upadnk.cloudfront.net/uploads/default/original/3X/e/1/e17a844750802035b24f68ddcbd83f6312b8f1d6.rbxl), a sample place showcasing body movers in various configurations.
*   [Attachments and Constraints](https://developer.roblox.com/articles/Constraints), an article outlining how to create and use attachments and constraints