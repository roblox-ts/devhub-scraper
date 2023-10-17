Determines how the constraint force will be limited when
[`RigidityEnabled`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#RigidityEnabled) is false. When set
to `Enum.ForceLimitMode|Magnitude`, the constraint force will be limited
such that the magnitude is less than
[`MaxForce`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#MaxForce). When set to
`Enum.ForceLimitMode|PerAxis`, the constraint force along each axis will
be limited by [`MaxAxesForce`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#MaxAxesForce). The axes
along which the force will be limited are based on the
[`ForceRelativeTo`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#ForceRelativeTo) property.