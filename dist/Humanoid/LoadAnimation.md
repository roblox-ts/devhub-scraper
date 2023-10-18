This function loads an [`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation) onto a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid),
returning an [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) that can be used for playback.

The following code can be used to load an [`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation) onto a
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid).
```lua
local animationTrack = humanoid:LoadAnimation(animation)
animationTrack:Play()
```
#### Should I load an Animation on the client or server?

If the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is controlled by a particular client, as is the
case with [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) [`Characters`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) then
[`Animations`](https://create.roblox.com/docs/reference/engine/classes/Animation) should be loaded and played from that client.

If the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) belongs to a NPC (Non Player Character) which the
server has [network ownership](https://create.roblox.com/docs/physics/network-ownership) of
then the [`Animations`](https://create.roblox.com/docs/reference/engine/classes/Animation) should be loaded and played from the
server.

Although generally it is not advisable to do so, these rules can be
bypassed using the [`Animator`](https://create.roblox.com/docs/reference/engine/classes/Animator) object.