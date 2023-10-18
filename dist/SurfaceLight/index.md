A SurfaceLight is a light source that emits illumination of a specified
[`Light.Color`](https://create.roblox.com/docs/reference/engine/classes/Light#Color) and [`Light.Brightness`](https://create.roblox.com/docs/reference/engine/classes/Light#Brightness) from a
[`SurfaceLight.Face`](https://create.roblox.com/docs/reference/engine/classes/SurfaceLight#Face) for a specified [`SurfaceLight.Range`](https://create.roblox.com/docs/reference/engine/classes/SurfaceLight#Range).

In order for a SurfaceLight to provide illumination, it must be the direct
child of a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) (the part or attachment
itself must be a descendant of the Workspace). If a SurfaceLight is parented
to a part, then the light will emanate from the part's selected face(s). If
parented to an attachment SurfaceLight is equivalent to a [`SpotLight`](https://create.roblox.com/docs/reference/engine/classes/SpotLight).

For more light types, please see the **see also** section.
## See Also

- [`PointLight`](https://create.roblox.com/docs/reference/engine/classes/PointLight)
- [`SpotLight`](https://create.roblox.com/docs/reference/engine/classes/SpotLight)