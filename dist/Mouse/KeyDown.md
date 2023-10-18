This event fires when a Key is pressed, with the passed argument being the
key that was pressed.

Note:

- Not all keys generate this event. However, you can get around this with
a few of the keys, "/" for example, by using the [`Mouse.KeyUp`](https://create.roblox.com/docs/reference/engine/classes/Mouse#KeyUp)
event.
- Some keys generate the same string as other keys.
- It's possible for the string to be empty (possibly due to "\0" key
code).