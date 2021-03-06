This property determines whether to render both faces or polygons in the mesh. It is only changeable in Studio. This is useful for meshes that are typically modeled as cards such as a leaf, hair and cloth.

Example:  
_The tree leaves are modeled with single sided cards._  
![Leaves as cards](https://developer.roblox.com/assets/blt32ec4b040982f44d/MeshPartsAsCards.png)

_With MeshPart.DoubleSided disabled some leaves are missing since they are back facing the camera._  
![DoubleSided property disabled](https://developer.roblox.com/assets/blt1955400aa4d9d8d9/DoubleSidedOff.png)

_With MeshPart.DoubleSided enabled, both faces of the leaves are rendered._  
![DoubleSided property enabled](https://developer.roblox.com/assets/blte8ab39d69cf97247/DoubleSidedOn.png)