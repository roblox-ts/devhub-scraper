**AddEmote** will add an Emote asset to the description given a name and
its asset ID. The asset ID must be for an "Emote" asset (see
[Featured emotes](https://create.roblox.com/docs/https://www.roblox.com/catalog?Category=0&Subcategory=39)
in the Catalog).

You can add multiple emotes of the same name. All emotes of the same name
can be removed using
[`RemoveEmote`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#RemoveEmote). If an emote with
the same ID is added under the same name,
[`EmotesChanged`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#EmotesChanged) fires.

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`GetEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#GetEmotes), which can be used to
retrieve the emotes that have been added by this function
- [`SetEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEmotes) and
[`RemoveEmote`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#RemoveEmote), which also
manipulate what emotes have been added
- [`EmotesChanged`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#EmotesChanged), which fires
after this function is called