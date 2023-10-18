The StarterPlayerScripts is a container object located within the
[`StarterPlayer`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer) service. It contains [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s and other
objects to be copied to the [`PlayerScripts`](https://create.roblox.com/docs/reference/engine/classes/PlayerScripts) container once when a
[`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) joins the game. For example, if you want to create special
effects on the client when certain conditions are met, you can place a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) within this object to do that.

This object is also a good place for [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s that define
additional inputs with [`ContextActionService`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService). For inputs that are only
relevant when a player has spawned in, you can use
[`ContextActionService:BindAction()`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction) when the [`Players.LocalPlayer`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer)
character spawns. Then, use [`ContextActionService:UnbindAction()`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#UnbindAction) when
they die or despawn.

When a game is run, this object will also house the default multi-platform
Roblox control scripts for the camera and character. If [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s
named "CameraScript" or "ControlScript" are placed within this folder, they
will **replace** the Roblox defaults for those scripts respectively. You can
add empty LocalScripts for each of these to simply disable them altogether.
This is useful for games that do not follow the usual control paradigms of a
3rd person game.