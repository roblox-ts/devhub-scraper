The AngularVelocity property is a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) which determines the
goal angular velocity a [BodyAngularVelocity](https://create.roblox.com/docs/reference/engine/classes/BodyAngularVelocity) should maintain through the
exertion of torque. For this property, the direction of the vector is the
axis of rotation. The magnitude is the angular velocity in **radians per
second**. By default, this property is `(0, 2, 0)`.

**Tip:** You can multiply a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) by `math.rad(360)`, or
**2π**, in order to convert [angular frequency][5] (rotations per second)
into the desired [angular velocity][3] (radians per second). For example:
Setting [AngularVelocity](https://create.roblox.com/docs/reference/engine/classes/BodyAngularVelocity#AngularVelocity) to
`Vector3.new(0, 1, 0) * math.rad(360)` ≈ `Vector3.new(0, 6.283, 0)` will
cause a part to spin around the Y axis once per second.