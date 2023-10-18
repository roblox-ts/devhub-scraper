This method is used to bind a Luau callback to a message with the
specified topic. When a message is sent (using `Actor/SendMessage`) to the
topic specified the provided callback will be called in a *serial*
execution context.

Multiple Luau callbacks may be bound to a single actor and even to a
single message topic.

Note: Only the scripts which are descendants of an Actor may bind to its
messages.
```lua
local actor = script:GetActor()

-- Print out a message when a greeting message is sent to the Actor
-- this script is a descendant of.
local connection = actor:BindToMessage("Greeting", function(message)
  print("Received Greeting Message:", message)
end)
```