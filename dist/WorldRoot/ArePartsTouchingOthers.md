**ArePartsTouchingOthers** returns true if at least one of the given
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) are touching any other parts. Two parts are considered
"touching" if they are within the distance threshold, `overlapIgnored`.

If no parts are provided, false is returned.