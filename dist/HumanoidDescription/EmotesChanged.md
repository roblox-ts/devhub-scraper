**EmotesChanged** fires when emotes are
[`added`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#AddEmote),
[`removed`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#RemoveEmote) or
[`set`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEmotes) on the description. The event
fires with the new emote table as returned by
[`GetEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#GetEmotes).

If [`AddEmote`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#AddEmote) is called with the same
name and ID as an existing emote, this event fires.

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`AddEmote`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#AddEmote),
[`RemoveEmote`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#RemoveEmote) and
[`HumanoidDescription:SetEmotes()`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEmotes), which can cause this event to
be fired