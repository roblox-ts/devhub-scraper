Returns a table of all parts that are physically interacting with this
part. If the part itself has CanCollide set to false, then this function
returns an empty table unless the part has a
[`TouchInterest`](https://create.roblox.com/docs/reference/engine/classes/TouchTransmitter) object parented to it (meaning
something is connected to its Touched event). Parts that are adjacent but
not intersecting are not considered touching. This function predates the
[`WorldRoot:GetPartsInPart()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartsInPart) function, which provides more
flexibility and avoids the special [`TouchInterest`](https://create.roblox.com/docs/reference/engine/classes/TouchTransmitter)
rules described above. Use [`WorldRoot:GetPartsInPart()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartsInPart) instead.