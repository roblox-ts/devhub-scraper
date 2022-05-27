The purpose of the PackageLink object is to link a [DataModel](https://create.roblox.com/docs/reference/engine/classes/DataModel) instance to a
corresponding asset in the cloud. This improves flows for collaboration,
version control and sharing for models. The PackageLink instance will be a
child of the root of the entire package hierarchy.

![PackageLink in Studio Explorer][1]

In this case PackageLink designates [Model](https://create.roblox.com/docs/reference/engine/classes/Model) to be the root of the Package
hierarchy.

They not creatable through [scripts](https://create.roblox.com/docs/reference/engine/classes/Script). They can only be added through
interaction with Studio and can only be parented to [Instances](https://create.roblox.com/docs/reference/engine/classes/Instance) that
can be published independently of DataModel publish. The PackageLink instance
will always be the first child shown in the tree view, regardless of sorting.

[1]: https://prod.docsiteassets.roblox.com/assets/blt1cb3d894c9e965ba/PackageLink.jpg