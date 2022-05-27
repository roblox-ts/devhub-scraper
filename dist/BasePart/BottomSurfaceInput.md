The BottomSurfaceInput property determines the kind of input provided to a
part's [BasePart.BottomSurface](https://create.roblox.com/docs/reference/engine/classes/BasePart#BottomSurface). This is only relevant for Motor or
SteppingMotor SurfaceTypes. This property determines how
[BasePart.BottomParamA](https://create.roblox.com/docs/reference/engine/classes/BasePart#BottomParamA) and [BasePart.BottomParamB](https://create.roblox.com/docs/reference/engine/classes/BasePart#BottomParamB) are used. For brevity,
these properties will be referred to as ParamA and ParamB, respectively.

- By default, this is set to NoInput. This stops the motor altogether.
- For Constant, the motor rotates at a constant velocity equal to
  `ParamB`.
- For Sin, the motor rotates at a velocity equal to
  `ParamA * math.sin(workspace.DistributedGameTime * ParamB)`. See
  [Workspace.DistributedGameTime](https://create.roblox.com/docs/reference/engine/classes/Workspace#DistributedGameTime).