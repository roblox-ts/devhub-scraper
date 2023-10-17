The Size property determines the world size in studs of all active
particles over their individual lifetimes. This property represents the
dimensions of the square [`ParticleEmitter.Texture`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Texture) for each
particle. It is a [`NumberSequence`](https://create.roblox.com/docs/reference/engine/datatypes/NumberSequence) that works similar to
[`ParticleEmitter.Transparency`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Transparency) and [`ParticleEmitter.Color`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Color).

A particle's present size is determined by linearly interpolating on this
NumberSequence using the particle's age and the particle's total lifetime.
For example, if a particle spawned 2 seconds ago and has a 4 second
lifetime, the size will be whatever is 50% of the way through the
[`NumberSequence`](https://create.roblox.com/docs/reference/engine/datatypes/NumberSequence). For any [`NumberSequenceKeypoint`](https://create.roblox.com/docs/reference/engine/datatypes/NumberSequenceKeypoint) with
a nonzero envelope value, a random value in the envelope range is chosen
for each keypoint for each particle when it spawns.

Changing this property applies changes to all particles present in the
system. This is because the size of a particle is determined using its
present lifetime and this NumberSequence (the Size at the time the
particle was emit is not stored on a per-particle basis).
#### Design Note

When designing particle effects, size is probably the most important of
all properties. Too large or too subtle can ruin a particle effect! The
first thing you should do is decide how you want particles to enter and
exit view - fade in/out, or grow/shrink from size 0? The choice is yours -
start with a size NumberSequence from 0 to 3 or the reverse and go from
there.