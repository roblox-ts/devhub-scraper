The RocketPropulsion object applies a force on a part so that it both
**follows** and **faces** a target part. It acts like a hybrid of
[`BodyPosition`](https://create.roblox.com/docs/reference/engine/classes/BodyPosition) and [`BodyGyro`](https://create.roblox.com/docs/reference/engine/classes/BodyGyro). Unlike other [`BodyMover`](https://create.roblox.com/docs/reference/engine/classes/BodyMover)s, a
RocketPropulsion must be instructed to begin applying a force: call
[`Fire`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#Fire) to start, or call
[`Abort`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#Abort) to stop.

You can detect when the part reaches its target using the
[`ReachedTarget`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#ReachedTarget) event, which fires once
the part is within the [`TargetRadius`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#TargetRadius) of
the [`Target`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#Target).

RocketPropulsion has the most physics-related properties out of all the
BodyMovers. It is helpful to separate the properties out into categories based
on what they control:

- **Goal:** [`Target`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#Target),
[`TargetOffset`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#TargetOffset) and
[`TargetRadius`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#TargetRadius)
- **Position (Thrust):** [`MaxSpeed`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#MaxSpeed),
[`MaxThrust`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#MaxThrust),
[`ThrustD`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#ThrustD) and
[`ThrustP`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#ThrustP)
- **Rotation (Turn):** - [`CartoonFactor`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#CartoonFactor),
[`MaxTorque`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#MaxTorque),
[`TurnD`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#TurnD) and
[`TurnP`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#TurnP)

Remember, you don't need to use both the translational and rotational force
features of a RocketPropulsion: by setting
[`MaxThrust`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#MaxThrust) to 0, you can make a part just
face the target **without** having it follow the target around (consider also
using a [`BodyPosition`](https://create.roblox.com/docs/reference/engine/classes/BodyPosition) in addition). Similarly, by setting
[`MaxTorque`](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#MaxTorque) to `(0, 0, 0)`, you can have a
part simply follow another object without facing it (use a [`BodyGyro`](https://create.roblox.com/docs/reference/engine/classes/BodyGyro) if
you want the object to maintain a specific orientation).