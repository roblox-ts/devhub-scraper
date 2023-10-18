Immediately removes the default Roblox loading screen. Note if any object
has been placed in [`ReplicatedFirst`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedFirst), the default loading screen
will remove after 5 seconds regardless if this function has been called or
not.

Developers should run this function from a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) in
[`ReplicatedFirst`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedFirst), as scripts in [`ReplicatedFirst`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedFirst) will
execute before anything else.

It is advised to not remove the default loading screen unless the
developer wishes to display their own loading screen as an alternative. If
the default screen is removed without replacement users will be able to
see geometry loading in the background.