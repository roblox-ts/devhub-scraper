The SetSuperSafeChat [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) function sets whether or not the
player sees chat filtered by [`TextService`](https://create.roblox.com/docs/reference/engine/classes/TextService)'s
[`TextService:FilterStringAsync()`](https://create.roblox.com/docs/reference/engine/classes/TextService#FilterStringAsync) rather than normal chats.

SuperSafeChat is a chat mode where players cannot see unfiltered messages.

For example, entering the following command in the command prompt would
enable SuperSafeChat for the player named polarpanda16, as long as that
player is in the game:

![Command prompt example enabling SuperSafeChat](https://prod.docsiteassets.roblox.com/assets/legacy/Screen_Shot_2018-07-28_at_9.46.09_PM.png)

Regardless of whether a player has SuperSafeChat enabled, all chat should
be filtered by TextService when broadcasted to other players or on the
player's own screen. [`TextService:FilterStringAsync()`](https://create.roblox.com/docs/reference/engine/classes/TextService#FilterStringAsync) returns a
[`TextFilterResult`](https://create.roblox.com/docs/reference/engine/classes/TextFilterResult) object that can be filtered differently according
to the message's intended use.