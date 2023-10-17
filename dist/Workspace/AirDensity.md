The ground level (**Y** of 0) air density in RMU/stud³ units (see
[Roblox Units](https://create.roblox.com/docs/physics/units)), used to calculate the
aerodynamic force if [`Workspace.FluidForces`](https://create.roblox.com/docs/reference/engine/classes/Workspace#FluidForces) is
[`Experimental`](https://create.roblox.com/docs/reference/engine/enums/FluidForces). The default corresponds to realistic sea
level air density at standard temperature and pressure. Air density decays
as the **Y** altitude increases, reaching 5% of of its ground level value
at 100,000 studs. Below **Y** of 0, the air density is fixed at the input
value.