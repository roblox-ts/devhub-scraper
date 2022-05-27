The **BloomEffect** simulates the camera viewing a very bright light. It
causes brighter colors to glow, similar to applying the neon
[Material](https://create.roblox.com/docs/reference/engine/classes/BasePart#Material) to everything, including the the [Sky](https://create.roblox.com/docs/reference/engine/classes/Sky). Multiple
**BloomEffect** objects can be applied at once and they will compose their
effects together.

Like other post-processing effects, **BloomEffect** will only work while
[Enabled](https://create.roblox.com/docs/reference/engine/classes/PostEffect#Enabled) and when parented to [Lighting](https://create.roblox.com/docs/reference/engine/classes/Lighting) or
[Workspace.CurrentCamera](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera). Also, it may render differently depending on your
Studio settings (see the **Quality Level** settings in **Rendering** →
**Performance**).

For more details on this effect and others, see
[Post-Processing Effects](/building-and-visuals/lighting-and-effects/post-processing-effects).