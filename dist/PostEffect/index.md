PostEffect is an abstract base class for post-processing effects, such as
[BloomEffect](https://create.roblox.com/docs/reference/engine/classes/BloomEffect) and [ColorCorrectionEffect](https://create.roblox.com/docs/reference/engine/classes/ColorCorrectionEffect). They change how the world looks
**after** it has been rendered. They do not affect [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject)s. Objects of
this kind should be parented to the [Lighting](https://create.roblox.com/docs/reference/engine/classes/Lighting) or the
[Workspace.CurrentCamera](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera) in order to work.

It should also be noted that some post-processing effects will work
differently or **not at all** when Roblox is set to a low
[QualityLevel](https://create.roblox.com/docs/reference/engine/classes/RenderSettings#QualityLevel) (or
[EditQualityLevel](https://create.roblox.com/docs/reference/engine/classes/RenderSettings#EditQualityLevel) in Studio). On some low-end
devices, faster rendering algorithms may be used. By default, these quality
settings are set to Automatic, so if you aren't seeing post-processing effects
you should check Roblox's settings under the "Rendering" section. It may be
necessary to override the automatic behavior temporarily in order to preview
post-processing effects.