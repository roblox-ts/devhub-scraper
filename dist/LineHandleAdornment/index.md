For handles to be interactive, they must be parented to a player's PlayerGui
or the CoreGui. The **LineHandleAdornment** is a line that can be adorned to a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart). This line starts at the center of the adornment's
[`HandleAdornment.CFrame`](https://create.roblox.com/docs/reference/engine/classes/HandleAdornment#CFrame) (offset by the adornment's
[`HandleAdornment.SizeRelativeOffset`](https://create.roblox.com/docs/reference/engine/classes/HandleAdornment#SizeRelativeOffset)) and will be oriented along its
CFrame. This adornment can listen to input events and is commonly used to make
dragger tools.