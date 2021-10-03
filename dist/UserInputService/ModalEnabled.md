**ModalEnabled** property determines whether character controls are hidden on [TouchEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/TouchEnabled) devices. By default, this property is _false_ and controls are visible.

![ModalEnabled = false](https://developer.roblox.com/assets/blt0785000a560d8788/UISModalEnabledFalse.png)

![ModalEnabled = true](https://developer.roblox.com/assets/bltb592006955fd388d/UISModalEnabledTrue.png)

This property will only work when used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) running for the player whose character controls are to be hidden.

Even if mobile controls are hidden for a player on a mobile device, other UserInputService events such as [UserInputService.InputBegan](https://developer.roblox.com/en-us/api-reference/event/UserInputService/InputBegan) and [UserInputService.TouchSwipe](https://developer.roblox.com/en-us/api-reference/event/UserInputService/TouchSwipe) can still be used to process other forms of user input on mobile devices with an enabled touch screen (see the main UserInputService class page for a full list).