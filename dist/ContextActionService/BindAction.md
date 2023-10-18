Bind an action to user input given an action handling function. Upon a
matching input being performed, the action handler function will be called
with the arguments listed below. Valid input enum items include those
within the following: [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode), [`Enum.UserInputType`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) or
[`Enum.PlayerActions`](https://create.roblox.com/docs/reference/engine/enums/PlayerActions) . Call this function when a player **enters the
context** in which an action can be performed. When the player leaves the
context, call [`UnbindAction`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#UnbindAction)
with the same `actionName`. You can manually call the action handling
function of an action by using
[`CallFunction`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#CallFunction).

The code sample below shows how a [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) can be
[`played`](https://create.roblox.com/docs/reference/engine/classes/Sound#Play) while a key (H), game pad button,
or touch screen button is pressed.
```lua
local ContextActionService = game:GetService("ContextActionService")

-- A car horn sound
local honkSound = Instance.new("Sound", workspace)
honkSound.Looped = true
honkSound.SoundId = "rbxassetid://9120386436"

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
#### Action Handler Parameters

The action handler functions are called with the following parameters:
| # | Type | Description |
| 1 | `string` | The same string that was originally passed to BindAction† |
| 2 | [`Enum.UserInputState`](https://create.roblox.com/docs/reference/engine/enums/UserInputState) | The state of the input (Begin, Change, End or Cancel)* |
| 3 | `InputObject` | An object that contains information about the input (varies based on UserInputType) |

† This allows one function to handle multiple actions at once, if
necessary. *Cancel is sent if some input was in-progress and another
action bound over the in-progress input, or if the in-progress bound
action was [`unbound`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#UnbindAction).
#### Action Bindings Stack

Action bindings behave like a stack: if two actions are bound to the same
user input, the **most recently bound** action handler will be used. If an
action handler returns [`Enum.ContextActionResult`](https://create.roblox.com/docs/reference/engine/enums/ContextActionResult), the next most
recently bound action handler will be called, and so on until a handler
sinks the input (by returning `nil` or [`Enum.ContextActionResult`](https://create.roblox.com/docs/reference/engine/enums/ContextActionResult)).
When [`UnbindAction`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#UnbindAction) is called,
the action handler is removed from the stack. This stack behavior can be
overridden using
[`BindActionAtPriority`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindActionAtPriority),
where an additional priority parameter after `createTouchButton` may
override the order in which actions are bound (higher before lower).
#### Touch Buttons

In addition to input types, this function's third parameter controls
whether a button is created for
[`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) devices. Upon the first
touch button's creation, a [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) named "ContextActionGui" is
added to the [`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui). Inside the ScreenGui is a [`Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame)
called "ContextButtonFrame" is added. It is in this frame in which
[`ImageButtons`](https://create.roblox.com/docs/reference/engine/classes/ImageButton) for bound actions are parented; you can
use [`GetButton`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetButton) to retrieve such
buttons for customization.