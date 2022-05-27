HealthDisplayType controls when a [Humanoid's](https://create.roblox.com/docs/reference/engine/classes/Humanoid) health bar is
allowed to be displayed.

By default, this property is set to **DisplayWhenDamaged**, which makes
the health bar only display when a humanoid's [Humanoid.Health](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Health) is less
than its [Humanoid.MaxHealth](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MaxHealth). It can also be set to **AlwaysOn**, which
makes the health bar always display, or **AlwaysOff**, which prevents it
from ever displaying.

This property functions independently of the humanoid's
[Humanoid.HealthDisplayDistance](https://create.roblox.com/docs/reference/engine/classes/Humanoid#HealthDisplayDistance) property, which is responsible for making
the health bar fade out at certain distances. If the HealthDisplayType is
set to AlwaysOn, it will still fade out depending the how the
[Humanoid.HealthDisplayDistance](https://create.roblox.com/docs/reference/engine/classes/Humanoid#HealthDisplayDistance) is configured.