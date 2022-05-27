The **ColorCorrectionEffect** can be used to adjust several color-related
properties at once: [Saturation](https://create.roblox.com/docs/reference/engine/classes/ColorCorrectionEffect#Saturation),
[TintColor](https://create.roblox.com/docs/reference/engine/classes/ColorCorrectionEffect#TintColor),
[Brightness](https://create.roblox.com/docs/reference/engine/classes/ColorCorrectionEffect#Brightness) and
[Contrast](https://create.roblox.com/docs/reference/engine/classes/ColorCorrectionEffect#Contrast). It's useful for fine-tuning the
visual aesthetic of a world or communicating status effects to the player.
Multiple **ColorCorrectionEffect** objects can be applied at once and they
will compose their effects together.

Like other post-processing effects, **ColorCorrectionEffect** will only work
while [Enabled](https://create.roblox.com/docs/reference/engine/classes/PostEffect#Enabled) and when parented to [Lighting](https://create.roblox.com/docs/reference/engine/classes/Lighting) or
[Workspace.CurrentCamera](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera). Also, it may render differently depending on your
Studio settings (see the **Quality Level** settings in **Rendering** →
**Performance**).

For more details on this effect and others, see
[Post-Processing Effects](/building-and-visuals/lighting-and-effects/post-processing-effects).