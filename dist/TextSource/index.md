Represents a speaker in a [`TextChannel`](https://create.roblox.com/docs/reference/engine/classes/TextChannel).

[`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource)s provide details on permissions users have in
[`TextChannel`](https://create.roblox.com/docs/reference/engine/classes/TextChannel)s. There may be multiple [`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource)s for a user if
that user belongs in multiple [`TextChannel`](https://create.roblox.com/docs/reference/engine/classes/TextChannel)s.

Create [`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource)s with [`TextChannel:AddUserAsync()`](https://create.roblox.com/docs/reference/engine/classes/TextChannel#AddUserAsync), which adds
a [`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource) to the [`TextChannel`](https://create.roblox.com/docs/reference/engine/classes/TextChannel) as a descendant.

Remove [`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource)s by calling [`TextSource.Destroy`](https://create.roblox.com/docs/reference/engine/classes/TextSource#Destroy).

Name of a [`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource) is the [`Player.DisplayName`](https://create.roblox.com/docs/reference/engine/classes/Player#DisplayName) of the user
associated with the [`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource) via [`TextSource.UserId`](https://create.roblox.com/docs/reference/engine/classes/TextSource#UserId).

To learn more about using TextSources, see
[In-Experience Text Chat](https://create.roblox.com/docs/chat/customizing-in-experience-text-chat).