This function attempts to award the user with the specified [Player.UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) the specified number of points.

If successful, this function will return the UserId of the user the points were awarded to, the number of points awarded, the new total number of points the user has in the game and another value which appears to always be 0.

This function will cause an error if the specified UserId is not positive or if the number of points specified is 0.

The function can be used to award a negative number of points to a user however.

```Lua
local userId, amount, total = game:GetService("PointsService"):AwardPoints(1, 5)
print("The user was awarded " ..amount.. " points. They have now have a total of " ..total.. " points in this game.")
```