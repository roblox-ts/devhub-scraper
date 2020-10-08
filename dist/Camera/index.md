The Camera object defines a view of the 3D game world.

Where the Camera object is found
--------------------------------

In an instance of the game, each client has its own Camera object associated with it. Camera objects exist only upon the viewer's client, residing in that user's local Workspace, and therefore cannot be edited directly from the server.

Each client's particular Camera object can be accessed through the [Workspace.CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera) property of the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) on that client.

Note, [Workspace.CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera) can also be used to find the Camera object in Roblox Studio.

How the Camera object works
---------------------------

The Camera's properties define the current view of the 3D game world. The most important of these being:

*   The [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) property represents the position and orientation of the camera.
*   The [Camera.Focus](https://developer.roblox.com/en-us/api-reference/property/Camera/Focus) property represents the point the camera is looking at. It is important this property is set as it also represents where the game thinks you are in the world. Certain visuals will be more detailed and will update more frequently, depending on how close they are to the Focus. Roblox's default [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) take care of this.
*   The [Camera.CameraType](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType) property is read by the game's [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) and determines how the Camera should update each frame.
*   The [Camera.CameraSubject](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraSubject) property is read by the game's [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) and determines what object the Camera should follow.
*   The [Camera.FieldOfView](https://developer.roblox.com/en-us/api-reference/property/Camera/FieldOfView) property represents the extent of the observable world visible.

How to work with the Camera
---------------------------

Roblox's [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) update the Camera's properties every frame dependent on the current [Camera.CameraType](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType). This means developers looking to control the Camera themselves have two options.

1.  Setting the [Camera.CameraType](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType) property to _'Scriptable'_. When the Camera is in _'Scriptable'_ mode the default [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) will not update the camera. In most cases this is the easiest option.
2.  Replacing or modifying the default [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) in `StarterPlayerScripts|StarterPlayer.StarterPlayerScripts`. This is only recommended for advanced developers.