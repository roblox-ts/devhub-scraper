A **RopeConstraint** prevents two attachments from separating further than a
defined [`Length`](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint#Length). The attachments can move closer
together than this length and both can freely rotate. This constraint can also
be powered to behave as a motorized winch.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Winch

If a rope's [`WinchEnabled`](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint#WinchEnabled) property is
enabled, it attempts to translate the attachments to a set separation
specified by [`WinchTarget`](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint#WinchTarget), effectively the
target length of the rope in studs. This translation is controlled by
[`WinchSpeed`](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint#WinchSpeed),
[`WinchResponsiveness`](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint#WinchResponsiveness), and
[`WinchForce`](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint#WinchForce).

Note that [`WinchSpeed`](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint#WinchSpeed) must be a **positive**
value, used to either contract or extend the rope length to
[`WinchTarget`](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint#WinchTarget). Setting a negative speed will
revert to 0, not reverse the winch servo direction.