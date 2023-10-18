This function returns the [`Enum.Limb`](https://create.roblox.com/docs/reference/engine/enums/Limb) enum that is associated with the
given [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part)

This function works for both R15 and R6 rigs, for example:
```lua
-- For R15
print(humanoid:GetLimb(character.LeftUpperLeg)) -- Enum.Limb.LeftLeg
print(humanoid:GetLimb(character.LeftLowerLeg)) -- Enum.Limb.LeftLeg
print(humanoid:GetLimb(character.LeftFoot)) -- Enum.Limb.LeftLeg

-- For R6
print(humanoid:GetLimb(character:FindFirstChild("Left Leg"))) -- Enum.Limb.LeftLeg
```

GetLimb will throw an error if the [`Part's`](https://create.roblox.com/docs/reference/engine/classes/Part) parent is not set
to the [`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) parent.