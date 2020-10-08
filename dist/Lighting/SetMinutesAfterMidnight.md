Sets [Lighting.TimeOfDay](https://developer.roblox.com/en-us/api-reference/property/Lighting/TimeOfDay) and [Lighting.ClockTime](https://developer.roblox.com/en-us/api-reference/property/Lighting/ClockTime) to the given number of minutes after midnight.

How can I make a day / night script?
------------------------------------

SetMinutesAfterMidnight allows a numerical value to be used, for example in a day/night cycle [Script](https://developer.roblox.com/en-us/api-reference/class/Script), without the need to convert to a string in the format required by [Lighting.TimeOfDay](https://developer.roblox.com/en-us/api-reference/property/Lighting/TimeOfDay). It also allows values greater than 24 hours to be given that correspond to times in the next day. See the code snippets below for an example.

Using [Lighting.TimeOfDay](https://developer.roblox.com/en-us/api-reference/property/Lighting/TimeOfDay) requires the time to be normalized and a string formatted:

```Lua
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

```Lua
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

```Lua
minutesAfterMidnight = 0
while true do
	minutesAfterMidnight = minutesAfterMidnight + 1

	Lighting:SetMinutesAfterMidnight(minutesAfterMidnight)

	wait()
end
```