**EmotesChanged** fires when emotes are [added](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/AddEmote), [removed](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/RemoveEmote) or [set](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEmotes) on the description. The event fires with the new emote table as returned by [GetEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/GetEmotes).

If [AddEmote](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/AddEmote) is called with the same name and ID as an existing emote, this event fires.

See also
--------

*   `articles/HumanoidDescription System`, for more information on HumanoidDescriptions
*   [AddEmote](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/AddEmote), [RemoveEmote](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/RemoveEmote) and [HumanoidDescription:SetEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEmotes), which can cause this event to be fired