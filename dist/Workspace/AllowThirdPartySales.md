This [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace) property determines whether assets created by other uses
can be sold in the game.

#### What are third party sales?

When this value is false, as it is by default, only assets created by the
place creator (be it a player or a group) and Roblox can be sold using
[MarketplaceService](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService).

In most cases, games do not need to sell third party assets. However, some
games such as trade hangouts require this feature and therefore it exists
as an opt-in option.

#### What third party products can I sell?

Note, [developer products](/production/monetization/developer-products can
only be sold in the game they are associated with, regardless of what
AllowThirdPartySales is set to. This property affects
[Game Passes](/production/monetization/game-passes) and
[clothing](/avatar/accessories/classic-clothing).