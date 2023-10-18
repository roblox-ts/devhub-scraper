The [`Kick()`](https://create.roblox.com/docs/reference/engine/classes/Player#Kick) method allows an experience to gracefully
disconnect a client and optionally provide a message to the disconnected
user. This is useful for moderating abusive users. You should only allow
specific users whom you trust to trigger this method on other users.

Calling this method on a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) with no arguments disconnects the
user from the server and provides a default notice message. Calling this
method on a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) along with a string as the first argument
replaces the default message with the provided string.

When using this method from a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript), only the local user's
client can be kicked.