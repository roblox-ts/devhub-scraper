This class holds a sorted list of `RotationCurveKey`s that represent a
sequence of rotations. The shape of the interpolation curve between two
RotationCurveKeys is determined by the RotationCurveKey interpolation type.
RotationCurve provides a sampling method `GetValueAtTime` returning its result
as the rotation component of a CFrame.