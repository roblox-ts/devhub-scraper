This event fires when one of the [`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) limbs come in
contact with another [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart).

The [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) the [`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) limb is touching
along with the limb itself is given.

This event will not fire when limbs belonging to the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) come
into contact with themselves.
#### Alternatives to the Humanoid Touched event

Although the Humanoid.Touched event is useful, developers should consider
if there are alternatives that suit their needs better before using it.

- In most cases it is advised to connect a [`BasePart.Touched`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Touched) event
for [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) of interest instead. This is because the
Humanoid Touched event will constantly fire when the humanoid is moving.
For example, in a dodgeball game it would be more practical to connect a
touched event for the balls rather than the humanoid
- For developers trying to work out when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) has landed
on the ground, the [`Humanoid.StateChanged`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#StateChanged) event is more suitable.
Alternatively, developers can use [`Humanoid.FloorMaterial`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#FloorMaterial) to see
if the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is standing on anything

Note:

- Connecting to this event will cause a [`TouchTransmitter`](https://create.roblox.com/docs/reference/engine/classes/TouchTransmitter) to be
created in every limb
- There is currently no equivalent of [`BasePart.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/BasePart#TouchEnded) for
[`Humanoids`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)"