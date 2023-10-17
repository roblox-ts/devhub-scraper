Determines the transparency of the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) across its segments.
#### Beams and Transparency

This property is a `Datatype.NumberSequence`, allowing the transparency to
be configured to vary across the length of the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam). Take for
example the following `Datatype.NumberSequence`.
```lua
local numberSequence = NumberSequence.new({
	NumberSequenceKeypoint.new(0, 1), -- transparent
	NumberSequenceKeypoint.new(0.5, 0), -- opaque
	NumberSequenceKeypoint.new(1, 1), -- transparent
	}
)
```

Applying this `Datatype.NumberSequence` to a [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) would yield the
following result:

![enter image description here](https://prod.docsiteassets.roblox.com/assets/legacy/BeamTransparency.png)

Note the [`Beam's`](https://create.roblox.com/docs/reference/engine/classes/Beam) transparency also depends on the number of
[`Beam.Segments`](https://create.roblox.com/docs/reference/engine/classes/Beam#Segments) the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) has. Each segment of the beam can
only show a transition between two transparencies. Therefore a
[`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) will need to have at least n-1 segments in order to display
correctly, where n is the number of `Datatype.NumberSequenceKeypoint`s in
the `Datatype.NumberSequence`