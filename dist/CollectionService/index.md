The [`CollectionService`](https://create.roblox.com/docs/reference/engine/classes/CollectionService) manages groups (collections) of instances with
tags. Tags are sets of strings applied to objects that replicate from the
server to the client and in Team Create. They are also serialized when places
are saved. At the moment, tags are not visible within Roblox Studio except
with the use of a tag-editing plugin.

The primary use of [`CollectionService`](https://create.roblox.com/docs/reference/engine/classes/CollectionService) is to register instances with
specific tags that you can use to extend their behavior. If you find yourself
adding the same script to many different objects, perhaps a script that uses
CollectionService would be better. Here are a couple examples:

- In an obstacle course with many bricks that kill players, don't paste the
same script in all your kill bricks! Instead, tag them with "KillBrick".
Then, have any brick tagged as such kill the player.
- Players with a VIP game pass could have their [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) tagged "VIP",
and be allowed through doors that only allow VIPs.
- When creating a freeze-tag game, you could tag frozen players'
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) objects with a "Frozen" tag. Then, use a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) to listen for the "Frozen" tag and create client-side
visual effects to reduce the number of objects replicated from server to
client.

When working with collections and tags, it's a good idea to use an
[object-oriented programming style](https://create.roblox.com/docs/https://www.lua.org/pil/16.html). In
almost all situations, tagged objects have their own identity, state and
behavior. The pattern goes like this: when a tag is found
([`CollectionService:GetTagged()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetTagged) and
[`CollectionService:GetInstanceAddedSignal()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetInstanceAddedSignal)), create a Lua object with
the Roblox instance. When it is removed
([`CollectionService:GetInstanceRemovedSignal()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetInstanceRemovedSignal)), call a cleanup/destroy
method within the Lua object. See the code samples for a better idea of how
this can be done.
## Replication

When tags replicate, **all tags on an object replicate at the same time**.
Therefore, if you set a tag on an object from the client then add/remove a
**different** tag on the same object from the server, the client's local tags
on the object are overwritten. In
[`StreamingEnabled`](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingEnabled) places, instances can be
unloaded as they leave the client's streamed area. If such an instance
re-enters the streamed area, properties and tags will be re-synchronized from
the server. This can cause changes made by [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s to be
overwritten/removed.