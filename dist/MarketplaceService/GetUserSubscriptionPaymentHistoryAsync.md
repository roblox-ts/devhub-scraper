**Note**: This method can only be called from a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) with
[`Enum.RunContext`](https://create.roblox.com/docs/reference/engine/enums/RunContext).

Returns an `Library.table|Array` that contains up to one year of the
user's subscription payment history for the given `subscriptionId`, sorted
from the most recent status to the least recent.

Each entry in the payment history `Library.table|Array` contains the
following keys:
| Key | Type | Description |
| - | - | - |
| `CycleStartTime` | [`DateTime`](https://create.roblox.com/docs/reference/engine/datatypes/DateTime) | [`DateTime`](https://create.roblox.com/docs/reference/engine/datatypes/DateTime) at the start of this particular subscription period. |
| `CycleEndTime` | [`DateTime`](https://create.roblox.com/docs/reference/engine/datatypes/DateTime) | [`DateTime`](https://create.roblox.com/docs/reference/engine/datatypes/DateTime) at the end of this particular subscription period. |
| `PaymentStatus` | [`Enum.SubscriptionPaymentStatus`](https://create.roblox.com/docs/reference/engine/enums/SubscriptionPaymentStatus) | [`Enum.SubscriptionPaymentStatus`](https://create.roblox.com/docs/reference/engine/enums/SubscriptionPaymentStatus) if the user paid for this particular subscription period. 
    [`Enum.SubscriptionPaymentStatus`](https://create.roblox.com/docs/reference/engine/enums/SubscriptionPaymentStatus) if the user refunded this particular subscription period. |

#### Payment History Length

Only creators affiliated with the subscription product can access up to
**one year** worth of the user's subscription payment history.
Non-associated creators can only get the user's **current** subscription
payment status or an empty `Library.table|Array` if the user has no active
subscription.
#### Grace Period

User payments for subscriptions can have some processing time. Payment
history doesn't return a table for this period. However, in order to
preserve a user's subscription experience during the processing period,
[`GetUserSubscriptionStatusAsync()`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#GetUserSubscriptionStatusAsync())
returns `IsSubscribed: true` for the given user. Don't grant consumable or
currency type subscription benefits to the user until after payment has
been confirmed.

For example, on August 31, 2023, User A's Subscription B is up for
renewal. On September 1, 2023, the payment has yet to be processed. If you
call
[`GetUserSubscriptionPaymentHistoryAsync()`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#GetUserSubscriptionPaymentHistoryAsync())
on September 1, 2023 on User A for Subscription B, the first entry of the
return value is:
| Key | Value |
| - | - |
| `CycleStartTime` | ... |
| `CycleEndTime` | August 31, 2023 |
| `PaymentStatus` | [`Enum.SubscriptionPaymentStatus`](https://create.roblox.com/docs/reference/engine/enums/SubscriptionPaymentStatus) |

At the same time,
[`GetUserSubscriptionStatusAsync`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#GetUserSubscriptionStatusAsync())
returns the following result until the renewal payment process fails or
the user cancels:
| Key | Return |
| - | - |
| `IsSubscribed` | True |
| `IsRenewing` | True |