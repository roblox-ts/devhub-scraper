This function triggers an event used to track player progression through the game.

For example, it should be called when a player starts an in-game tutorial and again that player finishes the tutorial. Another example (see below) includes tracking when a player gains experience, collects objects, and levels up.

Limits of events
----------------

Each game server is allowed a certain number of standard events API calls based on the number of players present (more players means more events will be needed).  
The events that exceed the limit will be dropped and log an error to the developer console.

*   Per minute limit: 120 + numPlayers \* 20, all events shared this limit.
*   Cooldown: refresh every 10 seconds

Limits of parameters
--------------------

Limit the size of parameters. The event that exceeds the limit will be dropped and log an error to the developer console.

Parameters

Maximum Number of Characters

FirePlayerProgressionEvent location

5 pairs of Key and Value, each Key and Value are 50

FirePlayerProgressionEvent statistics

5 pairs of Key and Value, each Key and Value are 50

customData Variant

500 after serialized

other string types

50

See also
--------

*   [AnalyticsService:FireInGameEconomyEvent](https://developer.roblox.com/en-us/api-reference/function/AnalyticsService/FireInGameEconomyEvent), triggers an event used to track player actions pertaining to the in-game economy
*   [AnalyticsService:FireLogEvent](https://developer.roblox.com/en-us/api-reference/function/AnalyticsService/FireLogEvent), triggers an event used to track errors and warnings experienced by players
*   [AnalyticsService:FireCustomEvent](https://developer.roblox.com/en-us/api-reference/function/AnalyticsService/FireCustomEvent), triggers an event used to emit a custom event