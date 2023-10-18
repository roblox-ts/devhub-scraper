Models contain a persistent canonical scale factor, which starts out at 1
for newly created models. This function scales the model, around the pivot
location, relative to how it would look at a scale factor of 1. To
accomplish this it does two things:

- Sets the current scale factor of the model to the specified value
- Resizes and repositions all descendant Instances accordingly

The scaling of locations is done around the pivot location.

All "geometric" properties of descendant Instances will be scaled. That
obviously includes the sizes of parts, but here are some other examples of
properties which are scaled:

- The length of joints like [`WeldConstraints`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint), and
[`Ropes`](https://create.roblox.com/docs/reference/engine/classes/Rope)
- Physical velocities and forces like `Hinge.MaxServoTorque`
- Visual properties like sizes of particle emitters
- Other length properties like `Sound.RolloffMinDistance`