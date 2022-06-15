The **GetDescendants** function of an object returns an array that contains all of the descendants of that object. Unlike [Instance:GetChildren](https://developer.roblox.com/en-us/api-reference/function/Instance/GetChildren), which only returns the immediate children of an object, GetDescendants will find every child of the object, every child of those children, and so on.

The arrays returned by GetDescendants are arranged so that parents come earlier than their children. Refer to the following example of a [Model](https://developer.roblox.com/en-us/api-reference/class/Model) in the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace):

![Workspace Descendants](https://developer.roblox.com/assets/blt0c3edf2a368c36c8/GetDescendantsExample.png)

Inside this model are three parts (C, D, and E) and another model (InnerModel). Inside the inner model are two more parts (A and B). Calling GetDescendants on the first model and printing the contents of the returned array would print the first level of children (InnerModel, C, D, and E) before A and B.

local descendants = game.Workspace.Model:GetDescendants()

-- Loop through all of the descendants of the model and
-- print out their name
for index, descendant in pairs(descendants) do
	print(descendant.Name)
end

-- Prints:
-- C
-- D
-- E
-- InnerModel
-- A
-- B