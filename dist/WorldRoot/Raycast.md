Casts a ray using an origin, direction, and optional
[`RaycastParams`](https://create.roblox.com/docs/reference/engine/datatypes/RaycastParams). If it finds an eligible [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or
[`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) cell, a [`RaycastResult`](https://create.roblox.com/docs/reference/engine/datatypes/RaycastResult) is returned containing
the results of the operation. If no [`RaycastParams`](https://create.roblox.com/docs/reference/engine/datatypes/RaycastParams) object is
provided, the defaults are used (all parts are considered and
[`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) water is not ignored).

Note that the length (magnitude) of the directional vector is important,
as objects/terrain further away than its length will not be tested. If
you're using a [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) to help create the ray components,
consider using [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) as the directional vector and
multiply it by the desired length as shown in the example below. The
maximum length of the direction vector is 5,000 studs.

This method does **not** use a [`Ray`](https://create.roblox.com/docs/reference/engine/datatypes/Ray) object, but its origin and
direction components can be borrowed from [`Ray`](https://create.roblox.com/docs/reference/engine/datatypes/Ray) and
[`Ray`](https://create.roblox.com/docs/reference/engine/datatypes/Ray).