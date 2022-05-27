A spotlight emits light of a specified [Color](https://create.roblox.com/docs/reference/engine/classes/Light#Color) and
[Brightness](https://create.roblox.com/docs/reference/engine/classes/Light#Brightness) in the shape of a cone with a spherical base.
This object is ideal for **directional** light sources like flashlights and
headlights.

[Range](https://create.roblox.com/docs/reference/engine/classes/SpotLight#Range) controls the distance of illumination and
[Angle](https://create.roblox.com/docs/reference/engine/classes/SpotLight#Angle) defines the angle of light emission from the cone's
apex as illustrated below.

A spotlight must be a direct child of a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) and will
exhibit the following behavior:

- When the spotlight is parented to a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart), the [SpotLight.Face](https://create.roblox.com/docs/reference/engine/classes/SpotLight#Face)
  property determines the face of the part from which light emanates.
- Although [Attachments](https://create.roblox.com/docs/reference/engine/classes/Attachment) don't have faces, the [SpotLight.Face](https://create.roblox.com/docs/reference/engine/classes/SpotLight#Face)
  property determines the axis of the attachment from which light emanates;
  **-Z** is front, **+X** is right, **+Y** is top, etc.

![undefined](https://prod.docsiteassets.roblox.com/assets/blt13afe21744db416b/LightingDiagram-SpotLight.jpg)

See also:

- [SurfaceLight](https://create.roblox.com/docs/reference/engine/classes/SurfaceLight)
- [PointLight](https://create.roblox.com/docs/reference/engine/classes/PointLight)