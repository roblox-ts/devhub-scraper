**GetClassIcon** provides a dictionary that allows the display of a class' Explorer window icon, e.g. calling this function with “Part” returns property values that display the part icon from the Explorer window.

Below is a literal table representation of the value returned when this function is called with `"Part"`.

```Lua
{
    Image = "rbxasset://textures/ClassImages.png",
    ImageRectOffset = Vector2.new(16, 0),
    ImageRectSize = Vector2.new(16, 16)
}
```

The utility function below may prove useful when displaying class icons:

```Lua
local StudioService = game:GetService("StudioService")
local imageLabel = script.Parent
local function displayClassIcon(image, className)
    for k, v in pairs(StudioService:GetClassIcon(className)) do
        image[k] = v -- Set property
    end
end
displayClassIcon(imageLabel, "Part")
```