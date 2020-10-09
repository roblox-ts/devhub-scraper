A 24 hour string representation of the current time of day used by [Lighting](https://developer.roblox.com/en-us/api-reference/class/Lighting).

Note, this property does not correspond with the actual time of day and will not change during the game unless it has been changed by a script.

For a numeric measure of [Lighting](https://developer.roblox.com/en-us/api-reference/class/Lighting)'s time use [Lighting.ClockTime](https://developer.roblox.com/en-us/api-reference/property/Lighting/ClockTime). Changing [Lighting.ClockTime](https://developer.roblox.com/en-us/api-reference/property/Lighting/ClockTime) or using [Lighting:SetMinutesAfterMidnight](https://developer.roblox.com/en-us/api-reference/function/Lighting/SetMinutesAfterMidnight) will also change this property.

Using TimeOfDay requires the time to be normalized and a string formatted:

```lua
minutesAfterMidnight = 0
while true do
    minutesAfterMidnight = minutesAfterMidnight + 1

    local minutesNormalised = minutesAfterMidnight % (60 * 24)
    local seconds = minutesNormalised * 60
    local hours = string.format("%02.f", math.floor(seconds/3600))
    local mins = string.format("%02.f", math.floor(seconds/60 - (hours*60)))
    local secs = string.format("%02.f", math.floor(seconds - hours*3600 - mins *60))
    local timeString = hours..":"..mins..":"..secs

    Lighting.TimeOfDay = timeString

    wait()
end
```

Using [Lighting.ClockTime](https://developer.roblox.com/en-us/api-reference/property/Lighting/ClockTime) requires the time to be normalized:

```lua
minutesAfterMidnight = 0
while true do
    minutesAfterMidnight = minutesAfterMidnight + 1

    local minutesNormalised = minutesAfterMidnight % (60 * 24)
    local hours = minutesNormalised / 60

    Lighting.ClockTime = hours

    wait()
end
```

Using [Lighting:SetMinutesAfterMidnight](https://developer.roblox.com/en-us/api-reference/function/Lighting/SetMinutesAfterMidnight) requires no extra processing:

```lua
minutesAfterMidnight = 0
while true do
    minutesAfterMidnight = minutesAfterMidnight + 1

    Lighting:SetMinutesAfterMidnight(minutesAfterMidnight)

    wait()
end
```