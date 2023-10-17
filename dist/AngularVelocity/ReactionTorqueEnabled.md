This property, when enabled, causes the constraint to apply equal and
opposite reaction forces. This is important if the two attached parts can
collide, since without reaction forces collisions can create energy that
would otherwise be disregarded.

When enabled, the reaction forces cause the constraint to act like an
angular motor between the two attachments.

Only meaningful when [`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity#RelativeTo) is set
to `Enum.ActuatorRelativeTo|Attachment1`.