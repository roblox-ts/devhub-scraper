**Transform** determines the current animated offset of the bone relative
to its [`CFrame`](https://create.roblox.com/docs/reference/engine/classes/Attachment#CFrame). This property is set by Roblox
when animations on skinned meshes are played, although it can be
manipulated manually in a manner similar to [`Motor6D.Transform`](https://create.roblox.com/docs/reference/engine/classes/Motor6D#Transform).

See also:

- [`Motor6D.Transform`](https://create.roblox.com/docs/reference/engine/classes/Motor6D#Transform), a property which plays a similar role in
character rig animation
- [`TransformedCFrame`](https://create.roblox.com/docs/reference/engine/classes/Bone#TransformedCFrame) and
[`TransformedWorldCFrame`](https://create.roblox.com/docs/reference/engine/classes/Bone#TransformedWorldCFrame), whose values
are partially determined by this property