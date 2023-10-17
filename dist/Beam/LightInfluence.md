Determines the degree to which the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) is influenced by the
environment's lighting.

LightInfluence is clamped between 0 and 1. When LightInfluence is 0, the
[`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) will be unaffected by the environment's lighting. When
LightInfluence is 1 however, it will be fully affected by lighting (as a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) would be).

For an example of this, and a demonstration of how this property interacts
with [`Beam.LightEmission`](https://create.roblox.com/docs/reference/engine/classes/Beam#LightEmission), please see the images below.

![Beam light](https://prod.docsiteassets.roblox.com/assets/legacy/BeamLight1.png)

![Beam light](https://prod.docsiteassets.roblox.com/assets/legacy/BeamLight2.png)