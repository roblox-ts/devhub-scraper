InvokeChatCallback will call a function registered by
[`RegisterChatCallback`](https://create.roblox.com/docs/reference/engine/classes/Chat#RegisterChatCallback), given the
ChatCallbackType enum and the arguments to send the function. It will
return the result of the registered function, or raise an error if no
function has been registered.

This function is called by the Lua Chat System so that chat callbacks may
be registered to change the behavior of certain features. Unless you are
replacing the default Lua Chat System with your own, you should not need
to call this function. You can read about the different callback functions
at [`Chat:RegisterChatCallback()`](https://create.roblox.com/docs/reference/engine/classes/Chat#RegisterChatCallback).