ViewportSize describes the dimensions, in pixels, of the client's viewport.

![A visual demonstration of the ViewportSize](https://developer.roblox.com/assets/blt2287d09729431008/ViewportSize.png)

*   This property ignores the GUI inset applied by the top bar, meaning the center of the screen can be found at precisely at 50% of the ViewportSize in both directions
*   You can find the position of a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) in the world on the viewport using [Camera:WorldToViewportPoint](https://developer.roblox.com/en-us/api-reference/function/Camera/WorldToViewportPoint)