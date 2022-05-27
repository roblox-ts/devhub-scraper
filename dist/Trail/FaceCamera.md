The FaceCamera property determines whether the [Trail](https://create.roblox.com/docs/reference/engine/classes/Trail) is always drawn
facing the camera. The default value is false.

If set to true, the trail textures will always face the camera. If set to
false, the texture will be drawn in the direction of the distance between
the trail's [Trail.Attachment0](https://create.roblox.com/docs/reference/engine/classes/Trail#Attachment0) and [Trail.Attachment1](https://create.roblox.com/docs/reference/engine/classes/Trail#Attachment1).

Note that changing this property immediately affects all existing and
future trail segments. This means that all existing and new segments will
adjust to face the player's camera or the direction of the attachments
according to the property's new state.

#### FaceCamera Enabled

![Demonstrating a trail with the FaceCamera property set to true.][1]

    local trail = script.Parent
    trail.FaceCamera = true

#### FaceCamera Disabled

![Demonstrating a trail with the FaceCamera property set to false.][2]

    local trail = script.Parent
    trail.FaceCamera = false

[1]: https://prod.docsiteassets.roblox.com/assets/blt9c08878433714397/TrailFacingCamera.gif
[2]: https://prod.docsiteassets.roblox.com/assets/bltfd829c76c7a0d037/TrailNotFacingCamera.gif