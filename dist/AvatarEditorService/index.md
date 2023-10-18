AvatarEditorService is a service to support developer Avatar Editors. It
provides methods to modify the player's platform avatar, request information
about a user's inventory, and request information about the catalog.

For more information regarding the Avatar Editor, see
[Avatar Editor Service](https://create.roblox.com/docs/players/avatar-editor).
#### Throttling

The following endpoints on `AvatarEditorService` have experience-level
throttling:

- [`AvatarEditorService.GetItemDetails`](https://create.roblox.com/docs/reference/engine/classes/AvatarEditorService#GetItemDetails)
- [`AvatarEditorService.GetBatchItemDetails`](https://create.roblox.com/docs/reference/engine/classes/AvatarEditorService#GetBatchItemDetails)
- [`AvatarEditorService.GetRecommendedAssets`](https://create.roblox.com/docs/reference/engine/classes/AvatarEditorService#GetRecommendedAssets)
- [`AvatarEditorService.GetRecommendedBundles`](https://create.roblox.com/docs/reference/engine/classes/AvatarEditorService#GetRecommendedBundles)
- [`AvatarEditorService.SearchCatalog`](https://create.roblox.com/docs/reference/engine/classes/AvatarEditorService#SearchCatalog)
- [`AvatarEditorService.PromptSetFavorite`](https://create.roblox.com/docs/reference/engine/classes/AvatarEditorService#PromptSetFavorite)
- [`AvatarEditorService.GetFavorite`](https://create.roblox.com/docs/reference/engine/classes/AvatarEditorService#GetFavorite)

For each experience, this throttling allows you to send up to 100 requests per
second to these `AvatarEditorService` endpoints, regardless of the number of
servers or user count. Exceeding these limits returns a
`429 Too Many Requests` error.

If you find that your experience requires an adjustment to this throttling,
you can submit a
[feature request](https://create.roblox.com/docs/https://devforum.roblox.com/t/how-to-post-a-feature-request/37232).