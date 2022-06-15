Fires when the user prompts an increase or decrease in graphics quality using the hotkeys.

This event fires under the following conditions:

*   If the user presses F10, this event fires with a _betterQuality_ argument of _true_
*   If the user presses Shift + F10, this event fires with a _betterQuality_ argument of _false_

GraphicsQualityChangeRequest does not provide the current graphics quality level or cover all updates to the graphics quality. For example, changes made in the core GUI escape menu are not registered. This event is intended to be used by Roblox [Core Scripts](https://developer.roblox.com/en-us/api-reference/class/CoreScript) to update the graphics quality and display notifications.

You can retrieve a user's [SavedQualitySetting](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting) using [UserGameSettings](https://developer.roblox.com/en-us/api-reference/class/UserGameSettings) with the following snippet:

UserSettings():GetService("UserGameSettings").SavedQualityLevel

If the user's graphics settings are set to automatic then the [SavedQualitySetting](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting) will be _'Automatic'_. There is currently no way for developers to reliably get the current graphics quality level of a user's machine.