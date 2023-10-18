This function sets the custom [`teleport GUI`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) that will be
shown to the local user during teleportation, prior to the teleport being
invoked.

Note, the [`teleport GUI`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) will not be used if the
destination place is in a different game. It will also not persist across
multiple teleports and will need to be set prior to each one.

This function should only be used on the client. If the teleportation
function is called from the server (as is the case with
[`TeleportService:TeleportAsync()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync)) then this function should be
called on the client prior to this. One way of doing this is listening to
a [`RemoteEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent) that fires several seconds before teleportation.
#### Loading screen

During a teleport, while the destination place is loading, the
*customLoadingScreen* is parented to the [`CoreGui`](https://create.roblox.com/docs/reference/engine/classes/CoreGui). Once the place
has loaded the [`loading screen`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) is
[`parented`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) to *nil*.

This [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) can be fetched at the destination place using
[`TeleportService:GetArrivingTeleportGui()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#GetArrivingTeleportGui), allowing you to parent
it to the [`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui) and perform your own transitions.

You are advised to also [`parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) the
[`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) to the [`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui) in the start place while the
teleport is initiating.
#### Studio Limitation

This service does not work during playtesting in Roblox Studio — To
test aspects of your game using it, you must publish the game and play it
in the Roblox application.