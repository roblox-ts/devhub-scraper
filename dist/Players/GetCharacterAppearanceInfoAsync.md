This function returns information about a player's avatar (ignoring gear)
on the Roblox website in the form of a dictionary. It is not to be
confused with
[`GetCharacterAppearanceAsync`](https://create.roblox.com/docs/reference/engine/classes/Players#GetCharacterAppearanceAsync),
which actually loads the assets described by this method. You can use
[`InsertService:LoadAsset()`](https://create.roblox.com/docs/reference/engine/classes/InsertService#LoadAsset) to load the assets that are used in the
player's avatar. The structure of the returned dictionary is as follows:
| Name | Type | Description |
| - | - | - |
| `assets` | table (see below) | Describes the equipped assets (hats, body parts, etc) |
| `bodyColors` | table (see below) | Describes the BrickColor values for each limb |
| `bodyColors3` | table (see below) | Describes the Color3 instance for each limb which may not match perfectly with bodyColors |
| `defaultPantsApplied` | bool | Describes whether default pants are applied |
| `defaultShirtApplied` | bool | Describes whether default shirt is applied |
| `emotes` | table (see below) | Describes the equipped emote animations |
| `playerAvatarType` | string | Either "R15" or "R6" |
| `scales` | table (see below) | Describes various body scaling factors |

#### Assets sub-table

The assets table is an array of tables containing the following keys that
describe the assets currently equipped by the player:
| Name | Type | Description |
| - | - | - |
| `id` | number | The asset ID of the equipped asset |
| `assetType` | table | A table with `name` and `id` fields, each describing the kind of asset equipped ("Hat", "Face", etc.) |
| `name` | string | The name of the equipped asset |

#### Scales sub-table

The scales table has the following keys, each a number corresponding to
one [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) scaling property: `bodyType`, `head`, `height`,
`proportion`, `depth`, `width`.``
#### Body Colors sub-table

The body colors table has the following keys, each a number corresponding
to a [`BrickColor`](https://create.roblox.com/docs/reference/engine/datatypes/BrickColor) ID number which can be used with
[`BrickColor`](https://create.roblox.com/docs/reference/engine/datatypes/BrickColor): `leftArmColorId`, `torsoColorId`,
`rightArmColorId`, `headColorId`, `leftLegColorId`, `rightLegColorId`.