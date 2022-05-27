The ResizeableFaces property (with an **e**, not ResizableFaces) describes
using a Faces object the different faces on which a part may be resized.
For most implementations of [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart), such as [Part](https://create.roblox.com/docs/reference/engine/classes/Part) and [WedgePart](https://create.roblox.com/docs/reference/engine/classes/WedgePart),
this property includes all faces. However, [TrussPart](https://create.roblox.com/docs/reference/engine/classes/TrussPart) will set its
ResizeableFaces set to only two faces since those kinds of parts must have
two [BasePart.Size](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size) dimensions of length 2. This property is most commonly
used with tools used for building and manipulating parts and has little
use outside of that context. The [Handles](https://create.roblox.com/docs/reference/engine/classes/Handles) class, which has the
[Handles.Faces](https://create.roblox.com/docs/reference/engine/classes/Handles#Faces) property, can be used in conjunction with this property to
display only the handles on faces that can be resized on a part.