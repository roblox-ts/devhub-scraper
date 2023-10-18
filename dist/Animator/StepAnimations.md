Increments the [`AnimationTrack.TimePosition`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#TimePosition) of all playing
[`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack)s that are loaded onto the [`Animator`](https://create.roblox.com/docs/reference/engine/classes/Animator),
applying the offsets to the model associated with the [`Animator`](https://create.roblox.com/docs/reference/engine/classes/Animator).
For use in the command bar or by plugins only.

The deltaTime paramater determines the number of seconds to increment on
the animation's progress. Typically this function will be called in a loop
to preview the length of an animation (see example).

Note that once animations have stopped playing, the model's joints will
need to be manually reset to their original positions (see example).

This function is used to simulate playback of [`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation)s when the
game isn't running. This allows animations to be previewed without the
consequences of running the game, such as scripts executing. If the
function is called while the game is running, or by [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script)s or
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s, it will return an error.

Developers designing their own custom animation editors are advised to use
this function to preview animations, as it is the method the official
Roblox Animation Editor plugin uses.