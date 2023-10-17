`DisplayName` is a property that determines the Humanoid's name display
when visible. By default, a new Humanoid will have the value of an empty
string. If `DisplayName` is an empty string, the humanoid's name display
will default to the humanoid's parent's name property.

**Player Character Loading** When players load their character, either
automatically or through the use of
[`LoadCharacter()`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacter), the Humanoid that is
created by the engine will have its `DisplayName` property set to the
player's `DisplayName` property.

**StarterCharacter and StarterHumanoid** When a Humanoid named
`StarterHumanoid` is parented to [`StarterPlayer`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer), or when a Humanoid
is present in a Model named `StarterCharacter`, the DisplayName property
will be respected when Characters are loaded by Players in the game. The
engine will only override the `DisplayName` property of the Humanoid with
the `DisplayName` property of the player if the `StarterHumanoid`'s
`DisplayName` property is an empty string.