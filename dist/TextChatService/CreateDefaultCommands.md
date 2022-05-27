Determines whether [TextChatService](https://create.roblox.com/docs/reference/engine/classes/TextChatService) should create default
[TextChatCommand](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand)s.

If true, the following [TextChatCommand](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand)s are created and put in a
[Folder](https://create.roblox.com/docs/reference/engine/classes/Folder) named **TextChatCommands** inside [TextChatService](https://create.roblox.com/docs/reference/engine/classes/TextChatService):

| Name              | PrimaryAlias | SecondaryAlias | Description                                                                                   | Usage Example  |
| :---------------- | :----------- | :------------- | :-------------------------------------------------------------------------------------------- | :------------- |
| RBXConsoleCommand | console      |                | Opens the [Developer Console](https://developer.roblox.com/en-us/articles/Developer-Console). | `\console`     |
| RBXEmoteCommand   | emote        | e              | Plays avatar emote.                                                                           | `\e dance`     |
| RBXHelpCommand    | help         | ?              | Shows a list of chat commands.                                                                | `\help`        |
| RBXMuteCommand    | mute         | m              | Mutes a user by user's `Player.Name` or `Player.DisplayName` in all [TextChannel](https://create.roblox.com/docs/reference/engine/classes/TextChannel)s.           | `\m Username`  |
| RBXUnmuteCommand  | unmute       | um             | Unmutes a user by user's `Player.Name` or `Player.DisplayName` in all [TextChannel](https://create.roblox.com/docs/reference/engine/classes/TextChannel)s.         | `\um Username` |
| RBXVersionCommand | version      | v              | Shows the chat version.                                                                       | `\version`     |

Developers can edit, create, and remove [TextChatCommand](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand)s as even if
`TextChatService.CreateDefaultCommands` is `true`.

Mute and unmute commands apply to all TextChannels.