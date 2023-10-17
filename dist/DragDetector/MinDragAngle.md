If this is less than [`MaxDragAngle`](https://create.roblox.com/docs/reference/engine/classes/DragDetector#MaxDragAngle),
translation will be clamped within that range. This is not a constraint;
it merely impedes the drag detector's attempts to generate motion in order
to remain within limits. Only relevant if
[`DragStyle`](https://create.roblox.com/docs/reference/engine/classes/DragDetector#DragStyle) is
`Enum.DragDetectorDragStyle|RotateAxis`.