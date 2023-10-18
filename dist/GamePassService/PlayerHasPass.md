This function will not work with new game passes, use
[`MarketplaceService:UserOwnsGamePassAsync()`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#UserOwnsGamePassAsync) instead.

This function returns *true* if the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) has the specified
legacy game pass.

The result of this function may be cached, meaning it should not be relied
on to give an up to date result.

For more information about game passes, please see [this article][1].
#### Legacy Game Passes

Historically, game passes on Roblox had an *Asset ID* associated with
them. Although game passes created with an *Asset ID* still have an *Asset
ID*, they now also have a *Game Pass ID*. All new game passes created
today **only** have a *Game Pass ID*.

You can retrieve the *Game Pass ID* of any pass through its URL, for
example the *Game Pass ID* of the below pass is 1:
```lua
https://www.roblox.com/game-pass/1/myGamePass
```

Whether you are using an *Asset ID* or a *Game Pass ID* determines which
API members you can use.
|  | Works with Asset ID (Legacy) | Works with Game Pass ID (Current) |
| - | - | - |
| Verify Ownership | `Class.GamePassService:PlayerHasPass()` | `Class.MarketplaceService:UserOwnsGamePassAsync()` |
| Prompt a purchase | `Class.MarketplaceService:PromptPurchase()` | `Class.MarketplaceService:PromptGamePassPurchase()` |
| Prompted purchase finished | `Class.MarketplaceService.PromptPurchaseFinished` | `Class.MarketplaceService.PromptGamePassPurchaseFinished` |

API members that work with *Asset IDs* **will not** work with new game
passes as they do not have them.