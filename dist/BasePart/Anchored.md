The Anchored property determines whether the part will be **immovable** by
physics. When enabled, a part will never change position due to gravity,
other parts collisions, overlapping other parts, or any other
physics-related causes. A part that is not anchored is called
**unanchored**. As a result, two anchored parts will never fire the
[`BasePart.Touched`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Touched) event on each other. An anchored part may still
be moved by changing its [`BasePart.CFrame`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CFrame) or
[`BasePart.Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position), and it still may have a nonzero
[`BasePart.AssemblyLinearVelocity`](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyLinearVelocity) and
[`BasePart.AssemblyAngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyAngularVelocity). Finally, if an unanchored part
is joined with an anchored part through an object like a [`Weld`](https://create.roblox.com/docs/reference/engine/classes/Weld), it
too will act anchored. If such a joint breaks the part may be affected by
physics again. See
[Understanding Assemblies](https://create.roblox.com/docs/physics/assemblies) for more on
this.

Network ownership cannot be set on anchored parts. If a part's anchored
status changes on the server, the network ownership of that part will be
affected.