A EulerRotation Curve represents a 3D rotation curve, it groups 3
[FloatCurves](https://create.roblox.com/docs/reference/engine/classes/FloatCurve), stored as 3 FloatCurve child instances. The rotation
is decomposed in 3 Euler angles channels that can be accessed via
[EulerRotationCurve:X](https://create.roblox.com/docs/reference/engine/classes/EulerRotationCurve#X), [EulerRotationCurve:Y](https://create.roblox.com/docs/reference/engine/classes/EulerRotationCurve#Y), [EulerRotationCurve:Z](https://create.roblox.com/docs/reference/engine/classes/EulerRotationCurve#Z)
methods. The 3 axes can be sampled simultaneously via the method
[EulerRotationCurve:GetAnglesAtTime](https://create.roblox.com/docs/reference/engine/classes/EulerRotationCurve#GetAnglesAtTime) returning the 3 Euler angles as a
Vector3. Similarly, [EulerRotationCurve:GetRotationAtTime](https://create.roblox.com/docs/reference/engine/classes/EulerRotationCurve#GetRotationAtTime) samples all
channels simultaneously but returns a CFrame rotated by X, Y, and Z according
to the specified rotation order.