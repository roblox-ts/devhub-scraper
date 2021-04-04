An object that allows events defined in one server-side [Script](https://developer.roblox.com/en-us/api-reference/class/Script) to be subscribed to by another script for one-way communication.

BindableEvents do not allow for communication between the server and client. If you are looking for this functionality use [RemoteEvent](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent).

BindableEvents vs BindableFunctions
-----------------------------------

Unlike BindableEvents, [BindableFunctions](https://developer.roblox.com/en-us/api-reference/class/BindableFunction) allow for two-way communication between two scripts:

*   When a script fires a BindableEvent it does not yield for a return. The script continues executing as the event is handled by the subscribed script asynchronously.
*   When a script invokes a BindableFunction, however, that script yields until the event is handled and returned by the subscribed script synchronously. This allows for scripts to effectively pass data during and after an event.

BindableEvents vs RemoteEvents
------------------------------

While BindableEvents allow for one-way communication server-server scripts or client-client [LocalScripts](https://developer.roblox.com/en-us/api-reference/class/LocalScript), [RemoteEvents](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent) allow for one-way communicate the server and client. For more information on RemoteEvents, read the `articles/Remote-Functions-and-Events|Remote Functions and Events` article.

Limitations
-----------

### Subscription

An event can only be subscribed to by one other script at a time. When a second script subscribes to an already subscribed event, the first script will be unsubscribed.

### Parameters

If a Table is passed as an argument to a BindableEvent it must be an array without missing entries or have string keys, not a mixture, or else the string keys will be lost.