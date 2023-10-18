[`CanSendGameInviteAsync()`](https://create.roblox.com/docs/reference/engine/classes/SocialService#CanSendGameInviteAsync)
returns `true` if the given [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) can invite other players to the
current experience. You should always use the result of this function
before calling [`PromptGameInvite()`](https://create.roblox.com/docs/reference/engine/classes/SocialService#PromptGameInvite)
since the ability to invite players may vary depending on the platform or
player.

See
[Player Invite Prompts](https://create.roblox.com/docs/production/promotion/invite-prompts)
for more details on implementing player invite prompts, customizing
prompts and notifications, and using launch data.