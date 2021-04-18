An AlignOrientation is a constraint that applies a torque to make its attachments align. Like other constraints, this has two [Attachments](https://developer.roblox.com/en-us/api-reference/class/Attachment). In this case the two attachments are constrained to be oriented in the same direction but not necessarily the same position.

![AlignOrientation Demo](https://developer.roblox.com/assets/blt69a26db492586631/AlignOrientationDemo.gif)

By default, this constraint only applies torque on `Constraint/Attachment0|Attachment0's` parent, although it can be configured to apply torque on both attachments. This torque can be limited to a max amount via [AlignOrientation.MaxTorque](https://developer.roblox.com/en-us/api-reference/property/AlignOrientation/MaxTorque).

**Note**  

Any torque created by AlignOrientation will be applied about the center of mass of the parent of the attachments (or the center of mass of parts rigidly connected to the parents). Also note that if this constraint attaches one part (**A**) to another part (**B**) that is anchored or connected to an anchored part (**Z**), part **A** will not be locally simulated when interacting with a player.

Primary axis
------------

The behavior of an AlignOrientation is determined by its [AlignOrientation.PrimaryAxisOnly](https://developer.roblox.com/en-us/api-reference/property/AlignOrientation/PrimaryAxisOnly) property. By default this value is false and an AlignOrientation will work so that the orientation of its Attachment0 exactly matches the orientation of its Attachment1. It will apply torque about all 3 axes to achieve this goal.

If PrimaryAxisOnly is set to true, then the AlignOrientation will only apply torque if the primary axis of its Attachment0 becomes unaligned with [Attachment1](https://developer.roblox.com/en-us/api-reference/property/Constraint/Attachment1). This means that any rotation about the Attachment0's primary axis will not create a torque.

Torque magnitude
----------------

The torque used to constrain an AlignOrientation can either be configured or set to the maximum that constraints allow. Whether the torque is configurable is determined by the [AlignOrientation.RigidityEnabled](https://developer.roblox.com/en-us/api-reference/property/AlignOrientation/RigidityEnabled) property.

When RigidityEnabled is true, then the physics solver will use as much torque as possible to move the two attachment points together. This is the same scale of force used to align other constraints, such as prismatics when their attachments are misaligned.

When RigidityEnabled is false, then the force will be determined by the MaxTorque, MaxAngularVelocity, and Responsiveness. MaxForce and MaxVelocity are caps to the torque and angular velocity respectively. The actual scale of the torque is determined by the Responsiveness. The mechanism for responsiveness is a little complicated, but put simply the higher the responsiveness, the quicker the constraint will try to reach its goal.

Reaction Torque
---------------

AlignOrientations by default only apply a torque on Attachment0's parent Part. The parent Part of Attachment1 remains unaffected. However, a torque can also be applied to Attachment1 by enabling the [AlignOrientation.ReactionTorqueEnabled](https://developer.roblox.com/en-us/api-reference/property/AlignOrientation/ReactionTorqueEnabled). This will cause a torque to be applied to both Attachment0 and Attachment1 in equal and opposite directions.

See also
--------

*   [Body Movers Example.rbxl](https://doy2mn9upadnk.cloudfront.net/uploads/default/original/3X/e/1/e17a844750802035b24f68ddcbd83f6312b8f1d6.rbxl), a sample place showcasing body movers in various configurations.
*   [Attachments and Constraints](https://developer.roblox.com/articles/Constraints), an article outlining how to create and use attachments and constraints