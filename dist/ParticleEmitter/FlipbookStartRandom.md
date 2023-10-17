The [`FlipbookStartRandom`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#FlipbookStartRandom)
property determines whether each particle begins at a random frame of the
animation instead of always starting at the first frame. One use case is
to enable this property and also set
[`FlipbookFramerate`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#FlipbookFramerate) to zero,
causing each emitted particle to be a static frame chosen randomly from
the flipbook texture.