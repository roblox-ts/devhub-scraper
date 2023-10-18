The NearPlaneZ property describes how far away the Camera's near clipping
plane is in studs. The near clipping plane is a geometric plane that sits
in-front of the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame). Anything between
this plane and the camera will not render. This creates a cutaway view
when viewing objects at very short distances. See the images below for a
visual example of this:

![A demonstration of how the near clipping plane resides in front of the camera's view](https://prod.docsiteassets.roblox.com/assets/legacy/NearPlaneZ1.jpg)
![A demonstration of how anything falling behind the clipping plane is not rendered](https://prod.docsiteassets.roblox.com/assets/legacy/NearPlaneZ2.jpg)

The value of NearPlaneZ varies across different platforms, but is
currently always between *-0.1* and *-0.5*.

- Most windows systems, all Xbox systems and most iOS systems support the
more precise value of *-0.1*
- Currently Mac and Android systems only support a NearPlaneZ of *-0.5*,
although this may change in the future