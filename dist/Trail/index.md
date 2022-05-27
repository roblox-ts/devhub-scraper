The Trail object is used to create a trail like an effect between two points.
As the points move through space a texture is drawn on the plane the points
define. This is commonly used to create effects to help visualize movements
like tracer trails behind projectiles, footprints, tire tracks, and many other
similar effects.

![A diagram explaining the Trail object.][1]
![An example usage of the Trail object.][2]

When a Trail is active it will record the position of it's [Trail.Attachment0](https://create.roblox.com/docs/reference/engine/classes/Trail#Attachment0)
every frame. It then connects these positions to where the attachments were in
the previous frame, creating a polygon. That polygon is then filled in with
the Trail's [Trail.Color](https://create.roblox.com/docs/reference/engine/classes/Trail#Color) and [Trail.Texture](https://create.roblox.com/docs/reference/engine/classes/Trail#Texture) (if that Texture exists). Each
segment drawn in this way will eventually fade based on the TrailEffect's
[Trail.Lifetime](https://create.roblox.com/docs/reference/engine/classes/Trail#Lifetime).

## Creating Trails

A Trail must be a descendant of the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace), and its attachment properties
([Trail.Attachment0](https://create.roblox.com/docs/reference/engine/classes/Trail#Attachment0) and [Trail.Attachment1](https://create.roblox.com/docs/reference/engine/classes/Trail#Attachment1)) must be set to two unique
Attachments. Once this has been done the effect will create a trail as soon as
either of its attachments moves.

![Basic Trail][3]

It is common practice to either store the Trail in the [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) containing
the effect's attachments, or as a child of a [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder) in the Workspace with
other effects objects.

[1]: https://prod.docsiteassets.roblox.com/assets/bltf78765806231bc92/TrailSegments2.png
[2]: https://prod.docsiteassets.roblox.com/assets/blta001a4353eae2502/Trail.gif
[3]: https://prod.docsiteassets.roblox.com/assets/bltbed0b1f9276adeb8/BasicTrail.gif