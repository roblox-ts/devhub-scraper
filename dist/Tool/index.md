Tools are objects that a [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) object can equip. For players, they are
stored in a [Backpack](https://create.roblox.com/docs/reference/engine/classes/Backpack) object parented to a [Player](https://create.roblox.com/docs/reference/engine/classes/Player) object. In-game, players
may have multiple tools which appear as icons at the bottom of the screen.
Equipping a tool moves it from the Backpack and into a player's
[character](https://create.roblox.com/docs/reference/engine/classes/Character) model in the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace). By default, tools are held in
the right hand and have a handle in them, which is a [Part](https://create.roblox.com/docs/reference/engine/classes/BasePart) named
"Handle" inside (though one is not required if [Tool.RequiresHandle](https://create.roblox.com/docs/reference/engine/classes/Tool#RequiresHandle) is off).
Tools that are to be provided to (re)spawning players ought to be stored in
the [StarterPack](https://create.roblox.com/docs/reference/engine/classes/StarterPack).

On desktop, pressing a number key (1, 2, 3...) will equip a tool. Equipped
tools can be dropped into the Workspace by pressing Backspace. It's
recommended that you turn [Tool.CanBeDropped](https://create.roblox.com/docs/reference/engine/classes/Tool#CanBeDropped) off so it is not possible to
drop a tool, die, respawn and drop again to duplicate tools. On gamepads, LB
and RB buttons will equip tools. You can disable activation via left click (or
right trigger on gamepad) by setting [Tool.ManualActivationOnly](https://create.roblox.com/docs/reference/engine/classes/Tool#ManualActivationOnly) on. Doing so
requires that you call Activate yourself through some sort of other user
input.

Tools are not the only way to capture user input. You can also use
[ContextActionService](https://create.roblox.com/docs/reference/engine/classes/ContextActionService), [UserInputService](https://create.roblox.com/docs/reference/engine/classes/UserInputService) or [Player:GetMouse](https://create.roblox.com/docs/reference/engine/classes/Player#GetMouse). If you need a
Tool to have multiple actions, such as pressing a key while the Tool is
equipped, you should use ContextActionService's
[BindAction](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction) and
[UnbindAction](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#UnbindAction) in the
[Equipped](https://create.roblox.com/docs/reference/engine/classes/Tool#Equipped) and [Unequipped](https://create.roblox.com/docs/reference/engine/classes/Tool#Unequipped) events,
respectively. Use a [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) send these actions to the server via a
[RemoteFunction](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction) inside the Tool.