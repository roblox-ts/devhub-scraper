The Anchored property determines whether the part will be **immovable** by
physics. When enabled, a part will never change position due to gravity,
other parts collisions, overlapping other parts, or any other
physics-related causes. A part that is not anchored is called
**unanchored**. As a result, two anchored parts will never fire the
[BasePart.Touched](https://create.roblox.com/docs/reference/engine/classes/BasePart#Touched) event on each other. An anchored part may still be
moved by changing its [BasePart.CFrame](https://create.roblox.com/docs/reference/engine/classes/BasePart#CFrame) or [BasePart.Position](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position), and it
still may have a nonzero [BasePart.Velocity](https://create.roblox.com/docs/reference/engine/classes/BasePart#Velocity) and [BasePart.RotVelocity](https://create.roblox.com/docs/reference/engine/classes/BasePart#RotVelocity).
Finally, if an unanchored part is joined with an anchored part through an
object like a [Weld](https://create.roblox.com/docs/reference/engine/classes/Weld), it too will act anchored. If such a joint breaks the
part may be affected by physics again.

It's a good idea to anchor parts that are part of your game's environment
(and therefore shouldn't move). In fact, if you don't have a good reason
to keep a part unanchored, you should anchor it. Unanchored parts can
cause performance issues if there are many. In Roblox Studio, you can
anchor/unanchor an entire model using the Anchor tool. Be sure to keep
static environment models anchored, like in-world buttons, signs, and
trees.

Network ownership cannot be set on anchored parts. If a part's anchored
status changes on the server, the network ownership of that part will be
affected.