This property determines whether physics throttling is enabled.

Historically this function could be used by plugins. However, for security reasons this has been changed and now it can only be used by developers in the command bar.

Note, currently physics throttling will always stay enabled regardless if this function is used or not.

What is physics throttling?
---------------------------

Physics throttling occurs when the physics engine detects it cannot keep up with the game in realtime. When physics is being throttled, it will update less frequently causing [BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart) to appear to move slower.

Without throttling, the physics simulation would fall further behind out of sync with the game. Without physics throttling, users experience lower frame rates.

Objects associated with [Humanoids](https://developer.roblox.com/en-us/api-reference/class/Humanoid) are exempt from physics throttling.

Developers can use [Workspace:GetPhysicsThrottling](https://developer.roblox.com/en-us/api-reference/function/Workspace/GetPhysicsThrottling) to determine the degree to which physics is being throttled.

Demonstrating physics throttling
--------------------------------

Developers should always avoid creating places that overload the physics engine, as it leads to sub-par experience for players. Those wishing to simulate physics throttling for research purposes however, need only create a lot of [Part](https://developer.roblox.com/en-us/api-reference/class/Part)s very quickly.

```lua
local i = 0
while true do
	i = i + 1
	if i % 5 == 0 then
		wait()
	end
	local part = Instance.new("Part", workspace)
end
```