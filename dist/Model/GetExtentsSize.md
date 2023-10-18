Returns the size of the smallest bounding box that contains all of the
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s in the [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model). If [`Model.PrimaryPart`](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart)
exists then the bounding box will be aligned to that part. If a primary
part has not been set then the function will chose a part in the model to
align the bounding box to. As the selection of this part is not
deterministic it is recommended to set a [`Model.PrimaryPart`](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart) to get
consistent results with this function.

Note this function only returns the size of the smallest bounding box, and
the developer must employ their own method to obtain the position of the
bounding box.