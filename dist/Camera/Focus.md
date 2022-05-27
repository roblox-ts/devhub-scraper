The [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera) Focus is a [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) that determines the area in 3D
space the graphics engine will prioritize.

Certain graphical operations Roblox performs, such as updating lighting,
can take a lot of time or computational effort to complete. Focus tells
Roblox the area in 3D space to prioritize when performing such operations.
For example dynamic lighting from objects such as [PointLights](https://create.roblox.com/docs/reference/engine/classes/PointLight)
may not render at distances far from the Focus.

The default Roblox [camera scripts][1] automatically set the Focus to
follow the [Camera.CameraSubject](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraSubject) (usually a [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid)). However, Focus
will not be automatically updated in the following cases:

- When the [Camera.CameraType](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) is set to _'Scriptable'_
- When the default [camera scripts][1] are not being used

In these cases, you should update Focus every frame, using
[RunService:BindToRenderStep](https://create.roblox.com/docs/reference/engine/classes/RunService#BindToRenderStep) function at the _'Camera'_
[RenderPriority](https://developer.roblox.com/en-us/api-reference/enum/RenderPriority).

Focus has no bearing on the positioning or orientation of the [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera)
(see [Camera.CFrame](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) for this).

[1]: https://developer.roblox.com/articles/Movement-and-camera-controls