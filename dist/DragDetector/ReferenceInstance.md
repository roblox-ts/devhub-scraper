An instance whose `Datatype.CFrame` is the reference frame for the drag
detector. The [`DragFrame`](https://create.roblox.com/docs/reference/engine/classes/DragDetector#DragFrame) is expressed
relative to this `Datatype.CFrame` which may be retrieved via the
[`GetReferenceFrame()`](https://create.roblox.com/docs/reference/engine/classes/DragDetector#GetReferenceFrame) method.

If this instance is a [`PVInstance`](https://create.roblox.com/docs/reference/engine/classes/PVInstance), the reference frame will be its
pivot; if an [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment), then its world `Datatype.CFrame`. If it
is `nil` or neither of the former, the reference frame will be based on
the pivot of the drag detector's parent [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model).