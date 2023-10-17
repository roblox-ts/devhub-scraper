The **DisplayDistanceType** property controls the distance behavior of the
humanoid's name and health display. This property is set using the
`Enum.HumanoidDisplayDistanceType` enum with three available values, each
with their own set of rules:

- When set to `Enum.HumanoidDisplayDistanceType|Viewer`, the humanoid sees
the name/health of other humanoids within range of its own
`NameDisplayDistance` and `HealthDisplayDistance`.
- When set to `Enum.HumanoidDisplayDistanceType|Subject`, the humanoid
takes **full control** over its own name and health display through its
`NameDisplayDistance` and `HealthDisplayDistance` values.
- When set to `Enum.HumanoidDisplayDistanceType|None`, the humanoid's name
and health bar do not appear under any circumstances.

See
[Character Name/Health Display](https://create.roblox.com/docs/characters/name-health-display)
for an in-depth guide on controlling the appearance of character names and
health bars.