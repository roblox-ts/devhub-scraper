BindAction will bind an action to user input given an action handling function. Upon a matching input being performed, the action handler function will be called with the arguments listed below. Valid input enum items include those within the following: [KeyCode](https://developer.roblox.com/en-us/api-reference/enum/KeyCode), [UserInputType](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) or [PlayerAction](https://developer.roblox.com/en-us/api-reference/enum/PlayerAction) . Call this function when a player **enters the context** in which an action can be performed. When the player leaves the context, call [UnbindAction](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/UnbindAction) with the same `actionName`. You can manually call the action handling function of an action by using [CallFunction](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/CallFunction).

The code sample below shows how a [Sound](https://developer.roblox.com/en-us/api-reference/class/Sound) can be [played](https://developer.roblox.com/en-us/api-reference/function/Sound/Play) while a key (H), game pad button, or touch screen button is pressed.

```Lua
local ContextActionService = game:GetService("ContextActionService")

-- A car horn sound
local honkSound = Instance.new("Sound", workspace)
honkSound.Looped = true
honkSound.SoundId = "rbxassetid://3017580236"

local function handleAction(actionName, inputState, inputObject)
    if actionName == "HonkHorn" then
        if inputState == Enum.UserInputState.Begin then
            honkSound:Play()
        else
            honkSound:Pause()
        end
    end
end

-- When the player sits in the vehicle:
ContextActionService:BindAction("HonkHorn", handleAction, true, Enum.KeyCode.H, Enum.KeyCode.ButtonY)

-- When the player gets out:
ContextActionService:UnbindAction("HonkHorn")
```

Action Handler Parameters
-------------------------

The action handler functions are called with the following parameters:

#

Type

Description

1

`lua-docs/string`

The same string that was originally passed to BindAction†

2

[UserInputState](https://developer.roblox.com/en-us/api-reference/enum/UserInputState)

The state of the input (Begin, Change, End or Cancel)\*

3

[InputObject](https://developer.roblox.com/en-us/api-reference/class/InputObject)

An object that contains information about the input (varies based on UserInputType)

†This allows one function to handle multiple actions at once, if necessary.
\*Cancel is sent if some input was in-progress and another action bound over the in-progress input, or if the in-progress bound action was [unbound](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/UnbindAction).

Action Bindings Stack
---------------------

Action bindings behave like a stack: if two actions are bound to the same user input, the **most recently bound** action handler will be used. If an action handler returns `Enum.ContextActionResult.Pass`, the next most recently bound action handler will be called, and so on until a handler sinks the input (by returning `nil` or `Enum.ContextActionResult.Sink`). When [UnbindAction](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/UnbindAction) is called, the action handler is removed from the stack. This stack behavior can be overridden using [BindActionAtPriority](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/BindActionAtPriority), where an additional priority parameter after `createTouchButton` may override the order in which actions are bound (higher before lower).

Touch Buttons
-------------

In addition to input types, this function's third parameter controls whether a button is created for [TouchEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/TouchEnabled) devices. Upon the first touch button's creation, a [ScreenGui](https://developer.roblox.com/en-us/api-reference/class/ScreenGui) named “ContextActionGui” is added to the [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui). Inside the ScreenGui is a [Frame](https://developer.roblox.com/en-us/api-reference/class/Frame) called “ContextButtonFrame” is added. It is in this frame in which [ImageButtons](https://developer.roblox.com/en-us/api-reference/class/ImageButton) for bound actions are parented; you can use [GetButton](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/GetButton) to retrieve such buttons for customization.