The GetFriends [Players](https://developer.roblox.com/en-us/api-reference/class/Players) function returns a [FriendPages](https://developer.roblox.com/en-us/api-reference/class/FriendPages) object which contains information for all of the given [Player's](https://developer.roblox.com/en-us/api-reference/class/Player) friends. The items within the FriendPages object are tables with the following fields:

Name

Type

Description

Id

int64

The friend's UserId

Username

string

The friend's username

DisplayName

string

The [display name](https://developer.roblox.com/en-us/api-reference/property/Player/DisplayName) of the friend.

IsOnline

bool

If the friend is currently online

See the code samples for an easy way to iterate over all a player's friends.