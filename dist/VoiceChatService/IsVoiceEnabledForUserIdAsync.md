Returns whether or not the given user has voice enabled. On the client-side, this can only be used to check the voice status of the local player.

This function is not yet implemented server-side.

This function can throw an error if the HTTP call fails.

The following code sample enables a UI layer only for voice enabled players.

local Players = game:GetService(“Players”)
local VoiceChatService = game:GetService(“VoiceChatService”)

local localPlayer = Players.LocalPlayer
local success, enabled = pcall(function()
    return VoiceChatService:IsVoiceEnabledForUserIdAsync(localPlayer.UserId)
end)
if success and enabled then
    localPlayer.PlayerGui.MyVoiceGui.Enabled = true
end