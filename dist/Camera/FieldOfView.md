Field of view, often shortened to FOV, is the extent of the observable game world that can be seen on screen at a given moment. The FieldOfView property is clamped between 1 and 120 degrees and defaults at 70. Very low or very high fields of view are not recommended as they can be disorientating to players.

The FieldOfView property sets how many degrees in the vertical direction (y-axis) the camera can view. Uniform scaling is enforced meaning the vertical and horizontal field of view are always related by the [aspect ratio](https://en.wikipedia.org/wiki/Aspect_ratio_(image)) of the screen. This means the FieldOfView property also determines the horizontal field of view.

See the images below for an example of how different FieldOfView settings can impact the extent of the perceptive game world. At a FOV of 70, a considerable portion of the game world is visible:

![A demonstration of the default FOV of 70](https://developer.roblox.com/assets/bltd7070fca08aa332f/Fov70.png)

However when the FOV is reduced to 30, although the [Camera's](https://developer.roblox.com/en-us/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) has not changed, a much smaller portion of the game world is rendered:

![A demonstration of a reduced FOV of 30](https://developer.roblox.com/assets/bltdfff0429f210bfb2/Fov30.png)

Suggested uses for FieldOfView
------------------------------

Changing FOV can produce a variety of effects, such as:

*   Reducing FOV to give the impression of magnification (for example when using binoculars)
*   Increasing FOV when the player is 'sprinting' to give the impression of a lack of control