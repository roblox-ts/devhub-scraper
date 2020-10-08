**RemoveEmote** removes all emotes from the description that have been [added](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/AddEmote) or [set](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEmotes) under the given name. If there are no added emotes with the given name, no error is thrown and [EmotesChanged](https://developer.roblox.com/en-us/api-reference/event/HumanoidDescription/EmotesChanged) **does not** fire.

See also
--------

*   `articles/HumanoidDescription System`, for more information on HumanoidDescriptions
*   [SetEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEmotes) and [AddEmote](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/AddEmote), which can add emotes that may be removed
*   [GetEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/GetEmotes), which can retrieve a dictionary of emotes that may be removed