The UnionOperation combines parts together into a single solid model. To use
it, select the parts you want to combine and click the **Union** button in the
**Model** tab. This will create a new part called **Union**.

![undefined](https://prod.docsiteassets.roblox.com/assets/blt12f1f9b92d9773ec/CSG-Union-Button.png)

This function can be used in conjunction with [NegateOperation](https://create.roblox.com/docs/reference/engine/classes/NegateOperation) to shape,
resize, and create holes in solid models. Combined parts can also be
separated, allowing developers to revert (undo) the result of a unioned model.

You should only use **Union** on basic parts (block, sphere, wedge, or
cylinder). Also, these parts should **not** have any children such as scripts,
surface GUIs, etc. If a part with children is unioned, the children will be
hidden from the [DataModel](https://create.roblox.com/docs/reference/engine/classes/DataModel).

See also:

- [Solid modeling](/building-and-visuals/modeling/solid-modeling),
  an article that dives into solid modeling and how it lets you create complex
  models from simple blocks, spheres, wedges, and cylinders
- [In
  Game Solid Modeling](https://developer.roblox.com/articles/in-game-solid-modeling), an article discussing how developers can perform
  solid modeling live in-game as well as in Studio