**AddEmote** will add an Emote asset to the description given a name and its asset ID. The asset ID must be for an “Emote” asset (see [Featured emotes](https://www.roblox.com/catalog?Category=0&Subcategory=39) in the Catalog).

You can add multiple emotes of the same name. All emotes of the same name can be removed using [RemoveEmote](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/RemoveEmote). If an emote with the same ID is added under the same name, [EmotesChanged](https://developer.roblox.com/en-us/api-reference/event/HumanoidDescription/EmotesChanged) fires.

See also
--------

*   `articles/HumanoidDescription System`, for more information on HumanoidDescriptions
*   [GetEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/RemoveEmote), which can be used to retrieve the emotes that have been added by this function
*   [SetEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEmotes) and [RemoveEmote](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/RemoveEmote), which also manipulate what emotes have been added
*   [EmotesChanged](https://developer.roblox.com/en-us/api-reference/event/HumanoidDescription/EmotesChanged), which fires after this function is called