This property determines whether a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) functions without a
handle.

A tool has a handle when it contains a child part named **Handle**. Tools
with handles typically require the player equipping them to hold an object
to use them, for instance weapons. Tools without handles typically don't
require the player equipping them to hold anything to use them, for
instance "fly" or "summon" tools.

When set to `true`, the tool will function only with a handle. When set to
`false`, the tool will function even without a handle.