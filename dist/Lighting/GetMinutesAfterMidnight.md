Returns the number of minutes that have passed after midnight for the
purposes of lighting.

This number will be nearly identical to [`Lighting.ClockTime`](https://create.roblox.com/docs/reference/engine/classes/Lighting#ClockTime)
multiplied by 60.

This number will not always be equal to the value given in
[`Lighting:SetMinutesAfterMidnight()`](https://create.roblox.com/docs/reference/engine/classes/Lighting#SetMinutesAfterMidnight) as it returns minutes after
midnight in the current day.

For [`Lighting`](https://create.roblox.com/docs/reference/engine/classes/Lighting)s time formatted as a string, see
[`Lighting.TimeOfDay`](https://create.roblox.com/docs/reference/engine/classes/Lighting#TimeOfDay).