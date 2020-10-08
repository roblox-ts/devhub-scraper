**WeldConstraints** are used to attach two [parts](https://developer.roblox.com/en-us/api-reference/class/BasePart) together. The constraint makes sure that the parts stay in the same relative position and orientation to one another, meaning that if one part moves, the other will move the same amount. Even if the two parts are not touching one another, they can be welded together with a weld constraint.

The most common way to create a weld constraint is through the Studio **Create** menu in the **Model** tab (select **Weld**). This tool will act differently based on how many parts are selected when the tool is activated:

*   If no parts are selected when the **Weld** tool is clicked, the next two parts that are clicked on will be welded together. If the same part is clicked twice, no weld will be created.
*   If one part is selected when the **Weld** tool is clicked, the next part that is clicked on will be welded to the selected part.
*   If several parts are selected when the **Weld** tool is clicked, any parts in that selection that are touching or overlapping will be welded together.

Repositioning Welded Parts
--------------------------

Roblox handles moving a welded part differently depending on whether the part was moved using its [Position](https://developer.roblox.com/en-us/api-reference/property/BasePart/Position) or with its [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame).

If a welded part's [Position](https://developer.roblox.com/en-us/api-reference/property/BasePart/Position) is updated, the part will move but none of the connected parts will move with it. The weld will recalculate the offset from the other part based on the part's new position.

\-- Create two parts and position them at the same height
local partA = Instance.new("Part")
local partB = Instance.new("Part")
partA.Position = Vector3.new(0, 10, 0)
partB.Position = Vector3.new(0, 10, 10)
partA.Parent = workspace
partB.Parent = workspace

-- Weld the two parts together
local weld = Instance.new("WeldConstraint")
weld.Parent = workspace
weld.Part0 = partA
weld.Part1 = partB

-- Update the position of the first part; the first part will move but the second will stay where it started
partA.Position = Vector3.new(0, 20, 0)

In contrast, if a part's [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) is updated, that part will move and any part welded to that part will also move. These other parts will be moved to make sure they maintain the same offset as when the weld was created.

\-- Create two parts and position them at the same height
local partA = Instance.new("Part")
local partB = Instance.new("Part")
partA.Position = Vector3.new(0, 10, 0)
partB.Position = Vector3.new(0, 10, 10)
partA.Parent = workspace
partB.Parent = workspace

-- Weld the two parts together
local weld = Instance.new("WeldConstraint")
weld.Parent = workspace
weld.Part0 = partA
weld.Part1 = partB

-- Update the CFrame of the first part; the second part will also move to maintain the offset of the weld
partA.CFrame = CFrame.new(0, 20, 0)