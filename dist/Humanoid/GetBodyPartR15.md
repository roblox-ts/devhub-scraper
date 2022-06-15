This function returns what [BodyPartR15](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15) a [Part](https://developer.roblox.com/en-us/api-reference/class/Part) is, or `Enum.BodyPartR15.Unknown` if the part is not an R15 body part. This function allows developers to retrieve player body parts independent of what the actual body part names are, instead returning an Enum.

It can be used in conjunction with [Humanoid:ReplaceBodyPartR15](https://developer.roblox.com/en-us/api-reference/function/Humanoid/ReplaceBodyPartR15). For example, if a [player's](https://developer.roblox.com/en-us/api-reference/class/Player) body part touches something, this function will return get a part instance. Developers can then look up what part of the body that was, like head or arm. Then depending on what that part was, developers can either perform some gameplay action or replace that part with some other part - perhaps showing damage.

This function can be useful for games where hit location is important. For example, it can be used to determine if a player is hit in the leg and then slow them down based on the injury.