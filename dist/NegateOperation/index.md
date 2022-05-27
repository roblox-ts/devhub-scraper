The NegateOperation creates a CSG part that can be removed from other part via
solid modeling. To use it, select a part and click the **Negate** button in
the **Model** tab.

![undefined](https://prod.docsiteassets.roblox.com/assets/blt7dc16d2d629426a6/CSG-Negate-Button.png)

This will convert the part to a "negative part" (it will turn red and
translucent to indicate this). If this negative part is unioned with a normal
part using the **Union** tool, the section of the parts which overlap will be
cut out.

This function can be used in conjunction with [UnionOperation](https://create.roblox.com/docs/reference/engine/classes/UnionOperation) to shape,
resize, and create holes in solid models. Combined parts can also be
separated, allowing developers to revert (undo) the result of a unioned model.

Note that you can undo part negation by selecting the negated part and
clicking **Negate** again.

See also:

- [Solid modeling](/building-and-visuals/modeling/solid-modeling),
  an article that dives into solid modeling and how it lets you create complex
  models from simple blocks, spheres, wedges, and cylinders
- [In
  Game Solid Modeling](https://developer.roblox.com/articles/in-game-solid-modeling), an article discussing how developers can perform
  solid modeling live in-game as well as in Studio