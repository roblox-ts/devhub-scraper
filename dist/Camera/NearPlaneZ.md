The NearPlaneZ property describes how far away the Camera's near clipping plane is in studs. The near clipping plane is a geometric plane that sits in-front of the `Camera|Camera's` [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame). Anything between this plane and the camera will not render. This creates a cutaway view when viewing objects at very short distances. See the images below for a visual example of this:

![A demonstration of how the near clipping plane resides in front of the camera's view](https://developer.roblox.com/assets/blt0750d33a37b8193c/NearPlaneZ1.jpg)  
![A demonstration of how anything falling behind the clipping plane is not rendered](https://developer.roblox.com/assets/bltc9bb8208e79147ec/NearPlaneZ2.jpg)

The value of NearPlaneZ varies across different platforms, but is currently always between _\-0.1_ and _\-0.5_.

*   Most windows systems, all Xbox systems and most iOS systems support the more precise value of _\-0.1_
*   Currently Mac and Android systems only support a NearPlaneZ of _\-0.5_, although this may change in the future