The Camera object defines a view of the 3D game world.
## Where the Camera object is found

In an instance of the game, each client has its own Camera object associated
with it. Camera objects exist only upon the viewer's client, residing in that
user's local Workspace, and therefore cannot be edited directly from the
server.

Each client's particular Camera object can be accessed through the
[`Workspace.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera) property of the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) on that
client.

Note, [`Workspace.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera) can also be used to find the Camera
object in Roblox Studio.
## How the Camera object works

The Camera's properties define the current view of the 3D game world. The most
important of these being:

- The [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) property represents the position and orientation
of the camera.
- The [`Camera.Focus`](https://create.roblox.com/docs/reference/engine/classes/Camera#Focus) property represents the point the camera is looking
at. It is important this property is set as it also represents where the
game thinks you are in the world. Certain visuals will be more detailed and
will update more frequently, depending on how close they are to the Focus.
Roblox's default camera scripts take care of this.
- The [`Camera.CameraType`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) property is read by the game's camera scripts
and determines how the Camera should update each frame.
- The [`Camera.CameraSubject`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraSubject) property is read by the game's camera
scripts and determines what object the Camera should follow.
- The [`Camera.FieldOfView`](https://create.roblox.com/docs/reference/engine/classes/Camera#FieldOfView) property represents the extent of the
observable world visible.

## How to work with the Camera

Roblox's camera scripts update the Camera's properties every frame dependent
on the current [`Camera.CameraType`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType). This means developers looking to
control the Camera themselves have two options.

2. Setting the [`Camera.CameraType`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) property to *'Scriptable'*. When the
Camera is in *'Scriptable'* mode the default camera scripts will not update
the camera. In most cases this is the easiest option.
2. Replacing or modifying the default camera scripts in
[`StarterPlayer.StarterPlayerScripts`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayerScripts). This is
only recommended for advanced developers.