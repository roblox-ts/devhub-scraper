This property is set up automatically by the Avatar Importer plugin.

Describes where a global zero was while authoring the cage mesh in an
asset creation tool such as Blender or Maya. This property is not used by
the deformer but it is useful for tools/aligning scripts, for example
aligning two parts by matching their pivots as follows:

```lua
local function alignWraps()
	local selectionService = game:GetService("Selection")
	local selectedObjects = selectionService:Get()
	local alignObjects = {}
	for _, obj in pairs(selectedObjects) do
		if obj:IsA("BaseWrap") then
			--print("Wrap: " .. obj.Name)
			table.insert(alignObjects, obj)
		else
			print("Ignore: " .. obj.Name)
		end
	end

	if #alignObjects < 2 then
		warn("You need to select at least two wraps")
		return
	end

	local anchorWrap = alignObjects[1]
	local worldA_from_Wrap = anchorWrap.ImportOriginWorld
	print("Anchor: " .. anchorWrap.Name)
	for i = 2, #alignObjects do
		local wrapToAlign = alignObjects[i]
		print("Align: " .. wrapToAlign.Name)
		local wrap_from_WorldB = wrapToAlign.ImportOriginWorld:Inverse()
		local worldA_from_WorldB = worldA_from_Wrap * wrap_from_WorldB
		local worldB = wrapToAlign.Parent.CFrame
		-- Note: adjust CFrame of the parent part
		wrapToAlign.Parent.CFrame = (worldB_from_WorldB * worldB)
	end
end
```