This function triggers a custom event with a custom event name data.
#### Limits of events

Each game server is allowed a certain number of standard events API calls
based on the number of players present (more players means more events
will be needed). The events that exceed the limit will be dropped and log
an error to the developer console. - Per minute limit: 120 + numPlayers *
20, all events shared this limit. - Cooldown: refresh every 10 seconds
#### Limits of parameters

Limit the size of parameters. The event that exceeds the limit will be
dropped and log an error to the developer console.
| Parameters | Maximum Number of Characters |
| - | - |
| customData Variant | 500 after serialized |
| other string types | 50 |

See also:

- [`AnalyticsService:FirePlayerProgressionEvent()`](https://create.roblox.com/docs/reference/engine/classes/AnalyticsService#FirePlayerProgressionEvent), triggers an event
used to track player progression through the game
- [`AnalyticsService:FireInGameEconomyEvent()`](https://create.roblox.com/docs/reference/engine/classes/AnalyticsService#FireInGameEconomyEvent), triggers an event
used to track player actions pertaining to the in-game economy
- [`AnalyticsService:FireLogEvent()`](https://create.roblox.com/docs/reference/engine/classes/AnalyticsService#FireLogEvent), triggers an event used to track
errors and warnings experienced by players