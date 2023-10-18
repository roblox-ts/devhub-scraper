This function moves the specified part to the specified location via
[inverse kinematics](https://create.roblox.com/docs/https://en.wikipedia.org/wiki/Inverse_kinematics)
rather than moving it there directly, to ensure any joints,
[`constraints`](https://create.roblox.com/docs/reference/engine/classes/Constraint), or collisions that part is participating
in remain physically satisfied. Currently this function is only available
in Studio to [`plugins`](https://create.roblox.com/docs/reference/engine/classes/Plugin), as it currently conflicts with the
physics of a running game.

**Translate stiffness** is a number between 0 and 1 specifying how
agressively to match the part's position to the position part of the
target CFrame. **Rotate stiffness** is a number between 0 and 1 specifying
how agresively to match the part's rotation to to the rotation part of the
target CFrame.

For example:

- If translate stiffness and rotate stiffness are both equal to 1, then
the part will be moved exactly to the target CFrame regardless of what
physical constraints there are on it.
- If translate stiffness and rotate stiffness are both equal to 0.5, then
the part will try to move to exactly the target CFrame, but may be
pushed out of the way by physical constraints on it.
- If translate stiffness and rotate stiffness are both equal to 0, then
the target CFrame will be ignored and physical constraints will be
solved for the object at the position where it was.