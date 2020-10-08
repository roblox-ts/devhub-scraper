The RecentUserHeadCFrame function recenters the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of the user's head to the current location of the VR headset being worn by the user.

This function can be used to ensure that the user's in-game head is positioned according to the location of the user's VR headset.

This is similar to the [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) function, [UserInputService:RecenterUserHeadCFrame](https://developer.roblox.com/en-us/api-reference/function/UserInputService/RecenterUserHeadCFrame).

Since `/VRServiceService` only runs client-side, this function will only work when used in a `/LocalScript`.