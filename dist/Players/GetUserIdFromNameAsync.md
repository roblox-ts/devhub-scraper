This function will send a query to the Roblox website asking what the
[`Player.UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) is of the account with the given [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)
name.

This method errors if no account exists with the given username. If you
aren't certain such an account exists, it's recommended to wrap calls to
this function with `pcall`. In addition, you can manually cache results to
quickly make future calls with the same username. See the code samples to
learn more.