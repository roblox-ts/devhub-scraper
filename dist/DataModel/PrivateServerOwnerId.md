This property describes the [UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) of the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) that owns the `Articles/Creating a VIP Server on Roblox|VIP server` if the server is a VIP server.

If the server is a standard or reserved server then this property will be set to _0_.

This property could be used to identify if a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) is the owner of the VIP server, for example:

local Players = game:GetService("Players")

-- is this a VIP server?
if game.PrivateServerId ~= "" and game.PrivateServerOwnerId ~= 0 then

    -- listen for new players being added
    Players.PlayerAdded:Connect(function(player)

        -- check if the player is the server owner
        if player.UserId == game.PrivateServerOwnerId then
            print("The private server owned has joined the game")
        end
    end)
end

See also
--------

*   [DataModel.PrivateServerId](https://developer.roblox.com/en-us/api-reference/property/DataModel/PrivateServerId), a property describing the unique ID of VIP and `TeleportService/ReserveServer|reserved servers`