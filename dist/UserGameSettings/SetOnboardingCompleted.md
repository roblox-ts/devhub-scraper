Sets the given onboarding as completed, so it won't be shown again to the user the next time they play.

Currently, this function only accepts [DynamicThumbstick](https://developer.roblox.com/articles/String), and it is used to persistently track whether or not the player has finished the tutorial for the Dynamic Thumbstick control scheme. If onboardingId is not one of the accepted IDs, an error is thrown.

The onboarding process is one-way. This means that, as a developer, you can force the onboarding process to completion but cannot reset it.

See also
--------

*   [UserGameSettings:GetOnboardingCompleted](https://developer.roblox.com/en-us/api-reference/function/UserGameSettings/GetOnboardingCompleted), checks if onboarding has been completed