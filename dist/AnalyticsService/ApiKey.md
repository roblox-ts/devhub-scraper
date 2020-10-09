The **ApiKey** property contains the game's PlayFab API key. It must be set and valid in order to use [FireEvent](https://developer.roblox.com/en-us/api-reference/function/AnalyticsService/FireEvent). It can be set by pasting and editing the following line of code into the Command bar:

```lua
game:GetService("AnalyticsService").ApiKey = "API_KEY"
```