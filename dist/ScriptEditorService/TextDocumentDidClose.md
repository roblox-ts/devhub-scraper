Fires just before a [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) object is destroyed, which
happens right after the script editor closes. After this event fires, the
[`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) enters a "Closed" state, and trying to call its
methods throws an error. [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) objects aren't reusable,
even if the script editor reopens the same script.