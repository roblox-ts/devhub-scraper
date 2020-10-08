The TouchpadModeChanged event fires if the [VRTouchpadMode](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpadMode) of a [VRTouchpad](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpad) is changed. This event indicates the VRTouchpad that changes, and its new state.

You can use this event to track the states of VRTouchpads connected via the user's client.

This `/VRService` event can be used alongside `/UserInputService` service events and functions.

Since the event fires locally, it can only be used in a `/LocalScript`.