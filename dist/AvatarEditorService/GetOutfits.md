This function returns outfit data for the [Players.LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer). This would be used with [Players:GetHumanoidDescriptionFromOutfitId](https://developer.roblox.com/en-us/api-reference/function/Players/GetHumanoidDescriptionFromOutfitId) to update the players character to the outfit. Access to this would also depend on [AvatarEditorService:PromptAllowInventoryReadAccess](https://developer.roblox.com/en-us/api-reference/function/AvatarEditorService/PromptAllowInventoryReadAccess) being accepted by the user.

The returned table includes the following fields:

\[
    {
      "Id": 0,
      "Name": "string",
      "IsEditable": true
    }
\]

Name

type

Description

id

int

name

string

isEditable

boolean