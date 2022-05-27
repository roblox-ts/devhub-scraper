This property how elastic [Attachments](https://create.roblox.com/docs/reference/engine/classes/Attachment) connected by a
[TorsionSpringConstraint](https://create.roblox.com/docs/reference/engine/classes/TorsionSpringConstraint) are when they reach the end of the range
specified by [MaxAngle](https://create.roblox.com/docs/reference/engine/classes/TorsionSpringConstraint#MaxAngle) when
[LimitEnabled](https://create.roblox.com/docs/reference/engine/classes/TorsionSpringConstraint#LimitEnabled) is `true`. The value
defaults to 0 and can be any floating number within the range [0, 1].

```lua
torsionSpring.Restitution = 0
```

#### What is restitution

Restitution determines the damping effect that the constraint applies when
it reaches its limits.

Imagine you release a ball from some distance and it hits the ground. If
the restitution of the surface is 1 then the ball will return to its
original height (no energy is damped). If the restitution is 0 the ball
will stick to the ground (all the energy is lost). Similarly, automobiles
rely on damping for shock absorption as do some “slow-close” doors.

All the values between 0 and 1 will simulate something between these to
extreme cases.