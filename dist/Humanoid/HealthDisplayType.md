**HealthDisplayType** controls when a humanoid's health bar is allowed to
be displayed. By default, this property is set to
[`DisplayWhenDamaged`](https://create.roblox.com/docs/reference/engine/enums/HumanoidHealthDisplayType), which makes the
health bar only display when a humanoid's [`Humanoid.Health`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Health) is less
than its [`Humanoid.MaxHealth`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MaxHealth). It can also be set to
[`AlwaysOn`](https://create.roblox.com/docs/reference/engine/enums/HumanoidHealthDisplayType), which makes the health bar
always display, or [`AlwaysOff`](https://create.roblox.com/docs/reference/engine/enums/HumanoidHealthDisplayType), which
prevents it from ever displaying.

This property functions independently of the humanoid's
`HealthDisplayDistance` property, which is responsible for making the
health bar fade out at certain distances. If **HealthDisplayType** is set
to [`AlwaysOn`](https://create.roblox.com/docs/reference/engine/enums/HumanoidHealthDisplayType), it will still fade out
depending the how [`Humanoid.HealthDisplayDistance`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#HealthDisplayDistance) is configured.

See
[Character Name/Health Display](https://create.roblox.com/docs/characters/name-health-display)
for an in-depth guide on controlling the appearance of character names and
health bars.