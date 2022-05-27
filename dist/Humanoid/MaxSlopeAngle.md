This property determines the maximum slope angle that a humanoid can
climb. If the angle of a slope is greater than a humanoid's MaxSlopeAngle,
they will slide down the slope.

When a character spawns, this property is set according to the value of
[StarterPlayer.CharacterMaxSlopeAngle](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#CharacterMaxSlopeAngle).

The value of this property is constrained to values between 0° and 89°. It
defaults to 89°, so humanoids can climb pretty much any slope they want by
default.