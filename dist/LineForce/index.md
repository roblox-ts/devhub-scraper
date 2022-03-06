A LineForce is used to apply a force along a line between two points. As the end points of the line move, the direction of the force will change accordingly.

![LineForce Demo](https://developer.roblox.com/assets/blt1c206bd81152d773/LineForceDemo.gif)

Direction of force
------------------

The direction that a LineForce applies its force in is determined by its [attachments](https://developer.roblox.com/en-us/api-reference/class/Attachment) and [LineForce.ApplyAtCenterOfMass](https://developer.roblox.com/en-us/api-reference/property/LineForce/ApplyAtCenterOfMass) properties. When ApplyAtCenter of mass is false, which it is by default, the direction of the force will be from the location of [Attachment0](https://developer.roblox.com/en-us/api-reference/property/Constraint/Attachment0) to the location of [Attachment1](https://developer.roblox.com/en-us/api-reference/property/Constraint/Attachment1). If ApplyToCenter is true, then the direction will be from the center of mass of Attachment0's parent to the location of Attachment1. Note that if the parent of Attachment0 is rigidly connected to other parts, then the LineForce will use the center of mass of all of the parts to determine the origin of the direction.

Location of force
-----------------

A LineForce will apply its force on the Parent of its Attachment0, but the location where the force is applied is determined by the LineForce's ApplyAtCenterOfMass property.

When ApplyAtCenterOfMass is false, which it is by default, the force will be applied to the part at the Attachement0's location. This means that if the attachment is not at the center of the part, it can create a torque on the part.

When ApplyAtCenterOfMass is set to true, the force will check if any other parts are rigidly connected to the parent part of its Attachment0. If there are, then the force will apply at the center of mass of all of the connected parts. If there are no rigid connections to other parts, the force will simply be applied at the center of mass of the part.

Strength of Force
-----------------

The strength of the force applied by a LineForce is determined by the [LineForce.Magnitude](https://developer.roblox.com/en-us/api-reference/property/LineForce/Magnitude) and [LineForce.InverseSquareLaw](https://developer.roblox.com/en-us/api-reference/property/LineForce/InverseSquareLaw) properties. The InverseSquareLaw property determines whether the force is constant or not.

When InverseSquareLaw is false, which is is by default, the force applied is constant, and its magnitude is equal to the magnitude defined by the Magnitude property.

When InverseSquareLaw is true, then the force will scale based on how much distance there is between the two endpoints. When the distance is 1 stud, then the force's magnitude will be the value of the Magnitude property. If the two points are further away, the force will decrease. Conversely, the force will increase if the two points move closer together. This function can be used to determine the force at any given separation:

ActualMagnitude = Magnitude / (Separation ^ 2)

**Tip**  

LineForces with [InverseSquareLaw](https://developer.roblox.com/api-reference/property/LineForce/InverseSquareLaw) set to true can be used to simulate various physical systems such as gravity or electric fields.

See also
--------

*   [Body Movers Example.rbxl](https://doy2mn9upadnk.cloudfront.net/uploads/default/original/3X/e/1/e17a844750802035b24f68ddcbd83f6312b8f1d6.rbxl), a sample place showcasing body movers in various configurations.
*   [Attachments and Constraints](https://developer.roblox.com/articles/Constraints), an article outlining how to create and use attachments and constraints