The Accessory Instance is the parent Instance of all accessories (regardless
of their specific accessory type). It typically has a child Handle with a
child Attachment and a WrapLayer in the case of Layered Clothing.

The Accessory class is the successor to the legacy Hat system. It's
cross-compatible with both the legacy R6 character system and the new R15
character system.

If you insert an [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) into the Accessory's Handle with the same
name as an [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) in one of the character's limbs, they connect
and ignore properties inherited from the [`Accoutrement`](https://create.roblox.com/docs/reference/engine/classes/Accoutrement) class.
Otherwise, the Accessory functions identically to a [`Hat`](https://create.roblox.com/docs/reference/engine/classes/Hat).

Note: If there are two matching `Attachments`, the resulting [`Weld`](https://create.roblox.com/docs/reference/engine/classes/Weld) is a
child of the Accessory's Handle. This differs from the legacy behavior of Hats
where the Weld is always a child of the Head of the character.