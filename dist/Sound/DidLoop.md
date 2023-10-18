Event that fires whenever the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) loops. Returns soundId and
numOfTimesLooped, giving the contentID of the sound and the number of
times looped respectively.

When the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) is stopped the looped counter resets meaning the
next DidLoop event will return 1 for numOfTimesLooped.