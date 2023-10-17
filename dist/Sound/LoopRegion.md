A range denoting a desired loop-start and loop-end within the Sound's
[`Sound.PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/Sound#PlaybackRegion) in seconds.

- 

If `LoopRegion.Min` > [`PlaybackRegion.Min`](https://create.roblox.com/docs/reference/engine/classes/Sound#PlaybackRegion),
the loop starts from the `LoopRegion.Min`.

- 

If `LoopRegion.Min` < [`PlaybackRegion.Min`](https://create.roblox.com/docs/reference/engine/classes/Sound#PlaybackRegion),
the loop starts from the
[`PlaybackRegion.Min`](https://create.roblox.com/docs/reference/engine/classes/Sound#PlaybackRegion).

- 

If `LoopRegion.Max` > [`PlaybackRegion.Max`](https://create.roblox.com/docs/reference/engine/classes/Sound#PlaybackRegion),
the loop starts at [`PlaybackRegion.Max`](https://create.roblox.com/docs/reference/engine/classes/Sound#PlaybackRegion).

- 

If `LoopRegion.Max` < [`PlaybackRegion.Max`](https://create.roblox.com/docs/reference/engine/classes/Sound#PlaybackRegion),
the loop starts at *exactly* that time.

- 

If `LoopRegion.Min` == `LoopRegion.Max`, the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) uses the
[`Sound.PlaybackRegion`](https://create.roblox.com/docs/reference/engine/classes/Sound#PlaybackRegion) property instead.