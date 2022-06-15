WalkSpeed is a property that describes how quickly this [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is able to walk, in studs per second. This property defaults to the value of [StarterPlayer.CharacterWalkSpeed](https://developer.roblox.com/en-us/api-reference/property/StarterPlayer/CharacterWalkSpeed), which defaults to 16, meaning a Roblox [Player.Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character) can move 16 studs in any direction each second by default.

Notes
-----

*   When controlled on a mobile device or a gamepad, a humanoid can walk slower than their WalkSpeed if the controlling joystick is moved closer to its center
*   Roblox's default animation script scales a humanoid's movement animations based on how fast it is moving relative to the default speed of 16 studs/sec
*   The speed the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is currently walking at can be obtained using the [Humanoid.Running](https://developer.roblox.com/en-us/api-reference/event/Humanoid/Running) event
*   Movement speed is reduced to _87.5%_ WalkSpeed when swimming and _70%_ WalkSpeed when climbing