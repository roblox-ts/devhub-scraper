The **BlurEffect** applies a gaussian blur to the entire rendered game world.
The strength of the blur is controlled by the [BlurEffect.Size](https://create.roblox.com/docs/reference/engine/classes/BlurEffect#Size). Only one
**BlurEffect** can be applied at once (the instance with the greatest
[Size](https://create.roblox.com/docs/reference/engine/classes/BlurEffect#Size) takes priority).

Like other post-processing effects, **BlurEffect** will only work while
[Enabled](https://create.roblox.com/docs/reference/engine/classes/PostEffect#Enabled) and when parented to [Lighting](https://create.roblox.com/docs/reference/engine/classes/Lighting) or
[Workspace.CurrentCamera](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera). Also, it may render differently on low-end devices
and/or depending on your Studio settings (see the **Quality Level** settings
in **Rendering** → **Performance**).

For more details on this effect and others, see
[Post-Processing Effects](/building-and-visuals/lighting-and-effects/post-processing-effects).