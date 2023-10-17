This property is an integer between -127 and 127 that takes precedence
over all other rules for root part sort. When considering multiple parts
that are not [`Anchored`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Anchored) and which share the same
[`Massless`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Massless) value, a part with a higher
**RootPriority** will take priority over those with lower
**RootPriority**.

You can use this property to control which part of an assembly is the root
part and keep the root part stable if size changes.

See also [Understanding Assemblies](https://create.roblox.com/docs/physics/assemblies), an
article documenting what root parts are and how to use them.