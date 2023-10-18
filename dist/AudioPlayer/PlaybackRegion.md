Range in seconds denoting a desired start time (minimum) and stop time
(maximum) within the [`TimeLength`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#TimeLength).

If the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) minimum is
**greater** than 0, the sound begins playing from the
[`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) minimum time.

If the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) minimum is
**less** than 0, the sound begins playing from 0.

If the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) maximum is
**greater** than the [`TimeLength`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#TimeLength), the sound
stops at [`TimeLength`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#TimeLength).

If the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) maximum is
**less** than the [`TimeLength`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#TimeLength), the sound
stops at exactly the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion)
maximum.

If the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) minimum
**equals** the [`PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer#PlaybackRegion) maximum,
the sound plays in its entirety.