The NearPlaneZ property describes how far away the Camera's near clipping
plane is in studs. The near clipping plane is a geometric plane that sits
in-front of the [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera)'s [Camera.CFrame](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame). Anything between this
plane and the camera will not render. This creates a cutaway view when
viewing objects at very short distances. See the images below for a visual
example of this:

![A demonstration of how the near clipping plane resides in front of the camera's view][1]
![A demonstration of how anything falling behind the clipping plane is not rendered][2]

The value of NearPlaneZ varies across different platforms, but is
currently always between _-0.1_ and _-0.5_.

- Most windows systems, all Xbox systems and most iOS systems support the
  more precise value of _-0.1_
- Currently Mac and Android systems only support a NearPlaneZ of _-0.5_,
  although this may change in the future

[1]: https://prod.docsiteassets.roblox.com/assets/blt0750d33a37b8193c/NearPlaneZ1.jpg
[2]: https://prod.docsiteassets.roblox.com/assets/bltc9bb8208e79147ec/NearPlaneZ2.jpg