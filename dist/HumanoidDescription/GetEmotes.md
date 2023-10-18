**GetEmotes** returns a dictionary of emotes that have been
[`added`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#AddEmote) or
[`set`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEmotes) to this description. The keys
of this dictionary are the names of the emotes, and the values are a
non-empty array of emote IDs for that name.
#### Example
```lua
local hd = Instance.new("HumanoidDescription")
hd:AddEmote("Salute", 3360689775)
local emotes = hd:GetEmotes()
for name, ids in pairs(emotes) do
    print(("The emote %s has %d ids:"):format(name, #ids))
    for _, id in pairs(ids) do
        print(id)
    end
end
```

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`SetEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEmotes) and
[`AddEmote`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#AddEmote), which can add emotes
that may be returned by this function
- [`EmotesChanged`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#EmotesChanged), which fires
with the value returned this function after it may have changed