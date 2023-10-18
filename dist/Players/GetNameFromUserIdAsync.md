The GetNameFromUserIdAsync [`Players`](https://create.roblox.com/docs/reference/engine/classes/Players) function will send a query to
the Roblox website asking what the username is of the account with the
given [`UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId).

This method errors if no account exists with the given UserId. If you
aren't certain such an account exists, it's recommended to wrap calls to
this function with `pcall`. In addition, you can manually cache results to
make future calls with the same UserId fast. See the code samples to learn
more.