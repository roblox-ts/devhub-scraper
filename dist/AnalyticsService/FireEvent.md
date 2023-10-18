**FireEvent** reports a custom event to PlayFab. The event is reported
using a **category** and **value**, where the category is a string and the
value can be a string or table. In order to use PlayFab, you must have a
valid [`ApiKey`](https://create.roblox.com/docs/reference/engine/classes/AnalyticsService#ApiKey) set.
#### Possible Errors

- **"AnalyticsService can only be executed by game server."** – Tracking
can only be done on the server through a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or
[`ModuleScript`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) required by a script. See
[`RunService:IsServer()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsServer).
- **"The ApiKey is invalid."** – The
[`ApiKey`](https://create.roblox.com/docs/reference/engine/classes/AnalyticsService#ApiKey) has been set, but it's invalid.
Check that it is set to the correct value.
- **"AnalyticsService can only accept valid UTF-8 characters."** – Thrown
when the value can't be serialized as UTF-8 characters. This can happen
if you pass a value which has unicode characters, like emojis.
- **"AnalyticsService failed in parse event value. Error: ..."** – Thrown
when there is an issue when serializing the provided value into a
string.
- **"AnalyticsService: , " and \r\n are not allowed in category."** – The
comma `,`, the double quote `"`, and newline characters `\r\n` cannot be
used in the **category** parameter.
- **"AnalyticsService: The event value you fired is too long."** – Thrown
if the **value** parameter was too long after serialization. The length
limit is 1 KB, or 1024 bytes.