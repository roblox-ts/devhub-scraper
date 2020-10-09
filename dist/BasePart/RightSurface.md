The RightSurface property determines the type of surface used for the +X direction of a part. When two parts' faces are placed next to each other, they may create a joint between them. If set to Motor, the [BasePart.RightSurfaceInput](https://developer.roblox.com/en-us/api-reference/property/BasePart/RightSurfaceInput) determines how a motor joint should behave.

Most SurfaceTypes render a texture on the part face if the [BasePart.Material](https://developer.roblox.com/en-us/api-reference/property/BasePart/Material) is set to Plastic. Some SurfaceTypes - Hinge, Motor and SteppingMotor - will render a 3D adornment instead. If this property is selected in the Properties window, it will be highlighted in the game world similar to that of a `/SurfaceSelection`.