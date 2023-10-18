The **CharacterAdded** event fires when a player's character spawns (or
respawns). This event fires soon after setting [`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) to
a non-`nil` value or calling [`Player:LoadCharacter()`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacter), which is
before the character is parented to the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace).

This can be used alongside the [`Player.CharacterRemoving`](https://create.roblox.com/docs/reference/engine/classes/Player#CharacterRemoving) event,
which fires right before a player's character is about to be removed,
typically after death. As such, both of these events can potentially fire
many times as players die then respawn in a place. If you want to detect
when a player joins or leaves the game, use the
[`Players.PlayerAdded`](https://create.roblox.com/docs/reference/engine/classes/Players#PlayerAdded) and [`Players.PlayerRemoving`](https://create.roblox.com/docs/reference/engine/classes/Players#PlayerRemoving) events
instead.

Note that the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) and its default body parts (head, torso,
and limbs) will exist when this event fires, but clothing items like
[`Hats`](https://create.roblox.com/docs/reference/engine/classes/Hat), [`Shirts`](https://create.roblox.com/docs/reference/engine/classes/Shirt), and [`Pants`](https://create.roblox.com/docs/reference/engine/classes/Pants) may take a few
seconds to be added to the character. Connect [`Instance.ChildAdded`](https://create.roblox.com/docs/reference/engine/classes/Instance#ChildAdded)
on the added character to detect these, or wait for the
[`Player.CharacterAppearanceLoaded`](https://create.roblox.com/docs/reference/engine/classes/Player#CharacterAppearanceLoaded) event to be sure the character
has everything equipped.