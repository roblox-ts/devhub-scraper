Sets how the solver will advance the physics simulation forward in time. This option is not scriptable and must be set from the **PhysicsSteppingMethod** property of **Workspace** within Studio. See [Adaptive Timestepping](https://developer.roblox.com/articles/adaptive-timestepping) for more details.

Option

Description

**Adaptive**

The engine attempts to assign optimal simulation rates for individual assemblies of either 240 Hz, 120 Hz, or 60 Hz. This setting is optimized for performance.

**Fixed**

All simulated assemblies inside the workspace will advance forward at 240 Hz. This option is best for optimal stability and simulation accuracy.

**Default**

The current default is **Fixed**.

Note that when assemblies of different simulation rates become connected via [Constraints](https://developer.roblox.com/en-us/api-reference/class/Constraint) or collisions, the combined mechanism will default to the highest simulation rate for stability.