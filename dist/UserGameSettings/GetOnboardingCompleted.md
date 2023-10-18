Checks whether or not the given onboarding has been completed yet, which
is useful for avoiding showing the onboarding animation again.

If onboardingId is not one of the accepted IDs, an error is thrown.

The onboarding process is one-way. This means that, as a developer, you
can force the onboarding process to completion but cannot reset it.

See also:

- [`UserGameSettings:SetOnboardingCompleted()`](https://create.roblox.com/docs/reference/engine/classes/UserGameSettings#SetOnboardingCompleted), sets onboarding as
completed