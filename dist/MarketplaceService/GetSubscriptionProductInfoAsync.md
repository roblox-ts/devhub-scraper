Returns the product information of a subscription for the given
`subscriptionId`.
| Key | Type | Description |
| - | - | - |
| `Name` | string | The name of the subscription product. |
| `Description` | string | The description of the subscription product. |
| `IconImageAssetId` | number | The asset ID of the subscription product icon. |
| `SubscriptionPeriod` | [`Enum.SubscriptionPeriod`](https://create.roblox.com/docs/reference/engine/enums/SubscriptionPeriod) | The duration of the subscription (for example, `Month`, `Year`, etc.). |
| `DisplayPrice` | string | Localized price with the appropriate currency symbol for display (for example, `$4.99`). |
| `DisplaySubscriptionPeriod` | number | Localized subscription period text for display (for example, `/month`). Can be used together with `DisplayPrice`. |
| `SubscriptionProviderName` | string | Name of the subscription benefit provider (for example, the name of the associated experience). |
| `IsForSale` | boolean | True if the subscription product is available for sale. |
| `PriceTier` | number | A number that can be used to compare the price of different subscription products. This is not the actual price of the subscription (for example, 499). |