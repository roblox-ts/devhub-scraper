This property is a [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) instance that is used to render children
objects. Defaults to *nil*.

The [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) object will not replicate so the
[`ViewportFrame.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/ViewportFrame#CurrentCamera) won't replicate either. If you save a
Camera in the server, it will not appear in the client. When you set this
property, [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) and [`Camera.FieldOfView`](https://create.roblox.com/docs/reference/engine/classes/Camera#FieldOfView) will be
saved and replicate with [`ViewportFrame`](https://create.roblox.com/docs/reference/engine/classes/ViewportFrame) internally so the client
can render ViewportFrame without a Camera object. If you want to change
the client's Camera, you have to create a new Camera using a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) at runtime.