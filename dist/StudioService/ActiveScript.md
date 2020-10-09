**ActiveScript** refers to the [LuaSourceContainer](https://developer.roblox.com/en-us/api-reference/class/LuaSourceContainer) currently being edited by the user. If the user is not editing a script, this will be `nil`. Below is an example that shows how you can use this property to measure for how long a script was active.

```lua
local startTime = os.time()
local activeScript
local function onActiveScriptChanged(newActiveScript)
    if newActiveScript ~= activeScript then
        local deltaTime = os.time() - startTime
        print(("You edited %s for %d:%2.d"):format(activeScript.Name, math.floor(deltaTime / 60), deltaTime % 60))
    end
    startTime = os.time()
    activeScript = newActiveScript
end
game:GetService("StudioService"):GetPropertyChangedSignal("ActiveScript"):Connect(onActiveScriptChanged)
```