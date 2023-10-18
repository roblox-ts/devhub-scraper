This function returns the number of data store requests that the current
place can make based on the given [`Enum.DataStoreRequestType`](https://create.roblox.com/docs/reference/engine/enums/DataStoreRequestType). Any
requests made that exceed this budget are subject to throttling.
Monitoring and adjusting the frequency of data store requests using this
function is recommended.