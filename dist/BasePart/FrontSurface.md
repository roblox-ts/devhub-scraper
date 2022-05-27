The FrontSurface property determines the type of surface used for the -Z
direction of a part. When two parts' faces are placed next to each other,
they may create a joint between them. If set to Motor, the
[BasePart.FrontSurfaceInput](https://create.roblox.com/docs/reference/engine/classes/BasePart#FrontSurfaceInput) determines how a motor joint should behave.

Most SurfaceTypes render a texture on the part face if the
[BasePart.Material](https://create.roblox.com/docs/reference/engine/classes/BasePart#Material) is set to Plastic. Some SurfaceTypes including Hinge,
Motor, and SteppingMotor render a 3D adornment instead. If this property
is selected in the Properties window, it will be highlighted in the game
world similar to that of a [SurfaceSelection](https://create.roblox.com/docs/reference/engine/classes/SurfaceSelection).