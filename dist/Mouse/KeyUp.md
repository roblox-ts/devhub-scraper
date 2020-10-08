This event is fired when a Key is released, with the passed argument being the key that was released.

Notes
-----

*   Not all keys generate this event. However, you can get around this with a few of the keys, “/” for example, by using the \[\[API:Class/Mouse/KeyUp|KeyUp\]\] event.
*   Some keys generate the same string as other keys.
*   It's possible for the string to be empty (possibly due to “\\0” key code).