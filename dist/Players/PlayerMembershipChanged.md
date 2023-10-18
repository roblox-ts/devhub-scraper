This event fires when the game server recognizes that a player's
membership has changed. Note, however, that the server will only attempt
to check and update the membership **after** the Premium modal has been
closed. Thus, to account for cases where the user purchases Premium
**outside** of the game while playing, you must still prompt them to
purchase Premium; this will then show a message telling them they're
already upgraded and, once they close the modal, the game server will
update their membership and trigger this event.

To learn more about and incorporating Premium into your experience and
monetizing with the engagement-based payouts system, see
[Engagement-Based Payouts](https://create.roblox.com/docs/production/monetization/engagement-based-payouts).

See also:

- [`MarketplaceService:PromptPremiumPurchase()`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptPremiumPurchase), used to prompt a
user to purchase Premium
- [`MarketplaceService.PromptPremiumPurchaseFinished`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptPremiumPurchaseFinished), fires when the
Premium purchase UI closes