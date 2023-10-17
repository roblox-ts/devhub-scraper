MaterialService is the game service responsible for managing materials. It is
the container for global [`MaterialVariant`](https://create.roblox.com/docs/reference/engine/classes/MaterialVariant) instances.
[`MaterialVariant`](https://create.roblox.com/docs/reference/engine/classes/MaterialVariant) can be child or descendant of MaterialService. For
each base Material type, MaterialService internally keeps a set of
MaterialVariant references. [`MaterialVariant.Name`](https://create.roblox.com/docs/reference/engine/classes/MaterialVariant#Name) is the key to access
it. The [`MaterialVariant.Name`](https://create.roblox.com/docs/reference/engine/classes/MaterialVariant#Name) and [`MaterialVariant.BaseMaterial`](https://create.roblox.com/docs/reference/engine/classes/MaterialVariant#BaseMaterial)
are combined to work as an identifier. If more than one MaterialVariant object
has the same name and BaseMaterial under MaterialService, only one of them can
be used.

MaterialService has some (Material)Name properties. Assigning a
MaterialVariant Name replaces the built-in material with the specified
MaterialVariant. If the MaterialService can't find a matching MaterialVariant,
it falls back to built-in material. Note BaseMaterial should also match, for
example, a MaterialVariant with BaseMaterial Grass can only be assigned to
MaterialService.GrassName, not AsphaltName or any other names. These
properties are not scriptable but can read and write using
[`MaterialService:GetBaseMaterialOverride()`](https://create.roblox.com/docs/reference/engine/classes/MaterialService#GetBaseMaterialOverride) and
[`MaterialService:SetBaseMaterialOverride()`](https://create.roblox.com/docs/reference/engine/classes/MaterialService#SetBaseMaterialOverride) function.

MaterialService has a [`MaterialService.Use2022Materials`](https://create.roblox.com/docs/reference/engine/classes/MaterialService#Use2022Materials) property that
switches between legacy materials and new materials introduced in year 2022.
Because legacy and user-generated (new) terrain materials use different
encoding, using legacy terrain materials and MaterialVariant at the same time
has a performance penalty. If your game is using pre-2022 terrain materials,
avoid overriding any built-in materials. Migrate to 2022 materials if
possible.