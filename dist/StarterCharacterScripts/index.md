The StarterCharacterScripts class stores scripts to be parented in a player's
`Player.Character`, when they spawn. Unlike scripts stored in the
[PlayerScripts](/reference/engine/classes/PlayerScripts) folder,
these scripts will not persist when the player respawns.

If a script named **Animate**, **Sound** or **Health** is placed in this
folder, they will replace the default scripts that are added to each
`Player.Character` that is created.