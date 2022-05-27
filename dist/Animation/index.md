An object that references an animation asset (`AnimationId`) which can be
loaded by a [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) or [AnimationController](https://create.roblox.com/docs/reference/engine/classes/AnimationController).

## Load an Animation on the client or server

In order for [AnimationTracks](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) to replicate correctly, it's
important to know when they should be loaded on the client (via
a[LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript)) or on the server (via a [Script](https://create.roblox.com/docs/reference/engine/classes/Script)).

If an [Animator](https://create.roblox.com/docs/reference/engine/classes/Animator) is a descendant of a Humanoid or AnimationController in a
Player's [Character](https://create.roblox.com/docs/reference/engine/classes/Player#Character) then animations started on that Player's
client will be replicated to the server and other clients.

If the Animator is not a descendant of a player character, its animations must
be loaded and started on the server to replicate.

The Animator object must be initially created on the server and replicated to
clients for animation replication to work at all. If an Animator is created
locally, then AnimationTracks loaded with that Animator will not replicate.

Both [Humanoid:LoadAnimation](https://create.roblox.com/docs/reference/engine/classes/Humanoid#LoadAnimation) and [AnimationController:LoadAnimation](https://create.roblox.com/docs/reference/engine/classes/AnimationController#LoadAnimation) will
create an Animator if one does not already exist. When calling LoadAnimation
from LocalScripts you need to be careful to wait for the Animator to replicate
from the server before calling LoadAnimation if you want character animations
to replicate. You can do this with WaitForChild("Animator").

See also:

- [Using the Animation Editor][1], explore this powerful built-in plugin for
  creating custom animations
- [Using Animations in Games][2], learn how to add pre-built and custom
  animations to your game

[1]: /building-and-visuals/animation/animation-editor
[2]: /building-and-visuals/animation/using-animations