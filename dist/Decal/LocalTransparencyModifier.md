Acts as a multiplier for the [Decal](https://create.roblox.com/docs/reference/engine/classes/Decal)'s [Decal.Transparency](https://create.roblox.com/docs/reference/engine/classes/Decal#Transparency) property. The
effects are only visible to the [Players.LocalPlayer](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer).

This property should be used in situations where [Decal.Transparency](https://create.roblox.com/docs/reference/engine/classes/Decal#Transparency) is
being set by a different script. The benefit of LocalTransparencyModifier
is that it can be changed without concern for the original
[Decal.Transparency](https://create.roblox.com/docs/reference/engine/classes/Decal#Transparency) of the [Decal](https://create.roblox.com/docs/reference/engine/classes/Decal)

When LocalTransparencyModifier is set to 1, the [Decal](https://create.roblox.com/docs/reference/engine/classes/Decal) will be completely
invisible regardless of its original transparency. When it is set to 0,
the [Decal](https://create.roblox.com/docs/reference/engine/classes/Decal)s rendered transparency will match the [Decal.Transparency](https://create.roblox.com/docs/reference/engine/classes/Decal#Transparency)
value. The formula for this is:

```
Displayed Transparency = Transparency + ((1 - Transparency) * LocalTransparencyModifier)
```

Note, this property should be used on the client only and will not
replicate to the server.

For a variant of this property for `BasePart`s, see
`BasePart/LocalTransparencyModifier`.