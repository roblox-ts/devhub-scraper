**Note**: This method can only be called from a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) with
[`Enum.RunContext`](https://create.roblox.com/docs/reference/engine/enums/RunContext).

Returns a `Library.table` that contains the subscription status of the
user for the given `subscriptionId`. The table contains the following
keys:
| Key | Type | Description |
| - | - | - |
| `IsSubscribed` | boolean | True if the user's subscription is active. |
| `IsRenewing` | boolean | True if the user is set to renew this subscription after the current subscription period ends. |