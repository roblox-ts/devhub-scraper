The GetMass function returns the `BasePart|part's` mass.

This can vary depending on the part's [material](https://developer.roblox.com/en-us/api-reference/property/BasePart/Material) and the size. The `Enum/Material| material enum` page contains a table of all materials and their densities. Parts made of materials with greater densities have more mass than equally sized parts made of materials with lesser densities.

Note that a part's density differs from the densities listed on the [material](http://wiki.roblox.com/index.php?title=API:Enum/Material) page if the part's [BasePart.CustomPhysicalProperties](https://developer.roblox.com/en-us/api-reference/property/BasePart/CustomPhysicalProperties) property is set.

You can also determine location of the part's center of mass via the [BasePart.CenterOfMass](https://developer.roblox.com/en-us/api-reference/property/BasePart/CenterOfMass) property.