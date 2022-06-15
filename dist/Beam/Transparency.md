Determines the transparency of the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam) across its segments.

Beams and Transparency
----------------------

This property is a [NumberSequence](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence), allowing the transparency to be configured to vary across the length of the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam). Take for example the following [NumberSequence](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence).

local numberSequence = NumberSequence.new({
	NumberSequenceKeypoint.new(0, 1), -- transparent
	NumberSequenceKeypoint.new(0.5, 0), -- opaque
	NumberSequenceKeypoint.new(1, 1), -- transparent
	}
)

Applying this [NumberSequence](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence) to a [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam) would yield the following result:

![enter image description here](https://developer.roblox.com/assets/bltb919bbb4d83c7ba8/BeamTransparency.png)

Note the [Beam's](https://developer.roblox.com/en-us/api-reference/class/Beam) transparency also depends on the number of [Beam.Segments](https://developer.roblox.com/en-us/api-reference/property/Beam/Segments) the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam) has. Each segment of the beam can only show a transition between two transparencies. Therefore a [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam) will need to have at least n-1 segments in order to display correctly, where n is the number of [NumberSequenceKeypoint](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequenceKeypoint)s in the [NumberSequence](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence)