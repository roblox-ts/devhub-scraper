This function searches each [player](https://developer.roblox.com/en-us/api-reference/class/Player) in [Players](https://developer.roblox.com/en-us/api-reference/class/Players) for one whose [Player.UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) matches the given UserId. If such a player does not exist, it simply returns `nil`. It is equivalent to the following function:

```Lua
local Players = game:GetService("Players")
local function getPlayerByUserId(userId)
    for _, player in pairs(Players:GetPlayers()) do
        if player.UserId == userId then
            return player
        end
    end
end
```

This method is useful in finding the purchaser of a developer product using [MarketplaceService.ProcessReceipt](https://developer.roblox.com/en-us/api-reference/property/MarketplaceService/ProcessReceipt), which provides a table that includes the purchaser's UserId and not a reference to the Player object itself. Most games will require a reference to the player in order to grant products.