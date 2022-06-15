A PointLight is a light source that emits illumination from a single point. Light is emitted spherically based on the [PointLight.Range](https://developer.roblox.com/en-us/api-reference/property/PointLight/Range) of the PointLight.

In order for a PointLight to provide illumination, it must be the direct child of a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) or [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment) (the part or attachment itself must be a descendant of the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace)).

If a PointLight is parented to a part, then the light will emanate from the part's [BasePart.Position](https://developer.roblox.com/en-us/api-reference/property/BasePart/Position). If a PointLight is parented to an attachment, then the light will emanate from the attachment's [Attachment.WorldPosition](https://developer.roblox.com/en-us/api-reference/property/Attachment/WorldPosition).

For more light types, see the **see also** section.

See Also
--------

*   [SurfaceLight](https://developer.roblox.com/en-us/api-reference/class/SurfaceLight)
*   [SpotLight](https://developer.roblox.com/en-us/api-reference/class/SpotLight)