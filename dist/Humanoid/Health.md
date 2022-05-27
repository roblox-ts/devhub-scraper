**Health** is a property that represents the current health of the
[Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid). The value is restricted to the range [0,
[Humanoid.MaxHealth](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MaxHealth)]. If the Humanoid is dead, Health is continually set
to 0.

#### Dealing Damage

The [TakeDamage](https://create.roblox.com/docs/reference/engine/classes/Humanoid#TakeDamage) function should be used to subtract
from Health. If a Humanoid has a [ForceField](https://create.roblox.com/docs/reference/engine/classes/ForceField) as a sibling, the function
will **not** lower Health.

#### Regeneration

If there is no [Script](https://create.roblox.com/docs/reference/engine/classes/Script) named "Health" within [StarterCharacterScripts](https://create.roblox.com/docs/reference/engine/classes/StarterCharacterScripts), a
passive health regeneration script is automatically inserted. This causes
players' characters to spawn with the same health regeneration script,
which adds 1% of [MaxHealth](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MaxHealth) to Health each second,
while the Humanoid is not dead. To disable this health regeneration
behavior, add an empty Script named "Health" to [StarterCharacterScripts](https://create.roblox.com/docs/reference/engine/classes/StarterCharacterScripts).

#### Health Bar Display

When Health is less than [MaxHealth](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MaxHealth), a health bar is
displayed under the Humanoid's name in-game. The display behavior of the
health bar is dependent on the
[HealthDisplayDistance](https://create.roblox.com/docs/reference/engine/classes/Humanoid#HealthDisplayDistance) and
[HealthDisplayType](https://create.roblox.com/docs/reference/engine/classes/Humanoid#HealthDisplayType).

A [Player](https://create.roblox.com/docs/reference/engine/classes/Player) will not see their own name and health bar above their
[Character](https://create.roblox.com/docs/reference/engine/classes/Player#Character). Instead, it is displayed in the top right
corner of the screen on the top bar. The health bar is visible when Health
is less than [MaxHealth](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MaxHealth).

#### Death

When the value of the character's health reaches 0, the [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will
automatically transitions to the _Dead_ [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType). In this
state, Health is locked to 0; however, there is no error or warning for
setting the Health of a dead Humanoid to a positive nonzero value.