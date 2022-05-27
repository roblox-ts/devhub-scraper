This property determines the exposure compensation amount which applies a
bias to the exposure level of the scene prior to the tonemap step.
Defaults to 0.

- A value of +1 indicates twice as much exposure and -1 means half as much
  exposure.
- A value of 0 indicates no exposure compensation will be done.
- Range: -5 to 5

This property is replicated and can be set from scripts or [Studio](https://create.roblox.com/docs/reference/engine/classes/Studio).

```lua
local Lighting = game:GetService("Lighting")
Lighting.ExposureCompensation = 5
```

You can use this property to adjust the exposure amount prior to the
tonemap step to show more detail either in lighter or darker areas. This
is needed as we move to a HDR pipeline.

When `Lighting/Technology` is set to `Enum/Technology|Legacy`, this
property has no effect.

```lua
local Lighting = game:GetService("Lighting")

-- ExposureCompensation has no effect because Lighting's Technology is Legacy
Lighting.Technology = Enum.Technology.Legacy
Lighting.ExposureCompensation = 5
```