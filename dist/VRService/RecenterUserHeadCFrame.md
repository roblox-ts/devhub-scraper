The RecentUserHeadCFrame function recenters the [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) of the
user's head to the current location of the VR headset being worn by the
user.

This function can be used to ensure that the user's in-game head is
positioned according to the location of the user's VR headset.

This is similar to the [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) function,
[`UserInputService:RecenterUserHeadCFrame()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#RecenterUserHeadCFrame).

Since `VRServiceService` only runs client-side, this function will only
work when used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).