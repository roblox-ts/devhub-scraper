The Acceleration property determines how particles
[`ParticleEmitter.Speed`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Speed) changes over the particle's lifetime. It is
defined using a `Datatype.Vector3` to determine the acceleration on the
global X/Y/Z axes. It is measured in studs per second squared. When
changed, this property affects all particles emit by the emitter, both
current and future particles.

Acceleration will slow particles down if the vector points in the opposite
[`ParticleEmitter.EmissionDirection`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#EmissionDirection) in which particles are emitted.
Otherwise, it will speed them up. You can use [`ParticleEmitter.Drag`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Drag)
to slow particles down no matter what direction they travel.

Acceleration is most often used to apply a gravity effect to particles
(try a value of (0, -3, 0) for this). You can also use small values on the
X/Z axes to make it look like particles are being blown away by wind. If
you emit a bubble particle downwards, you could use an acceleration of (0,
5, 0) to cause the bubbles to decelerate and then float back upwards.