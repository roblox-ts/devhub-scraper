This function registers a callback to begin listening to the given topic. The callback is invoked when a topic receives a message. It can be called multiple times for the same topic.

Callback
--------

The callback is invoked with two arguments:

Field

Summary

### Data

Developer supplied payload

### Sent

Unix time in seconds at which the message was sent

It yields until the subscription is properly registered and returns a connection object.

To unsubscribe, call [:Disconnect()](https://developer.roblox.com/en-us/api-reference/datatype/RBXScriptConnection) on the returned object. Once Disconnect() is called, the callback should never be invoked. Killing the script containing the connections also causes the underlying connect to be unsubscribed.

See also
--------

*   [Cross-Server Messaging Guide](https://developer.roblox.com/en-us/articles/cross-server-messaging), explores how to communicate between game servers in greater detail with relevant code samples
*   [MessagingService:PublishAsync](https://developer.roblox.com/en-us/api-reference/function/MessagingService/PublishAsync), sends the provided message to all subscribers to the topic, triggering their registered callbacks to be invoked