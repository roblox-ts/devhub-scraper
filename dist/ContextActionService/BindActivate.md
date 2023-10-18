Bind an [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) that can be used with a [`Enum.UserInputType`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) to
activate [`ClickDetector`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector) events and [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) objects. When the
given key/button is pressed, it fires the [`Mouse.Button1Down`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Button1Down) event
on the mouse sent to [`Tool.Equipped`](https://create.roblox.com/docs/reference/engine/classes/Tool#Equipped). This in turn fires the
[`Tool.Activated`](https://create.roblox.com/docs/reference/engine/classes/Tool#Activated) event if [`Tool.ManualActivationOnly`](https://create.roblox.com/docs/reference/engine/classes/Tool#ManualActivationOnly) is not
set to true. For gamepad input, this function is called by the default
control scripts in order to bind the ButtonR2 [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode).

Note that the [`Enum.UserInputType`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) specified must be `Keyboard` or
`Gamepad1` through `Gamepad8` in order to be valid.