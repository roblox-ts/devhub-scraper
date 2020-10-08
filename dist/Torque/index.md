A TorqueActuator is used to apply a torque to a part or assembly. When active, this object will find the center of mass of the part or assembly connected to its [Attachment0](https://developer.roblox.com/en-us/api-reference/property/Constraint/Attachment0) and will apply a torque, spinning the part or parts.

![Torque Demo](https://developer.roblox.com/assets/blt9aa3f798a7e9af47/TorqueDemo.gif)

Direction of Torque
-------------------

The direction of the spin is determined by the [Torque.Torque](https://developer.roblox.com/en-us/api-reference/property/Torque/Torque) and [Torque.RelativeTo](https://developer.roblox.com/en-us/api-reference/property/Torque/RelativeTo) properties. The Torque defines the spin about the X, Y, and Z axes. However, these axes are oriented based on the RelativeTo property.

When RelativeTo is set to `Enum/ActuatorRelativeTo|Enum.ActuatorRelativeTo.Attachment0`, the torque will be oriented based on the local space of Attachment0. If Attachment0 moves or rotates, the torque will change to make sure it is still applying in the correct directions. Similarly, when RelativeTo is set to `Enum/ActuatorRelativeTo|Enum.ActuatorRelativeTo.Attachment1`, the torque will be applied based on `Constraint/Attachment1|Attachment1's` orientation, regardless of the position or direction of Attachment0. Last, RelativeTo can be set to `Enum/ActuatorRelativeTo|Enum.ActuatorRelativeTo.World`, which will use the world coordinate system to determine the axes for rotation.

See also
--------

*   [Body Movers Example.rbxl](https://doy2mn9upadnk.cloudfront.net/uploads/default/original/3X/e/1/e17a844750802035b24f68ddcbd83f6312b8f1d6.rbxl), a sample place showcasing body movers in various configurations.
*   [Attachments and Constraints](https://developer.roblox.com/articles/Constraints), an article outlining how to create and use attachments and constraints