Determines the transparency of the [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam) across its segments.

#### Beams and Transparency

This property is a [NumberSequence](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence), allowing the transparency to
be configured to vary across the length of the [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam). Take for example
the following [NumberSequence](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence).

```lua
local numberSequence = NumberSequence.new({
	NumberSequenceKeypoint.new(0, 1), -- transparent
	NumberSequenceKeypoint.new(0.5, 0), -- opaque
	NumberSequenceKeypoint.new(1, 1), -- transparent
	}
)
```

Applying this `DataType/NumberSequence` to a `Beam` would yield the
following result:

![enter image description here][1]

Note the `Beam|Beam's` transparency also depends on the number of
`Beam/Segments` the `Beam` has. Each segment of the beam can only show a
transition between two transparencies. Therefore a `Beam` will need to
have at least n-1 segments in order to display correctly, where n is the
number of `DataType/NumberSequenceKeypoint`s in the
`DataType/NumberSequence`

[1]: https://prod.docsiteassets.roblox.com/assets/bltb919bbb4d83c7ba8/BeamTransparency.png