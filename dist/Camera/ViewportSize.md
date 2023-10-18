ViewportSize describes the dimensions, in pixels, of the client's
viewport.

![A visual demonstration of the ViewportSize](https://prod.docsiteassets.roblox.com/assets/legacy/ViewportSize.png)

- This property ignores the GUI inset applied by the top bar, meaning the
center of the screen can be found at precisely at 50% of the
ViewportSize in both directions
- You can find the position of a [`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) in the world on the
viewport using [`Camera:WorldToViewportPoint()`](https://create.roblox.com/docs/reference/engine/classes/Camera#WorldToViewportPoint)