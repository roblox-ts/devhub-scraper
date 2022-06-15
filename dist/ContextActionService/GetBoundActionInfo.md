GetBoundActionInfo returns a table with the following keys describing a bound action given its name. To get the same information for all actions at once, use [GetAllBoundActionInfo](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/GetAllBoundActionInfo).

Name

Type

Description

`stackOrder`

number

Describes the index of the action on the stack (increasing)

`priorityLevel`\*

number

Describes the [priority](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/BindActionAtPriority) level of the action

`createTouchButton`

bool

Describes whether a touch button should be created on [TouchEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/TouchEnabled) devices

`inputTypes`

table

The input types passed to [BindAction](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/BindAction) for which this action will trigger

`description`†

string

The description of action set by [SetDescription](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/SetDescription)

`title`†

string

The title of the action set by [SetTitle](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/SetTitle)

`image`†

string

The image of the action's touch button set by [SetImage](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/SetImage)

\*Priority level will still be included even if [BindActionAtPriority](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/BindActionAtPriority) wasn't used - by default it will be 2000.  
†Indicates that this field will be `nil` if the associated method was not called for the given action.