**Health** is a property that represents the current health of the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid). The value is restricted to the range \[0, [Humanoid.MaxHealth](https://developer.roblox.com/en-us/api-reference/property/Humanoid/MaxHealth)\]. If the Humanoid is dead, Health is continually set to 0.

![A Humanoid with half of its health left.](https://developer.roblox.com/assets/blt1c35a737d3dcdb25/Half-Health.png)

Dealing Damage
--------------

The [TakeDamage](https://developer.roblox.com/en-us/api-reference/function/Humanoid/TakeDamage) function should be used to subtract from Health. If a Humanoid has a [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField) as a sibling, the function will **not** lower Health.

Regeneration
------------

If there is no [Script](https://developer.roblox.com/en-us/api-reference/class/Script) named “Health” within [StarterCharacterScripts](https://developer.roblox.com/en-us/api-reference/class/StarterCharacterScripts), a passive health regeneration script is automatically inserted. This causes players' characters to spawn with the same health regeneration script, which adds 1% of [MaxHealth](https://developer.roblox.com/en-us/api-reference/property/Humanoid/MaxHealth) to Health each second, while the Humanoid is not dead. To disable this health regeneration behavior, add an empty Script named “Health” to [StarterCharacterScripts](https://developer.roblox.com/en-us/api-reference/class/StarterCharacterScripts).

Health Bar Display
------------------

![The behavior of the HealthDisplayType property](https://developer.roblox.com/assets/blt25d44cecfd3e9e09/HealthDisplayType.gif)

When Health is less than [MaxHealth](https://developer.roblox.com/en-us/api-reference/property/Humanoid/MaxHealth), a health bar is displayed under the Humanoid's name in-game. The display behavior of the health bar is dependent on the [HealthDisplayDistance](https://developer.roblox.com/en-us/api-reference/property/Humanoid/HealthDisplayDistance) and [HealthDisplayType](https://developer.roblox.com/en-us/api-reference/property/Humanoid/HealthDisplayType).

![The default health bar displayed in the top bar](https://developer.roblox.com/assets/blt081a90d0f606c745/CoreGuiHealth.png)

A [Player](https://developer.roblox.com/en-us/api-reference/class/Player) will not see their own name and health bar above their [Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character). Instead, it is displayed in the top right corner of the screen on the top bar. The health bar is visible when Health is less than [MaxHealth](https://developer.roblox.com/en-us/api-reference/property/Humanoid/MaxHealth).

Death
-----

When the value of the character's health reaches 0, the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) will automatically transitions to the _Dead_ [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType). In this state, Health is locked to 0; however, there is no error or warning for setting the Health of a dead Humanoid to a positive nonzero value.

![The same Humanoid from the beginning, after being bloxxed by an explosion.](https://developer.roblox.com/assets/blt9978f529dfcc80e6/Ooof.png)