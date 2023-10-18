Determines the color of the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam).

If the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)'s [`Beam.Texture`](https://create.roblox.com/docs/reference/engine/classes/Beam#Texture) is set, this color will be
applied to the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)'s texture. If no [`Beam.Texture`](https://create.roblox.com/docs/reference/engine/classes/Beam#Texture) has been
set then the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) will appear as a solid bar colored in accordance
with this property.
#### Beams and ColorSequences

This property is a [`ColorSequence`](https://create.roblox.com/docs/reference/engine/datatypes/ColorSequence), allowing the color to be
configured to vary across the length of the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam). Take for example
the following [`ColorSequence`](https://create.roblox.com/docs/reference/engine/datatypes/ColorSequence).
```lua
local colorSequence = ColorSequence.new({
	ColorSequenceKeypoint.new(0, Color3.fromRGB(255, 0, 0)), -- red
	ColorSequenceKeypoint.new(0.5, Color3.fromRGB(0, 255, 0)), -- green
	ColorSequenceKeypoint.new(1, Color3.fromRGB(0, 0, 255)), -- blue
	}
)
```

Applying this [`ColorSequence`](https://create.roblox.com/docs/reference/engine/datatypes/ColorSequence) to a [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) would yield the
following result:

![enter image description here](https://prod.docsiteassets.roblox.com/assets/legacy/BeamColor.png)

Note the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)'s coloration also depends on the number of
[`Beam.Segments`](https://create.roblox.com/docs/reference/engine/classes/Beam#Segments) the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) has. Each segment of the beam can
only show a transition between two colors. Therefore a [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) will
need to have at least n-1 segments in order for the color to display
correctly, where n is the number of [`ColorSequenceKeypoint`](https://create.roblox.com/docs/reference/engine/datatypes/ColorSequenceKeypoint)s in
the [`ColorSequence`](https://create.roblox.com/docs/reference/engine/datatypes/ColorSequence)