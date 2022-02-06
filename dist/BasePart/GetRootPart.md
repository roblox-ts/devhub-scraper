Returns the base part of an assembly (a collection of parts connected together). When moving an assembly of parts using a [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame). it is important to move this base part (this will move all other parts connected to it accordingly).

Every Assembly has a root part. When a [JointInstance's](https://developer.roblox.com/en-us/api-reference/class/JointInstance) C0/C1 is modified the root part will stay where it was.

How the root part is determined
-------------------------------

The root part is picked based on the surface area of the largest face of a part's object aligned bounding box (defined by Size). A Humanoid's `HumanoidRootPart` has a 10x multiplier and a [Seat](https://developer.roblox.com/en-us/api-reference/class/Seat) has a 20x multiplier. All else being equal it will sort based on the replicated internal ID of the part. Root selection is deterministic and has to be because we rely on it for physics replication, but externally it's effectively random. Basically it's impossible for you to determine which part will be root ahead of time.

Caution
-------

You should avoid relying on a particular part being root and generally try to write code that works agnostic of this. For example: the newer [WeldConstraint](https://developer.roblox.com/en-us/api-reference/class/WeldConstraint) avoids this by forcing you to position the two parts correctly how you want relative to each other, and just locks that relative orientation in as soon as it is enabled. It doesn't matter which part is root. You move the parts how you want to and we make sure it stays that way.

You should avoid relying on specifics of this implementation where possible.