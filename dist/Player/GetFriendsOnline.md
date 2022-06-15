This function returns a dictionary array of online friends, limited by the `maxFriends` value.

In the returned array, some fields are only present for certain location types. For example, **PlaceId** won't be present when **LocationType** is 0 (Mobile Website).

Name

Type

Description

**VisitorId**

number

The [Player.UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) of the friend.

**UserName**

string

The username of the friend.

**DisplayName**

string

The [display name](https://developer.roblox.com/en-us/api-reference/property/Player/DisplayName) of the friend.

**LastOnline**

string

When the friend was last online.

**IsOnline**

boolean

If the friend is currently online.

**LastLocation**

string

The name of the friend's current location.

**PlaceId**

number

The place ID of the friend's last location.

**GameId**

string

The [DataModel.JobId](https://developer.roblox.com/en-us/api-reference/property/DataModel/JobId) of the friend's last location.

**LocationType**

number

The location type of the friend's last location:

**0**

Mobile Website

**1**

Mobile InGame

**2**

Webpage

**3**

Studio

**4**

InGame

**5**

Xbox

**6**

Team Create