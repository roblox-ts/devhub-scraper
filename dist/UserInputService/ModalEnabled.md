**ModalEnabled** property determines whether character controls are hidden
on [`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) devices. By default,
this property is `false` and controls are visible.

![ModalEnabled = false](https://prod.docsiteassets.roblox.com/assets/legacy/UISModalEnabledFalse.png)

![ModalEnabled = true](https://prod.docsiteassets.roblox.com/assets/legacy/UISModalEnabledTrue.png)

This property will only work when used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) running
for the player whose character controls are to be hidden.

Even if mobile controls are hidden for a player on a mobile device, other
UserInputService events such as [`UserInputService.InputBegan`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputBegan) and
[`UserInputService.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchSwipe) can still be used to process other
forms of user input on mobile devices with an enabled touch screen (see
the main UserInputService class page for a full list).