This event is fired when any script calls the [BindableEvent:Fire](https://developer.roblox.com/en-us/api-reference/function/BindableEvent/Fire) method is called, using the same arguments as parameters.

Limitations
-----------

### Parameters

If a Table is passed as an argument to a [BindableEvent](https://developer.roblox.com/en-us/api-reference/class/BindableEvent) it must be an array without missing entries or have string keys, not a mixture, or else the string keys will be lost.