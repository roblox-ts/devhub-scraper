**SetEmotes** sets all of the emotes on this description given a table
similar to that returned by
[`GetEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#GetEmotes). It fires
[`EmotesChanged`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#EmotesChanged)
#### Example
```lua
local emotes = {
    Salute = {3360689775}, -- Syntax note: can also use ["Salute"] = ...
    Agree = {4849487550},
    Disagree = {4849495710}
}
local hd = Instance.new("HumanoidDescription")
hd:SetEmotes(emotes)
```

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`AddEmote`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#AddEmote) and
[`RemoveEmote`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#RemoveEmote) which can modify
the added emotes on an individual level
- [`EmotesChanged`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#EmotesChanged), which fires
when this function is called