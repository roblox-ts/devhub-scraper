The Transparency property determines the transparency of all active
particles over their individual lifetimes. It works similar to
[`ParticleEmitter.Size`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Size) in how it affects particles over time. In
terms of rendering, it works like the [`BasePart.Transparency`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Transparency) of a
part on a scale of 0 to 1, where 0 is completely visible (opaque), and a
value of 1 is completely invisible (not rendered at all).

A particle's present transparency is determined by linearly interpolating
on this NumberSequence using the particle's age and the particle's total
lifetime. For example, if a particle spawned 2 seconds ago and has a 4
second lifetime, the transparency will be whatever is 50% of the way
through the `Datatype.NumberSequence`. For any
`Datatype.NumberSequenceKeypoint` with a nonzero envelope value, a random
value in the envelope range is chosen for each keypoint for each particle
when it spawns.

Changing this property applies changes to all particles present in the
system. This is because the transparency of a particle is determined using
its present lifetime and this `Datatype.NumberSequence` (the Transparency
at the time the particle was emit is not stored on a per-particle basis).