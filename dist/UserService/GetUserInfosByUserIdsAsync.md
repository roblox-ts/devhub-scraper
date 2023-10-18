This function enables developers to request information about users
outside of the current [`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel) in bulk, which is why both the
input and output values are arrays.

- The order of the user info objects in the return value's array may not
match the order of the [`UserIds`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) sent in the input
parameter's array. Use the `Id` field of the user info object to
identify your input array with the output array.
- It's possible to receive fewer user info objects than requested if one
or more of the [`UserIds`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) in the request array are
invalid, such as negative numbers or user IDs that don't have accounts
associated with them. It's possible to receive a response with zero
results if all [`UserIds`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) are invalid.
- If a Roblox user does not have a [`DisplayName`](https://create.roblox.com/docs/reference/engine/classes/Player#DisplayName)
associated with their account, this function will instead return the
same string as the user's username in their info object's `DisplayName`
field. While a user's [`UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) will never change,
they may change their username or display name, so the same input
[`UserIds`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) may return a different string for these
fields from one day to another.
- Since
[`GetUserInfosByUserIdsAsync()`](https://create.roblox.com/docs/reference/engine/classes/UserService#GetUserInfosByUserIdsAsync)
makes an external web request, it will yield and may fail if the backend
service is experiencing interruptions. Ensure you can handle downtime
appropriately by wrapping this method with a
`Global.LuaGlobals.pcall()`.

The signature of a singular user info object is:
| Key | Type | Description |
| - | - | - |
| `Id` | number | The
  [`UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) associated with the user. |
| `Username` | string | The username associated with the user. |
| `DisplayName` | string | The
  [`DisplayName`](https://create.roblox.com/docs/reference/engine/classes/Player#DisplayName) associated with the
  user. |
| `HasVerifiedBadge` | boolean | The
  [`HasVerifiedBadge`](https://create.roblox.com/docs/reference/engine/classes/Player#HasVerifiedBadge) value
  associated with the user. |