This property determines whether to render both faces or polygons in the
mesh. It is only changeable in Studio. This is useful for meshes that are
typically modeled as cards such as a leaf, hair and cloth.

Example: The tree leaves are modeled with single sided cards.

![Leaves as cards](https://prod.docsiteassets.roblox.com/assets/legacy/MeshPartsAsCards.png)

With MeshPart.DoubleSided disabled some leaves are missing since they are
back facing the camera.

![DoubleSided property disabled](https://prod.docsiteassets.roblox.com/assets/legacy/DoubleSidedOff.png)

With MeshPart.DoubleSided enabled, both faces of the leaves are rendered.

![DoubleSided property enabled](https://prod.docsiteassets.roblox.com/assets/legacy/DoubleSidedOn.png)