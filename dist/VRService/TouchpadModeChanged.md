The TouchpadModeChanged event fires if the [`Enum.VRTouchpadMode`](https://create.roblox.com/docs/reference/engine/enums/VRTouchpadMode) of a
[`Enum.VRTouchpad`](https://create.roblox.com/docs/reference/engine/enums/VRTouchpad) is changed. This event indicates the VRTouchpad that
changes, and its new state.

You can use this event to track the states of VRTouchpads connected via
the user's client.

This [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService) event can be used alongside
[`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) service events and functions.

Since the event fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).