Returns a boolean value indicating that player's verification status. When
true, the player is verified. Verification includes, but isn't limited to,
non-VOIP phone number or government ID verification.

When implementing `IsVerified`, exercise caution to ensure that the
implementation does not inadvertently block all unverified users.

Note that the method can only be called on the backend server. Calling it
client-side results in an error. Additionally, this method will always
return `false` in Studio.