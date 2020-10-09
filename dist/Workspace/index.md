The Workspace is the service in which any objects that are to be rendered in the 3D world exist. Objects not descending from Workspace will not be rendered or physically interact with the world.

What does the Workspace do?
---------------------------

The core job of the Workspace is to hold objects that exist in the 3D world, [BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart) and [Attachments](https://developer.roblox.com/en-us/api-reference/class/Attachment). Whilst such objects are descendant of Workspace, they will be active. For BaseParts this means they will be rendered, and physically interact with other parts and the world. For [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment)s this means objects adorned to them, such as [ParticleEmitters](https://developer.roblox.com/en-us/api-reference/class/ParticleEmitter), [Beams](https://developer.roblox.com/en-us/api-reference/class/Beam) and [BillboardGuis](https://developer.roblox.com/en-us/api-reference/class/BillboardGui) will render.

Understanding this behavior is important, as it means objects can be removed from the Workspace when they are not needed. For example, map [Models](https://developer.roblox.com/en-us/api-reference/class/Model) can be removed from the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) when a different map is being played on. Objects that are not immediately needed in the Workspace are generally stored in [ReplicatedStorage](https://developer.roblox.com/en-us/api-reference/class/ReplicatedStorage) or [ServerStorage](https://developer.roblox.com/en-us/api-reference/class/ServerStorage).

In its role as the holder of active 3D objects, Workspace includes a number of useful functions related to parts, their positions and joints between them.

Accessing the Workspace
-----------------------

The Workspace can be accessed several ways, all of which are valid.

```lua
workspace -- a global variable
game.Workspace -- a property of the DataModel
game:GetService("Workspace") -- workspace is a service
``` 

Notes
-----

*   Objects that require adornment, such as [ParticleEmitter](https://developer.roblox.com/en-us/api-reference/class/ParticleEmitter)s and [BillboardGui](https://developer.roblox.com/en-us/api-reference/class/BillboardGui)s will be adorned to the _0, 0, 0_ position when adorned to the Workspace (parented to it without an adornee otherwise being set)
*   The [Model:MakeJoints](https://developer.roblox.com/en-us/api-reference/function/Model/MakeJoints) and [Model:BreakJoints](https://developer.roblox.com/en-us/api-reference/function/Model/BreakJoints) functions inherited from the [Model](https://developer.roblox.com/en-us/api-reference/class/Model) class are overridden by the Workspace's own [Workspace:MakeJoints](https://developer.roblox.com/en-us/api-reference/function/Workspace/MakeJoints) and [Workspace:BreakJoints](https://developer.roblox.com/en-us/api-reference/function/Workspace/BreakJoints) functions, which can only be used in plugins
*   It is impossible to delete the Workspace
*   The Workspace will also clean up [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s that fall beneath [Workspace.FallenPartsDestroyHeight](https://developer.roblox.com/en-us/api-reference/property/Workspace/FallenPartsDestroyHeight)
*   A client's current [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) object can be accessed using the [Workspace.CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera) property
*   The [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) object can be accessed using the [Workspace.Terrain](https://developer.roblox.com/en-us/api-reference/property/Workspace/Terrain) property