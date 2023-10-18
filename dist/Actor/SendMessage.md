Sends a message to an Actor. Messages are sent asynchronously, so the
sender will not block or yield when calling the `Actor/SendMessage`
method.

Since a single Actor may receive different kinds of messages, a `topic`
parameter is used to distinguish between various kinds of messages.

See `Actor/BindToMessage` for details on receiving a message sent using
`Actor/SendMessage`.
```lua
-- Assume `actor` is a local variable referring to an Actor instance
actor:SendMessage("Greeting", "Hello World")
```