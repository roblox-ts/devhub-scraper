This property determines which parts of the surface are metal and are
non-metal. A metalness map is a grayscale image where black pixels
correspond to non-metals and white pixels correspond to metals.

Metals only reflect light the same color as the metal, and they reflect
much more light than non-metals. Most materials in the real world can be
categorized either metals or non-metals. For this reason, most pixels in a
metalness map will be either pure black or pure white. Values in between
are typically used to simulate dirt or grunge on top of an underlying
metal area.

Here's an example of a piece of metal with a layer of paint on top. Most
paints are non-metallic, so the metalness map is black everywhere except
on unpainted metal parts and spots where the paint has chipped away and
the underlying metal is visible.

![Metalness jetpack](https://prod.docsiteassets.roblox.com/assets/legacy/jetpack.gif)

![Map explanation](https://prod.docsiteassets.roblox.com/assets/legacy/metalness-explained.png)

When [`Lighting.EnvironmentSpecularScale`](https://create.roblox.com/docs/reference/engine/classes/Lighting#EnvironmentSpecularScale) is 0, metalness has no
effect. For the most realistic reflections, setting
EnvironmentSpecularScale and [`Lighting.EnvironmentDiffuseScale`](https://create.roblox.com/docs/reference/engine/classes/Lighting#EnvironmentDiffuseScale) to
1, and [`Lighting.Ambient`](https://create.roblox.com/docs/reference/engine/classes/Lighting#Ambient) and [`Lighting.OutdoorAmbient`](https://create.roblox.com/docs/reference/engine/classes/Lighting#OutdoorAmbient) to
(0,0,0) is recommended.