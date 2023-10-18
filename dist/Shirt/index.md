![A default rig wearing a very dapper Shirt (rbxassetid://86896487)](https://prod.docsiteassets.roblox.com/assets/legacy/Shirt.jpg)

The **Shirt** object displays a Shirt texture from the Roblox website on a
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) rig. Shirts cover the torso and arms, and will take priority
over a [`Pants`](https://create.roblox.com/docs/reference/engine/classes/Pants) on the torso. To be visible, a Shirt must be a sibling of
a Humanoid and have its [`ShirtTemplate`](https://create.roblox.com/docs/reference/engine/classes/Shirt#ShirtTemplate) property set
to an appropriate texture (such as `rbxassetid://86896487`, pictured to the
right). The shirt texture may be colorized using the [`Clothing.Color3`](https://create.roblox.com/docs/reference/engine/classes/Clothing#Color3)
property.

Shirts are automatically loaded on [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) characters if their avatar
is wearing one.

See also:

- [`Pants`](https://create.roblox.com/docs/reference/engine/classes/Pants), an object which works similarly with the torso and legs