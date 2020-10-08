The TopParamB property is relevant when a part's [BasePart.TopSurface](https://developer.roblox.com/en-us/api-reference/property/BasePart/TopSurface) is set to Motor or SteppingMotor and [BasePart.TopSurfaceInput](https://developer.roblox.com/en-us/api-reference/property/BasePart/TopSurfaceInput) is set to Constant or Sin. For Constant, it determines the constant rotational velocity of the motor. For Sin, it determines the **frequency** of the motor's rotational velocity, using the following formula:

`MotorVelocity = ParamB * math.sin(workspace.DistributedGameTime * ParamB)`

In no other cases is this property used.