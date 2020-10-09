The **BlurEffect** applies a gaussian blur to the entire rendered game world. The strength of the blur is controlled by the [BlurEffect.Size](https://developer.roblox.com/en-us/api-reference/property/BlurEffect/Size). Only one **BlurEffect** can be applied at once (the instance with the greatest [Size](https://developer.roblox.com/en-us/api-reference/property/BlurEffect/Size) takes priority).

Like other post-processing effects, **BlurEffect** will only work while [Enabled](https://developer.roblox.com/en-us/api-reference/property/PostEffect/Enabled) and when parented to [Lighting](https://developer.roblox.com/en-us/api-reference/class/Lighting) or [Workspace.CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera). Also, it may render differently on low-end devices and/or depending on your Studio settings (see the **Quality Level** settings in **Rendering** → **Performance**).

For more details on this effect and others, see the `articles/post processing effects|Post-Processing Effects` article.