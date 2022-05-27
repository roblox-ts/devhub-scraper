Determines the color of the [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam).

If the [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam)'s [Beam.Texture](https://create.roblox.com/docs/reference/engine/classes/Beam#Texture) is set, this color will be applied to the
[Beam](https://create.roblox.com/docs/reference/engine/classes/Beam)'s texture. If no [Beam.Texture](https://create.roblox.com/docs/reference/engine/classes/Beam#Texture) has been set then the [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam) will
appear as a solid bar colored in accordance with this property.

#### Beams and ColorSequences

This property is a [ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence), allowing the color to be
configured to vary across the length of the [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam). Take for example the
following [ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence).

```lua
local colorSequence = ColorSequence.new({
	ColorSequenceKeypoint.new(0, Color3.fromRGB(255, 0, 0)), -- red
	ColorSequenceKeypoint.new(0.5, Color3.fromRGB(0, 255, 0)), -- green
	ColorSequenceKeypoint.new(1, Color3.fromRGB(0, 0, 255)), -- blue
	}
)
```

Applying this `DataType/ColorSequence` to a `Beam` would yield the
following result:

![enter image description here][1]

Note the `Beam`'s coloration also depends on the number of `Beam/Segments`
the `Beam` has. Each segment of the beam can only show a transition
between two colors. Therefore a `Beam` will need to have at least n-1
segments in order for the color to display correctly, where n is the
number of `DataType/ColorSequenceKeypoint`s in the
`DataType/ColorSequence`

[1]: https://prod.docsiteassets.roblox.com/assets/blt44487f7a1e259ab2/BeamColor.png