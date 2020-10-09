The AngularVelocity property is a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) which determines the goal angular velocity a [BodyAngularVelocity](https://developer.roblox.com/en-us/api-reference/class/BodyAngularVelocity) should maintain through the exertion of torque. For this property, the direction of the vector is the axis of rotation. The magnitude is the angular velocity in **radians per second**. By default, this property is `(0, 2, 0)`.

**Tip:** You can multiply a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) by `math.rad(360)`, or **2π**, in order to convert [angular frequency](https://en.wikipedia.org/wiki/Angular_frequency) (rotations per second) into the desired [angular velocity](https://en.wikipedia.org/wiki/Angular_velocity) (radians per second). For example: Setting [AngularVelocity](https://developer.roblox.com/en-us/api-reference/property/BodyAngularVelocity/AngularVelocity) to `Vector3.new(0, 1, 0) * math.rad(360)` ≈ `Vector3.new(0, 6.283, 0)` will cause a part to spin around the Y axis once per second.

To better understand how the axis of rotation is determined from this property, imagine that there is an axle running between the part's position and the part's position plus this property as a global offset. This axle determines in what orientation the object will spin. The length of the axle determines the angular speed in radians per second. In the animation below, the [Part](https://developer.roblox.com/en-us/api-reference/class/Part) contains a [BodyAngularVelocity](https://developer.roblox.com/en-us/api-reference/class/BodyAngularVelocity) and is floating in the air (using a [BodyPosition](https://developer.roblox.com/en-us/api-reference/class/BodyPosition)). The [BodyAngularVelocity](https://developer.roblox.com/en-us/api-reference/class/BodyAngularVelocity) has the default AngularVelocity of `(0, 2, 0)`, and this vector is visualized with a superimposed green line. It represents the axis of rotation. If we were to make the axle longer, like `(0, 4, 0)`, the part would spin faster.

![A floating part with a BodyAngularVelocity whose AngularVelocity is set to the default (0, 2, 0), with a superimposed green line visualizing the AngularVelocity vector](https://developer.roblox.com/assets/bltdf76c0bd99d8cb56/BodyAngularVelocity.gif)

As for the direction of rotation (counterclockwise or clockwise), use a **right-hand rule**: make a thumbs up with your right hand, and point **your thumb** it in the direction of the vector. The direction in which your fingers curl is the direction of the goal angular velocity.