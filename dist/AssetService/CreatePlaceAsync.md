Clones a place with placeId equal to given templatePlaceId. The clone
place displays within the inventory of the place's creator with the given
name and description. This method returns the placeId of the new place,
which you can use with TeleportService. The template place must have
template copying enabled through place settings. You cannot use this
method to clone places that you don't own.

Frequent use of this API isn't recommended, particularly if the created
places contain scripts, as updating the code in a large volume of places
quickly becomes infeasible. For user-generated worlds, consider
serializing user creations and saving them in [`DataStore`](https://create.roblox.com/docs/reference/engine/classes/DataStore)s instead.