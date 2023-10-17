A range, in seconds, denoting a desired loop start and loop end within the
[`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) of this
[`AudioPlayer`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer).

If the [`LoopRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#LoopRegion) minimum is **greater**
than the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) minimum, the
loop starts from the [`LoopRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#LoopRegion) minimum.

If the [`LoopRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#LoopRegion) minimum is **less** than
the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) minimum, the loop
starts from the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) minimum.

If the [`LoopRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#LoopRegion) maximum is **greater**
than the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) maximum, the
loop ends at the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion)
maximum.

If the [`LoopRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#LoopRegion) maximum is **less** than
the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) maximum, the loop
ends at exactly the [`LoopRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#LoopRegion) maximum.

If the [`LoopRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#LoopRegion) minimum **equals** the
[`LoopRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#LoopRegion) maximum, the [`AudioPlayer`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer)
uses the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) property
instead.