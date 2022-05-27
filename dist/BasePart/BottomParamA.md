The BottomParamA property is relevant when a part's
[BasePart.BottomSurface](https://create.roblox.com/docs/reference/engine/classes/BasePart#BottomSurface) is set to Motor or SteppingMotor and
[BasePart.BottomSurfaceInput](https://create.roblox.com/docs/reference/engine/classes/BasePart#BottomSurfaceInput) is set to Sin. It determines the
**amplitude** of the motor's rotational velocity, using the following
formula:

`MotorVelocity = ParamA * math.sin(workspace.DistributedGameTime * ParamB)`

There are no other usages for this property.