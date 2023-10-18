**Warning:** You should only use this function if you are sure that part
movement is a bottleneck in your code, simply setting the CFrame property
of the individual parts / welded models you want to move will be fast
enough in the vast majority of cases.

This function moves a table of parts to the location specified in a table
of [`CFrames`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame). This makes it a very fast way to move large
numbers of parts, as you don't have to pay the cost of separate property
sets for each individual part.

The third argument of BulkMoveTo allows you to further speed up movement
of the parts by specifying the [`Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position) and
[`Orientation`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Orientation). Changed events should not be
fired on the parts. If you specify FireCFrameChanged as the BulkMoveMode
then only CFrame.Changed be fire, rather than changed firing for Position,
Orientation, and CFrame like it normally does.