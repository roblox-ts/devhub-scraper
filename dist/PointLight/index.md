A PointLight is a light source that emits illumination from a single point.
Light is emitted spherically based on the [`PointLight.Range`](https://create.roblox.com/docs/reference/engine/classes/PointLight#Range) of the
PointLight.

In order for a PointLight to provide illumination, it must be the direct child
of a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) (the part or attachment itself
must be a descendant of the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace)).

If a PointLight is parented to a part, then the light will emanate from the
part's [`BasePart.Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position). If a PointLight is parented to an
attachment, then the light will emanate from the attachment's
[`Attachment.WorldPosition`](https://create.roblox.com/docs/reference/engine/classes/Attachment#WorldPosition).

For more light types, see the **see also** section.
## See Also

- [`SurfaceLight`](https://create.roblox.com/docs/reference/engine/classes/SurfaceLight)
- [`SpotLight`](https://create.roblox.com/docs/reference/engine/classes/SpotLight)