Adds a [`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource) to the [`TextChannel`](https://create.roblox.com/docs/reference/engine/classes/TextChannel) given userId of the
user (with [`Player.UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId)). Can only be used in a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script).

If a [`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource) representing the user does not exist, this adds a
[`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource).

If a [`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource) representing the user does exist, this returns the
[`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource).

If the user has chat off or isn't in the server, this returns a tuple
`nil`, `false`.