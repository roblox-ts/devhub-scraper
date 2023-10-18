Maximum force magnitude the constraint can apply to achieve its goal. Only
used if [`RigidityEnabled`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#RigidityEnabled) is false and
[`ForceLimitMode`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#ForceLimitMode) is
[`Magnitude`](https://create.roblox.com/docs/reference/engine/enums/ForceLimitMode).

Note that [`MaxForce`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#MaxForce), as well as
[`MaxVelocity`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#MaxVelocity), are **caps** to the force
and velocity respectively. The actual scale is determined by
[`Responsiveness`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#Responsiveness).