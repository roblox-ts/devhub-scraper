This function returns outfit data for the [`Players.LocalPlayer`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer).
This would be used with
[`Players:GetHumanoidDescriptionFromOutfitId()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetHumanoidDescriptionFromOutfitId) to update the players
character to the outfit. Access to this would also depend on
[`AvatarEditorService:PromptAllowInventoryReadAccess()`](https://create.roblox.com/docs/reference/engine/classes/AvatarEditorService#PromptAllowInventoryReadAccess) being
accepted by the user.

The returned table includes the following fields:
```lua
[
    {
      "Id": 0,
      "Name": "string",
      "IsEditable": true
    }
]
```
| Name | type | Description |
| - | - | - |
| id | int |  |
| name | string |  |
| isEditable | boolean |  |