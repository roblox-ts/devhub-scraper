Returns true if the specified user feature is enabled. This will throw an
error if the user feature does not exist.

This function checks against a list of FFlags, whose name starts with
"User". The function is intended to be used by Roblox-created scripts, and
functions similarly to [`GlobalSettings:GetFFlag()`](https://create.roblox.com/docs/reference/engine/classes/GlobalSettings#GetFFlag).