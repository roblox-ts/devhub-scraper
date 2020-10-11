Determines the color of the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam).

If the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam)'s [Beam.Texture](https://developer.roblox.com/en-us/api-reference/property/Beam/Texture) is set, this color will be applied to the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam)'s texture. If no [Beam.Texture](https://developer.roblox.com/en-us/api-reference/property/Beam/Texture) has been set then the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam) will appear as a solid bar colored in accordance with this property.

Beams and ColorSequences
------------------------

This property is a [ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence), allowing the color to be configured to vary across the length of the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam). Take for example the following [ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence).

```lua
local colorSequence = ColorSequence.new({
    ColorSequenceKeypoint.new(0, Color3.fromRGB(255, 0, 0)), -- red
    ColorSequenceKeypoint.new(0.5, Color3.fromRGB(0, 255, 0)), -- green
    ColorSequenceKeypoint.new(1, Color3.fromRGB(0, 0, 255)), -- blue
    }
)
``` 

Applying this [ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence) to a [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam) would yield the following result:

![enter image description here](https://developer.roblox.com/assets/blt44487f7a1e259ab2/BeamColor.png)

Note the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam)'s coloration also depends on the number of [Beam.Segments](https://developer.roblox.com/en-us/api-reference/property/Beam/Segments) the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam) has. Each segment of the beam can only show a transition between two colors. Therefore a [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam) will need to have at least n-1 segments in order for the color to display correctly, where n is the number of [ColorSequenceKeypoint](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequenceKeypoint)s in the [ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence)