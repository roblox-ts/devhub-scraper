BodyMover is the abstract base class for the set of legacy objects that exert
forces to [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s in different ways. In general, the subclasses of
BodyMover can be placed into one of two categories based on the type of
force(s) they exert:
## Translational Force

- [`BodyForce`](https://create.roblox.com/docs/reference/engine/classes/BodyForce): Exert a force relative to world coordinates
- [`BodyPosition`](https://create.roblox.com/docs/reference/engine/classes/BodyPosition): Exert force to maintain a certain world position
- [`BodyVelocity`](https://create.roblox.com/docs/reference/engine/classes/BodyVelocity): Exert force to maintain a certain velocity

## Rotational Force (Torque)

- [`BodyThrust`](https://create.roblox.com/docs/reference/engine/classes/BodyThrust): Exert a force relative to object coordinates, which
applies torque if positioned in a certain way
- [`BodyGyro`](https://create.roblox.com/docs/reference/engine/classes/BodyGyro): Exert torque to maintain a certain orientation
- [`BodyAngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/BodyAngularVelocity): Exert torque to maintain a certain angular
velocity

An exception is the [`RocketPropulsion`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion) class, which exerts **both**
translational and rotational forces to cause a part to track down another
part.