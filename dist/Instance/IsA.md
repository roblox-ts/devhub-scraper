IsA returns true if the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)'s class is **equivalent to** or a
**subclass** of a given class. This function is similar to the
**instanceof** operators in other languages, and is a form of
[type introspection](https://create.roblox.com/docs/https://en.wikipedia.org/wiki/Type_introspection). To
ignore class inheritance, test the [`ClassName`](https://create.roblox.com/docs/reference/engine/classes/Instance#ClassName)
property directly instead. For checking native Lua data types (number,
string, etc) use the functions `type` and `typeof`.

Most commonly, this function is used to test if an object is some kind of
part, such as [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) or [`WedgePart`](https://create.roblox.com/docs/reference/engine/classes/WedgePart), which inherits from
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) (an abstract class). For example, if your goal is to
change all of a [`Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character)'s limbs to the same
color, you might use [`GetChildren`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetChildren) to iterate
over the children, then use IsA to filter non-[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) objects
which lack the [`BrickColor`](https://create.roblox.com/docs/reference/engine/datatypes/BrickColor) property:
```lua
local function paintFigure(character, color)
	-- Iterate over the child objects of the character
	for _, child in pairs(character:GetChildren()) do
		-- Filter out non-part objects, such as Shirt, Pants and Humanoid
		-- R15 use MeshPart and R6 use Part, so we use BasePart here to detect both:
		if child:IsA("BasePart") then
			child.BrickColor = color
		end
	end
end
paintFigure(game.Players.Player.Character, BrickColor.new("Bright blue"))
```

Since all classes inherit from [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), calling
`object:IsA("Instance")` will always return true.