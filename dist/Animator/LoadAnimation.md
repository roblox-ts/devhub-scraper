**LoadAnimation** will load the given [`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation) onto an
[`Animator`](https://create.roblox.com/docs/reference/engine/classes/Animator), returning a playable [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack). When called
on Animators within models that the client has network ownership of, ie.
the local player's character or from [`BasePart:SetNetworkOwner()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#SetNetworkOwner),
this function also loads the animation for the server as well.

You should use this function directly instead of the similarly-named
[`Humanoid:LoadAnimation()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#LoadAnimation) and
[`AnimationController:LoadAnimation()`](https://create.roblox.com/docs/reference/engine/classes/AnimationController#LoadAnimation) functions. These are
deprecated proxies of this function which also create an [`Animator`](https://create.roblox.com/docs/reference/engine/classes/Animator)
if one does not exist; this can cause replication issues if you are not
careful. For more information, see this
[announcement post ](https://create.roblox.com/docs/https://devforum.roblox.com/t/deprecating-loadanimation-on-humanoid-and-animationcontroller/857129)
#### Should I load an Animation on the client or server?

In order for AnimationTracks to replicate correctly, it's important to
know when they should be loaded on the client (via a[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript))
or on the server (via a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script)).

If an [`Animator`](https://create.roblox.com/docs/reference/engine/classes/Animator) is a descendant of a Humanoid or
AnimationController in a Player's [`Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) then
animations started on that Player's client will be replicated to the
server and other clients.

If the Animator is not a descendant of a player character, its animations
must be loaded and started on the server to replicate.

The Animator object must be initially created on the server and replicated
to clients for animation replication to work at all. If an Animator is
created locally, then AnimationTracks loaded with that Animator will not
replicate.

Both [`Humanoid:LoadAnimation()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#LoadAnimation) and
[`AnimationController:LoadAnimation()`](https://create.roblox.com/docs/reference/engine/classes/AnimationController#LoadAnimation) will create an Animator if one
does not already exist. When calling LoadAnimation from LocalScripts you
need to be careful to wait for the Animator to replicate from the server
before calling LoadAnimation if you want character animations to
replicate. You can do this with WaitForChild("Animator").