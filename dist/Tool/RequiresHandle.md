The RequiresTool property determines whether a [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool) functions without a handle.

A tool has a handle when it has a child part named “Handle”. Tools without handles are typically ones that do not require the player equipping them to hold anything to use them. For instance, handles may not be necessary for _fly_ or _build_ tools. Tools with handles are typically ones that require the player equipping them to hold an object to use them. For instance, handle are likely necessary for weapons such as guns and swords.

When set to true, the tool will function and be [activated](https://developer.roblox.com/en-us/api-reference/event/Tool/Activated) and [deactivated](https://developer.roblox.com/en-us/api-reference/event/Tool/Deactivated) without a handle.

When set to false, the tool will not function without a handle.