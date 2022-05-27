An Accoutrement welds its child [part](https://create.roblox.com/docs/reference/engine/classes/Part) called "Handle" to the player's
character. You can change the position and rotation of the Handle part using
the [AttachmentPos](https://create.roblox.com/docs/reference/engine/classes/Accoutrement#AttachmentPos),
[Right](https://create.roblox.com/docs/reference/engine/classes/Accoutrement#AttachmentRight),
[Forward](https://create.roblox.com/docs/reference/engine/classes/Accoutrement#AttachmentForward), and [Up](https://create.roblox.com/docs/reference/engine/classes/Accoutrement#AttachmentUp)
properties.

Parts descending from an accoutrement are massless when attach to other parts
(e.g. with a Weld) as long as they are not the root part of the assembly that
[GetRootPart()](https://create.roblox.com/docs/reference/engine/classes/BasePart#GetRootPart) returns. [GetMass()](https://create.roblox.com/docs/reference/engine/classes/BasePart#GetMass)
returns 0 for parts in this case, and it doesn't add to the total mass or
rotational inertia of the Assembly.

This doesn't apply to a part descending from an accoutrement when an
accoutrement welds to another part that is massless or one if its parts
otherwise becomes root. This also doesn't apply for the root part, and it has
mass like a normal part.