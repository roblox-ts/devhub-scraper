A range denoting a desired start (min) and stop (max) time within the
[`Sound.TimeLength`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimeLength), in seconds.

- 

If PlaybackRegion.Min > 0, the sound begins to play from the
PlaybackRegion.Min time.

- 

If PlaybackRegion.Min < 0, the sound begins to play from 0.

- 

If PlaybackRegion.Max > [`Sound.TimeLength`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimeLength), the sound stops at
[`Sound.TimeLength`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimeLength).

- 

If PlaybackRegion.Max < [`Sound.TimeLength`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimeLength), the sound stops at
*exactly* that time.

- 

If PlaybackRegion.Min == PlaybackRegion.Max, the PlayBackRegion is
inactive.