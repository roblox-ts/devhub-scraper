Determines how much upwards force is applied to the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) when jumping. The starting value of this property is determined by the value of [StarterPlayer.CharacterJumpPower](https://developer.roblox.com/en-us/api-reference/property/StarterPlayer/CharacterJumpPower), which defaults to 50 and is constrained between 1 and 1000.

This property is only visible in the Properties window if \`Humanoid/UseJumpPower\`\` is set to **true**, as it would not be relevant otherwise.

Notes
-----

*   Jumps are also influenced by the [Workspace.Gravity](https://developer.roblox.com/en-us/api-reference/property/Workspace/Gravity) property which determines the acceleration due to gravity.
*   Although setting this property to 0 will prevent the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) from jumping, developers are advised to disable the “Jumping” state using the [Humanoid:SetStateEnabled](https://developer.roblox.com/en-us/api-reference/function/Humanoid/SetStateEnabled) function.