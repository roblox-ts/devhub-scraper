This property indicates the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) automatically chosen to
represent the `Assembly|assembly`'s root part. It is the same part that's
returned when developers call
[`GetRootPart()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#GetRootPart).

The root part can be changed by changing the
[`RootPriority`](https://create.roblox.com/docs/reference/engine/classes/BasePart#RootPriority) of the parts in the assembly.

Parts that all share the same AssemblyRootPart are in the same assembly.

For more information on root parts, see
[Understanding Assemblies](https://create.roblox.com/docs/physics/assemblies).