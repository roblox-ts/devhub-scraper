This property describes the ID of the place running on the server.

This ID corresponds with the number in the place's URL. For example, the
ID of the place at the following URL is _1818_:

> https://www.roblox.com/games/1818/Classic-Crossroads

The place ID can also be found in the [Asset Manager][1] in Roblox Studio
by right clicking on the place inside of the [Places][2] folder and
selecting 'Copy ID to clipboard'.

When using Roblox Studio, if the place has not been published to Roblox
then the PlaceId will correspond with the template being used.

See also:

- [DataModel.GameId](https://create.roblox.com/docs/reference/engine/classes/DataModel#GameId), which describes the ID of the experience that the
  current place belongs to
- [DataModel.JobId](https://create.roblox.com/docs/reference/engine/classes/DataModel#JobId), which is a unique identifier for the server game
  instance running
- [TeleportService](https://create.roblox.com/docs/reference/engine/classes/TeleportService), which is a service that can be used to transport
  [Players](https://create.roblox.com/docs/reference/engine/classes/Player) between places

[1]: /studio/asset-manager
[2]: /production/publishing/publishing-experiences-and-places