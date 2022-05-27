Determines whether [TextChatService](https://create.roblox.com/docs/reference/engine/classes/TextChatService) should create default [TextChannel](https://create.roblox.com/docs/reference/engine/classes/TextChannel)s.

If true, [Team](https://create.roblox.com/docs/reference/engine/classes/Team) based [TextChannel](https://create.roblox.com/docs/reference/engine/classes/TextChannel)s are automatically created (and
removed when [Team](https://create.roblox.com/docs/reference/engine/classes/Team)s are removed), along with the following [TextChannel](https://create.roblox.com/docs/reference/engine/classes/TextChannel)s
in a [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder) named **TextChannels** inside [TextChatService](https://create.roblox.com/docs/reference/engine/classes/TextChatService):

| Name                       | Description                                                                                                                                                                       |
| :------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RBXGeneral                 | For all messages.                                                                                                                                                                 |
| RBXSystem                  | For system messages.                                                                                                                                                              |
| RBXTeam<`BrickColor.Name`> | For team messages. Name of the [TextChannel](https://create.roblox.com/docs/reference/engine/classes/TextChannel) is the string "RBXTeam" followed by the name of `Team.BrickColor`. (Ex: "RBXTeamNavy blue" for a team with "Navy blue" `BrickColor`) |

If false, [Team](https://create.roblox.com/docs/reference/engine/classes/Team) based [TextChannel](https://create.roblox.com/docs/reference/engine/classes/TextChannel)s are **not** automatically created
and destroyed.

Developers can edit, create, and remove [TextChannel](https://create.roblox.com/docs/reference/engine/classes/TextChannel)s even if
`TextChatService.CreateDefaultTextChannels` is `true`.