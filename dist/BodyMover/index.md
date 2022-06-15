BodyMover is the abstract base class for the set of legacy objects that exert forces to [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s in different ways. In general, the subclasses of BodyMover can be placed into one of two categories based on the type of force(s) they exert:

Translational Force
-------------------

*   [BodyForce](https://developer.roblox.com/en-us/api-reference/class/BodyForce): Exert a force relative to world coordinates
*   [BodyPosition](https://developer.roblox.com/en-us/api-reference/class/BodyPosition): Exert force to maintain a certain world position
*   [BodyVelocity](https://developer.roblox.com/en-us/api-reference/class/BodyVelocity): Exert force to maintain a certain velocity

Rotational Force (Torque)
-------------------------

*   [BodyThrust](https://developer.roblox.com/en-us/api-reference/class/BodyThrust): Exert a force relative to object coordinates, which applies torque if positioned in a certain way
*   [BodyGyro](https://developer.roblox.com/en-us/api-reference/class/BodyGyro): Exert torque to maintain a certain orientation
*   [BodyAngularVelocity](https://developer.roblox.com/en-us/api-reference/class/BodyAngularVelocity): Exert torque to maintain a certain angular velocity

An exception is the [RocketPropulsion](https://developer.roblox.com/en-us/api-reference/class/RocketPropulsion) class, which exerts **both** translational and rotational forces to cause a part to track down another part.