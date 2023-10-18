This method allows developers to disable the built-in notification when a
players gameplay is paused. They can then add in their own UI if they wish
to customize it.

Developers can query whether the notification is enabled by calling the
[`GuiService:GetGameplayPausedNotificationEnabled()`](https://create.roblox.com/docs/reference/engine/classes/GuiService#GetGameplayPausedNotificationEnabled) function.

See also:

- [`Workspace.StreamingIntegrityMode`](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingIntegrityMode) and
[`Enum.StreamingIntegrityMode`](https://create.roblox.com/docs/reference/engine/enums/StreamingIntegrityMode) for more details on when gameplay is
paused.