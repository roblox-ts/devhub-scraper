This function customizes various settings of the in-game bubble chat.

Before using this, make sure that bubble chat is enabled by setting [Chat.BubbleChatEnabled](https://developer.roblox.com/en-us/api-reference/property/Chat/BubbleChatEnabled) to true.

The settings argument is a table where the keys are the names of the settings you want to edit and the values are what you want to change these settings to. Note that you don't have to include all of them in the settings argument, omitting some will result in them keeping their default value.

This function is client-side only, attempting to call it on the server will trigger an error.

See also
--------

*   Developers who are interested interested in configuring their games' chat system even further should take a look at the `/articles/Lua Chat System|Lua Chat System|Lua Chat System` and `articles/Bubble Chat|Bubble Chat` articles