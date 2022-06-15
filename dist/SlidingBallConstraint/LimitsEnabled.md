Sets whether the [SlidingBallConstraint](https://developer.roblox.com/en-us/api-reference/class/SlidingBallConstraint) will limit the range of translation. If enabled, the [SlidingBallConstraint.CurrentPosition](https://developer.roblox.com/en-us/api-reference/property/SlidingBallConstraint/CurrentPosition) of the SlidingBallConstraint will only be able to be between the values of [SlidingBallConstraint.LowerLimit](https://developer.roblox.com/en-us/api-reference/property/SlidingBallConstraint/LowerLimit) and [SlidingBallConstraint.UpperLimit](https://developer.roblox.com/en-us/api-reference/property/SlidingBallConstraint/UpperLimit).

Here is a case where the UpperLimit is 2 and the LowerLimit is 1:

![Constraint Limits 1](https://developer.roblox.com/assets/bltf14a6c4e36301d4b/SlidingBallConstraintLimits0.png)

Here is a case where the UpperLimit is 4 and the LowerLimit is 2. Note that in this case the attachments will never be allowed to overlap; they will always be offset:

![Constraint Limits 2](https://developer.roblox.com/assets/blt7eda4750d97b868c/SlidingBallConstraintLimits1.png)