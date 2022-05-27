**ServerScriptService** is a container service for [Script](https://create.roblox.com/docs/reference/engine/classes/Script), [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript)
and other scripting-related assets that are only meant for server use. The
contents are never replicated to player clients at all, which allows for a
secure storage of important game logic. Script objects will run if they are
within this service and not [Disabled](https://create.roblox.com/docs/reference/engine/classes/BaseScript#Disabled).

This service houses just one property,
[LoadStringEnabled](https://create.roblox.com/docs/reference/engine/classes/ServerScriptService#LoadStringEnabled), which determines
whether the `loadstring` function in Lua is enabled. It's recommended to keep
this disabled for security reasons, as misusing this function can lead to
remote code execution vulnerabilities.

Scripts running in ServerScriptService may need access to various other assets
which are not scripting-related, such as prefabricated models to be
[cloned](https://create.roblox.com/docs/reference/engine/classes/Instance#Clone). Such assets should go in [ServerStorage](https://create.roblox.com/docs/reference/engine/classes/ServerStorage), which
behaves similarly to this service except that [Script](https://create.roblox.com/docs/reference/engine/classes/Script) objects will not run
even if they are not [Disabled](https://create.roblox.com/docs/reference/engine/classes/BaseScript#Disabled). Assets and [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript)
that are useful to both the server and clients should go in
[ReplicatedStorage](https://create.roblox.com/docs/reference/engine/classes/ReplicatedStorage) instead. Finally, you can further organize objects within
this service through the use of [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder)s without affecting the way it
behaves.