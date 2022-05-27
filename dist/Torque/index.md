A Torque is used to apply a torque to a part or assembly. When active, this
object will find the center of mass of the part or assembly connected to its
[Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) and will apply a torque, spinning the
part or parts.

![Torque Demo][1]

## Direction of Torque

The direction of the spin is determined by the [Torque.Torque](https://create.roblox.com/docs/reference/engine/classes/Torque#Torque) and
[Torque.RelativeTo](https://create.roblox.com/docs/reference/engine/classes/Torque#RelativeTo) properties. The Torque defines the spin about the X, Y,
and Z axes. However, these axes are oriented based on the RelativeTo property.

When RelativeTo is set to
[Enum.ActuatorRelativeTo.Attachment0](https://developer.roblox.com/en-us/api-reference/enum/ActuatorRelativeTo), the torque will
be oriented based on the local space of Attachment0. If Attachment0 moves or
rotates, the torque will change to make sure it is still applying in the
correct directions. Similarly, when RelativeTo is set to
[Enum.ActuatorRelativeTo.Attachment1](https://developer.roblox.com/en-us/api-reference/enum/ActuatorRelativeTo), the torque will
be applied based on [Attachment1's](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) orientation,
regardless of the position or direction of Attachment0. Last, RelativeTo can
be set to [Enum.ActuatorRelativeTo.World](https://developer.roblox.com/en-us/api-reference/enum/ActuatorRelativeTo), which will
use the world coordinate system to determine the axes for rotation.

See also:

- [Body Movers Example.rbxl][2], a sample place showcasing body movers in
  various configurations.
- [Attachments and Constraints][3], an article outlining how to create and use
  attachments and constraints

[1]: https://prod.docsiteassets.roblox.com/assets/blt9aa3f798a7e9af47/TorqueDemo.gif
[2]:
  https://doy2mn9upadnk.cloudfront.net/uploads/default/original/3X/e/1/e17a844750802035b24f68ddcbd83f6312b8f1d6.rbxl
[3]: https://developer.roblox.com/articles/Constraints