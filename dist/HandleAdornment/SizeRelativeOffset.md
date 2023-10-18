The positional offset of the adornment based on the adornee's
[`BasePart.Size`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size). By default, an adornment draws in the center of its
adornee. By using this property, the position of the adornment can be
shifted relative to the center of the adornee. The units of
**SizeRelativeOffset** are a scale based on the size of the adornee
itself. This scale is such that a value of 1 will move the adornment to
the corresponding edge of the adornee. This property is intended to allow
adornments to easily be moved to the edges of a parts.

For example, if the **SizeRelativeOffset** is set to (0,1,0), the
adornment will be drawn with its center at the exact top of the adornee.
If set to (1,1,1), the adornment will be drawn in the upper corner of the
adornee.