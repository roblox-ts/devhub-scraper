**ModalEnabled** property determines whether character controls are hidden
on [TouchEnabled](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) devices. By default, this
property is _false_ and controls are visible.

![ModalEnabled = false][1]

![ModalEnabled = true][2]

This property will only work when used in a [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) running for the
player whose character controls are to be hidden.

Even if mobile controls are hidden for a player on a mobile device, other
UserInputService events such as [UserInputService.InputBegan](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputBegan) and
[UserInputService.TouchSwipe](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchSwipe) can still be used to process other forms of
user input on mobile devices with an enabled touch screen (see the main
UserInputService class page for a full list).

[1]: https://prod.docsiteassets.roblox.com/assets/blt0785000a560d8788/UISModalEnabledFalse.png
[2]: https://prod.docsiteassets.roblox.com/assets/bltb592006955fd388d/UISModalEnabledTrue.png