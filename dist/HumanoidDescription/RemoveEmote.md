**RemoveEmote** removes all emotes from the description that have been
[`added`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#AddEmote) or
[`set`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEmotes) under the given name. If there
are no added emotes with the given name, no error is thrown and
[`EmotesChanged`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#EmotesChanged) **does not** fire.

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`SetEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEmotes) and
[`AddEmote`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#AddEmote), which can add emotes
that may be removed
- [`GetEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#GetEmotes), which can retrieve a
dictionary of emotes that may be removed