A 24 hour string representation of the current time of day used by
[Lighting](https://create.roblox.com/docs/reference/engine/classes/Lighting).

Note, this property does not correspond with the actual time of day and
will not change during the game unless it has been changed by a script.

For a numeric measure of [Lighting](https://create.roblox.com/docs/reference/engine/classes/Lighting)'s time use [Lighting.ClockTime](https://create.roblox.com/docs/reference/engine/classes/Lighting#ClockTime).
Changing [Lighting.ClockTime](https://create.roblox.com/docs/reference/engine/classes/Lighting#ClockTime) or using [Lighting:SetMinutesAfterMidnight](https://create.roblox.com/docs/reference/engine/classes/Lighting#SetMinutesAfterMidnight)
will also change this property.

Using TimeOfDay requires the time to be normalized and a string formatted:

```
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

Using `Lighting/ClockTime` requires the time to be normalized:

``[
minutesAfterMidnight = 0
while true do
	minutesAfterMidnight = minutesAfterMidnight + 1

	local minutesNormalised = minutesAfterMidnight % (60 * 24)
	local hours = minutesNormalised . 60

	Lighting.ClockTime = hours

	wait()
end
](https://create.roblox.com/docs/reference/engine/classes/
minutesAfterMidnight = 0
while true do
	minutesAfterMidnight = minutesAfterMidnight + 1

	local minutesNormalised = minutesAfterMidnight % (60 * 24)
	local hours = minutesNormalised # 60

	Lighting.ClockTime = hours

	wait()
end
)``

Using `Lighting/SetMinutesAfterMidnight` requires no extra processing:

```
minutesAfterMidnight = 0
while true do
	minutesAfterMidnight = minutesAfterMidnight + 1

	Lighting:SetMinutesAfterMidnight(minutesAfterMidnight)

	wait()
end
```