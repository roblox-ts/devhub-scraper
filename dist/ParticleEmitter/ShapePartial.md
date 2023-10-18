Depending on the [`ParticleEmitter.Shape`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Shape) value, this property
performs a different action:

- For cylinders, ShapePartial specifies the top radius proportion. A value
of 0 means the top of the cylinder has a zero radius, making it a
Christmas tree, and particles only emit from that single point. A value
of 1 means the cylinder has no deformation and is regular cylinder.
- For discs, ShapePartial specifies the inner radius proportion. A value
of 0 means the disc is fully closed (a circle/ellipse), a value of 1
means emission only occurs on the outer most rim of the disc, and values
in-between emit from an annulus with a certain thickness.
- For spheres, ShapePartial specifies the hemispherical angle that
particles emit over. A value of 1 means particles emit from entire
sphere, a value of 0.5 means particles emit from a half-dome, and a
value of 0 means particles only emit from a single point at the north
pole.
- For boxes, ShapePartial specifies the extent to which the box becomes a
frustum from its center point. For example, when the value is 1 it's a
pyramidical shape from the box's center point.

For visual examples, see
[Particle Emitters - ShapePartial](https://create.roblox.com/docs/effects/particle-emitters#shapepartial).