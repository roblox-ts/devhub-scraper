**SetEquippedEmotes** sets the currently equipped emotes given an array of
emote names as they were passed to
[`AddEmote`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#AddEmote) or
[`SetEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEmotes). It can also take an
array of tables similar to that returned by
[`GetEquippedEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#GetEquippedEmotes). Calling
this function fires
[`EquippedEmotesChanged`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#EquippedEmotesChanged).
#### Example
```lua
local hd = Instance.new("HumanoidDescription")
hd:SetEmotes{Salute = {3360689775}, Agree = {4849487550}}
-- Can provide either an array of strings... (index is slot number)
hd:SetEquippedEmotes({"Salute", "Agree"})
-- ...or an array of tables as returned by GetEquippedEmotes (Slot and Name keys set)
hd:SetEquippedEmotes({{Slot = 1, Name = "Salute"}, {Slot = 2, Name = "Agree"}})
```

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`GetEquippedEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#GetEquippedEmotes), which
returns a value describing the equipped emotes set by this function
- [`EquippedEmotesChanged`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#EquippedEmotesChanged),
which fires when this function is called