The GetChatForUserAsync function returns the text in a properly filtered manner for the specified [Player.UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId). This should be used in the context of chats between players, although there are some other cases where text filtering is required.

This function returns the string appropriate for sending and displaying to a target user (specified by _toUserId_) from the original sender using the least restrictive filtering appropriate for the target user, with [Chat](https://developer.roblox.com/en-us/api-reference/class/Chat) privacy settings of both users enforced. This string should only be shown to the target user, as it might not be appropriate for all users.

This method throws an error if the two users are not allowed to chat (that is, if [Chat:CanUserChatAsync](https://developer.roblox.com/en-us/api-reference/function/Chat/CanUserChatAsync) would return false for the given sender and receiver). If this method throws the string should not be displayed to the user. In addition, this function will throw an error if CanUserChatAsync would return false, so CanUserChatAsync should be called first to check.

This function currently throws an error if the user with the id _toUserId_ is not online on the current server.

If text can be used for real-time or near real-time communication it should use this method.

This function will return immediately in most cases. The only time it will yield is if the target user is offline or has just joined the server and their filtering info is not yet loaded.