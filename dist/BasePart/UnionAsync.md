This is a server-only function that uses [CSG](https://developer.roblox.com/en-us/api-reference/class/articles/3D Modeling with Parts) to combine the geometry of the calling [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) with a table of other BaseParts.

  
The following properties from the calling part will be applied to the resulting part:

*   Color
*   Material
*   Reflectance
*   Transparency

*   Anchored
*   CanCollide
*   Density
*   Friction

*   Elasticity
*   FrictionWeight
*   ElasticityWeight

The resulting union instance will have a null parent and will be named “Union”. If the resulting union's [PartOperation.UsePartColor](https://developer.roblox.com/en-us/api-reference/property/PartOperation/UsePartColor) is false, it is rendered with face colors. Face colors of the result come from colors of its constituent parts. Its [UsePartColor](https://developer.roblox.com/en-us/api-reference/property/PartOperation/UsePartColor) property defaults to false and its `PartOperation/CollisionFidelity|CollisionFidelity` matches the provided enum.

The original parts remain in the same state and location in the game's tree as before operation.

The code snippet below demonstrates how to perform the operation as described above:

local part = workspace.Part1
local otherParts = {workspace.Part2, workspace.Part3, workspace.Part4}
 
-- Perform union operation
local newUnion = part:UnionAsync(otherParts)

The image below visualizes parts before and after the operation. The green parts are combined with the grey part.

![Union Visualization](https://developer.roblox.com/assets/bltca314c0a724d0212/UnionAsync.jpg)

Note that if a [NegateOperation](https://developer.roblox.com/en-us/api-reference/class/NegateOperation) is provided, it will also be unioned additively. For subtraction, use `BasePart/SubtractAsync|SubtractAsync()`.

The original parts remain unchanged following a successful union operation. In most cases, you should destroy all of the original parts and parent the returned [UnionOperation](https://developer.roblox.com/en-us/api-reference/class/UnionOperation) to the same place as the calling [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart).

Potential Errors
----------------

*   There is a limit to how many parts can be generated. If a union operation would result in a part with more than 5000 triangles, it will fail and Studio will alert you to the error in the Output window.
*   A part made with solid modeling can only use **one** color and material. If you union two parts with different colors/materials, the result will use the characteristics of just one of the parts.
*   A unioned or negated part can only be scaled uniformly (all of the dimensions must be scaled at the same proportion). If you need to change the size of just one part in a solid model construction, it may be easier to un-union that part, resize it, and then redo the union process.
*   This function can only be called from the server. It cannot be called by the client.
*   All parts must be supported by CSG. Only \`BasePart|BaseParts\` are supported, not \`Terrain\` or meshes. If A union operation involving any non-supported part will fail and Studio will alert you to the error in the Output window.
*   The resulting union cannot be empty due to subtractions. If a union operation would result in an empty part, it will fail and Studio will alert you to the error in the Output window.

Solid-Modeling Playground
-------------------------

Now that you understand basic in-game solid modeling, experience it within a sample place!

[![](https://developer.roblox.com/assets/blt5a9c2e3521e643da/In-Game-CSG-Playground1.jpg)](https://www.roblox.com/games/2309627316/Rotating-Windows)

#### Rotating Windows

Blast pieces out of rotating windows or fuse new material onto them. Includes a helper module script that rebuilds mechanisms with constraints and attachments!

See also
--------

*   `articles/In Game Solid Modeling`, create custom plugins for solid modeling techniques like unions, negations, and separations
*   `articles/3D Modeling with Parts`, how to combine and subtract parts to create complex solid shapes
*   `articles/Making an Arch`, make an arch for your environment using the Negate tool