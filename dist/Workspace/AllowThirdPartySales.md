This [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) property determines whether assets created by other uses can be sold in the game.

What are third party sales?
---------------------------

When this value is false, as it is by default, only assets created by the place creator (be it a player or a group) and Roblox can be sold using [MarketplaceService](https://developer.roblox.com/en-us/api-reference/class/MarketplaceService).

In most cases, games do not need to sell third party assets. However, some games such as trade hangouts require this feature and therefore it exists as an opt-in option.

What third party products can I sell?
-------------------------------------

Note, [developer products](https://developer.roblox.com/en-us/articles/developer-products-–-in-game-purchases) can only be sold in the game they are associated with, regardless of what AllowThirdPartySales is set to. This property will function for [game passes](https://developer.roblox.com/en-us/articles/game-passes-–-abilities-and-bonuses) and [clothing](https://developer.roblox.com/en-us/articles/how-to-make-shirts-and-pants-for-roblox-characters) however.