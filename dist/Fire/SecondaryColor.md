The SecondaryColor property determines the color of the smaller particles
emit by a [`Fire`](https://create.roblox.com/docs/reference/engine/classes/Fire) object. It is essentially the color of the inner
portion of the flame. Below, you can see the SecondaryColor of the flame
is set to white to differentiate with the larger, outer particles which
have [`Fire.Color`](https://create.roblox.com/docs/reference/engine/classes/Fire#Color) set to blue. It should be noted that the inner
particles use a [`ParticleEmitter.LightEmission`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#LightEmission) of 1, so darker
colors will instead cause the particles to appear transparent (and
therefore black will stop rendering inner particles altogether).