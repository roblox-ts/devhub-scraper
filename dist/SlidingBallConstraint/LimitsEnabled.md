Sets whether the [SlidingBallConstraint](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) will limit the range of
translation. If enabled, the [SlidingBallConstraint.CurrentPosition](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#CurrentPosition) of
the SlidingBallConstraint will only be able to be between the values of
[SlidingBallConstraint.LowerLimit](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#LowerLimit) and [SlidingBallConstraint.UpperLimit](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#UpperLimit).

Here is a case where the UpperLimit is 2 and the LowerLimit is 1:

![Constraint Limits 1][1]

Here is a case where the UpperLimit is 4 and the LowerLimit is 2. Note
that in this case the attachments will never be allowed to overlap; they
will always be offset:

![Constraint Limits 2][2]

[1]: https://prod.docsiteassets.roblox.com/assets/bltf14a6c4e36301d4b/SlidingBallConstraintLimits0.png
[2]: https://prod.docsiteassets.roblox.com/assets/blt7eda4750d97b868c/SlidingBallConstraintLimits1.png