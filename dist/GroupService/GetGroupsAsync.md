**Warning**  

The **IsInClan** property in the returned table will always return **false** and exists for backwards compatibility. The Clans feature was sunset from the Roblox platform in 2016.

This function returns a list of tables containing information on all of the groups a given [Player](https://developer.roblox.com/en-us/api-reference/class/Player) is a member of.

The list returned will include an entry for every group the player is a member of. These entries are tables with the following fields.

Name

Description

### Name

The group's name

### Id

The group ID

### EmblemUrl

An asset url linking to the group's thumbnail (for example: http://www.roblox.com/asset/?id=276165514)

### EmblemId

The assetId of the emblem, the same which is used in the EmblemUrl

### Rank

The rankId the player has (for example: 255 for the owner)

### Role

The name of the player's grouprank (for example: Group Owner)

### IsPrimary

A boolean indicating if this is the player's primary group

IsInClan

A boolean indicating if the player is in this group's clan

Note unlike [GroupService:GetAlliesAsync](https://developer.roblox.com/en-us/api-reference/function/GroupService/GetAlliesAsync) and [GroupService:GetEnemiesAsync](https://developer.roblox.com/en-us/api-reference/function/GroupService/GetEnemiesAsync), GetGroupsAsync returns a table rather than a [StandardPages](https://developer.roblox.com/en-us/api-reference/class/StandardPages) object.