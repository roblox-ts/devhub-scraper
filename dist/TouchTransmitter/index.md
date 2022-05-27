An internal object used by networking and replication code to transmit
[BasePart.Touched](https://create.roblox.com/docs/reference/engine/classes/BasePart#Touched) and [BasePart.TouchEnded](https://create.roblox.com/docs/reference/engine/classes/BasePart#TouchEnded) events.

The TouchTransmitter object named 'TouchInterest' is created and parented to a
[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) when the [BasePart.Touched](https://create.roblox.com/docs/reference/engine/classes/BasePart#Touched) or [BasePart.TouchEnded](https://create.roblox.com/docs/reference/engine/classes/BasePart#TouchEnded) events are
listened (connected) to.

Removing the TouchTransmitter will prevent the touched events from working.
The TouchTransmitter object can also be removed exclusively on the client
(when [Workspace.FilteringEnabled](https://create.roblox.com/docs/reference/engine/classes/Workspace#FilteringEnabled) is set to true). This will prevent
collisions from models the client has network ownership of (such as the
player's character) from registering.

Note, in almost all circumstances developers should disconnect the connection
using [RBXScriptConnection.Disconnect](https://create.roblox.com/docs/reference/engine/classes/RBXScriptConnection#Disconnect) method rather than removing the
TouchTransmitter. Otherwise the connection will not be cleaned up which can
cause performance issues over time.