A VideoFrame renders a rectangle, like a [Frame](https://developer.roblox.com/en-us/api-reference/class/Frame) does, with a moving video image. The video must be from a file uploaded to the Roblox website.

The video is scaled to fit the entirety of the rectangle, but looks best when displayed at its native resolution.

2D and 3D Sound
---------------

A VideoFrame placed underneath [SurfaceGui](https://developer.roblox.com/en-us/api-reference/class/SurfaceGui) on a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) will emit its sound from that part's [BasePart.Position](https://developer.roblox.com/en-us/api-reference/property/BasePart/Position).

A VideoFrame exhibits the Doppler effect, meaning its frequency and pitch varies with the relative motion of whatever part it is attached to.

The volume of the VideoFrame will be determined by the distance between the client's sound listener (by default the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) position) and the position of the VideoFrame's part .

A VideoFrame is considered **“global”** if it is not placed underneath SurfaceGui on a BasePart. In this case, the sound will play at the same volume throughout the entire place.