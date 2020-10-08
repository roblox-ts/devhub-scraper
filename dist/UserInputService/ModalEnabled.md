The ModalEnabled property toggles whether Roblox's mobile controls are hidden on a player's mobile device. The default value of this property is _false_. The controls are hidden when set to _true_, and not hidden when set to _false_. See the images below for examples.

![ModalEnabled = false](https://developer.roblox.com/assets/blt0785000a560d8788/UISModalEnabledFalse.png)

![ModalEnabled = true](https://developer.roblox.com/assets/bltb592006955fd388d/UISModalEnabledTrue.png)

This property can be used when you want to hide or display Roblox's mobile controls for a player.

Even if mobile controls are hidden for a player on a mobile device, other UserInputService events such as [UserInputService.InputBegan](https://developer.roblox.com/en-us/api-reference/event/UserInputService/InputBegan) and [UserInputService.TouchSwipe](https://developer.roblox.com/en-us/api-reference/event/UserInputService/TouchSwipe) can still be used to process other forms of user input on mobile devices with an enabled touch screen (see the main UserInputService class page for a full list).

Since [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) only runs client-side, this property will only work when used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

##See Also  
The tutorial on disabling parts of the game interface, found [here](https://www.robloxdev.com/articles/Disabling-Parts-of-Game-Interface), provides excellent documentation on using this property.