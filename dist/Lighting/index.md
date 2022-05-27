Fog properties are hidden when Lighting contains an
[Atmosphere](Atmosphere) object.

The Lighting service controls the environmental lighting in a game. It
includes a range of adjustable properties that can be used to change how
lighting appears and interacts with other objects.

Developers can change the color and appearance of lighting in their place
using properties such as [Lighting.Ambient](https://create.roblox.com/docs/reference/engine/classes/Lighting#Ambient) and [Lighting.OutdoorAmbient](https://create.roblox.com/docs/reference/engine/classes/Lighting#OutdoorAmbient).

In addition to controlling environmental lighting, the Lighting service also
configures any fog in the game using the [Lighting.FogColor](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogColor),
[Lighting.FogStart](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogStart) and [Lighting.FogEnd](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogEnd) properties.

Lighting, along with [Workspace.CurrentCamera](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera), is one of the two places where
[PostEffect](https://create.roblox.com/docs/reference/engine/classes/PostEffect)s such as the [SunRaysEffect](https://create.roblox.com/docs/reference/engine/classes/SunRaysEffect) and [BlurEffect](https://create.roblox.com/docs/reference/engine/classes/BlurEffect) are displayed once
parented to.

Note:

- Lighting only controls environmental lighting and not dynamic light objects
  such as the [PointLight](https://create.roblox.com/docs/reference/engine/classes/PointLight)
- Prior to the introduction of [ServerStorage](https://create.roblox.com/docs/reference/engine/classes/ServerStorage) and [ReplicatedStorage](https://create.roblox.com/docs/reference/engine/classes/ReplicatedStorage)
  lighting was used for storage. This behavior is not supported and should not
  be used in new work