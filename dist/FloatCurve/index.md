An instance representing a 1D float curve encoded via a sorted list of
`Datatype.FloatCurveKey|FloatCurveKeys`.

`Datatype.FloatCurveKey|FloatCurveKeys` are value-time points that represent
the changes in value over time. The changes of a single value over time are
represented by a curve. Animators can edit keys to modify a curve. The shape
of the curve is dictated by the `Enum.KeyInterpolationMode` chosen at each
key.