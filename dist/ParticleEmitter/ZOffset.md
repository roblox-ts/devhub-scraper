The ZOffset property determines the forward-backward (Z) render position
of particles, in studs. they render at a modified
[`ParticleEmitter.Size`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Size) such that this property will not affect the
screen size of particles. When changed, this property will affects all
particles, both current and future particles. Note that this property
accepts fractional values; it is not like [`GuiObject.ZIndex`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#ZIndex) (an
integer)

A practical use of ZOffset is for `ParticleEmitters` placed in players'
characters: use it to define if particles should appear in front of or
behind the character (use a value of +/- 2).

Positive values will move particles closer to the camera, and negative
values move particles away. Sufficiently negative values can cause
particles to render inside or behind the parent part.