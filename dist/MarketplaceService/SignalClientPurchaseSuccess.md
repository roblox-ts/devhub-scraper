Invoked by the client when the user agrees to make a purchase, and has submitted a POST request to Roblox's web server server to process the transaction.

The _ticket_ parameter should be the response ticket the client received from the server when it submitted the request to process the transaction.

This method fires the [MarketplaceService.ClientPurchaseSuccess](https://developer.roblox.com/en-us/api-reference/event/MarketplaceService/ClientPurchaseSuccess) event on the server.