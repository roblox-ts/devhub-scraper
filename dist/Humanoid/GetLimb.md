This function returns the [Limb](https://developer.roblox.com/en-us/api-reference/enum/Limb) enum that is associated with the given [Part](https://developer.roblox.com/en-us/api-reference/class/Part)

This function works for both R15 and R6 rigs, for example:

```lua
-- For R15
print(humanoid:GetLimb(character.LeftUpperLeg)) -- Enum.Limb.LeftLeg
print(humanoid:GetLimb(character.LeftLowerLeg)) -- Enum.Limb.LeftLeg
print(humanoid:GetLimb(character.LeftFoot)) -- Enum.Limb.LeftLeg

-- For R6
print(humanoid:GetLimb(character:FindFirstChild("Left Leg"))) -- Enum.Limb.LeftLeg
``` 

GetLimb will throw an error if the `Part|Part's` parent is not set to the `Humanoid|Humanoid's` parent.