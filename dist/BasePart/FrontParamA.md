The FrontParamA property is relevant when a part's [BasePart.FrontSurface](https://create.roblox.com/docs/reference/engine/classes/BasePart#FrontSurface)
is set to Motor or SteppingMotor and [BasePart.FrontSurfaceInput](https://create.roblox.com/docs/reference/engine/classes/BasePart#FrontSurfaceInput) is set
to Sin. It determines the **amplitude** of the motor's rotational
velocity, using the following formula:

`MotorVelocity = ParamA * math.sin(workspace.DistributedGameTime * ParamB)`

In no other cases is this property used.