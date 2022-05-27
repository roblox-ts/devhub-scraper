The NoCollisionConstraint is an instance used to prevent collisions between
two specific parts. Connected [Parts](https://create.roblox.com/docs/reference/engine/classes/BasePart) will have no collision reaction
between them, but can still have collisions with the rest of the world. Both
parts can still receive touch events.

Using a NoCollisionConstraint allows you to create and share [Models](https://create.roblox.com/docs/reference/engine/classes/Model)
with customized collision filtering. You can still achieve collision filtering
with [Collision Groups][1], but you can't export that information to a model
without adding a script to set them when the game runs.

It also provides a quicker way to disable specific problematic collisions.
However, if you are trying to spot a large number of parts from colliding with
another, it might be better to use [Collision Groups][2].

![NoCollisionConstraint Demo][3]

The easiest way to add an NoCollisionConstraint is from the Create Constraint
dropdown menu.

![Creating a NoCollisionConstraint][4]

Similar to other constraints, this tool will act differently based on how many
parts are selected when the tool is activated.

## No Parts Selected

If no parts are selected when the NoCollisionConstraint tool is clicked, the
next two parts that are clicked on will be connected. If the same part is
clicked twice no link will be created.

## One Part Selected

If one part is selected when the NoCollisionConstraint tool is clicked, the
next part that is clicked on will be connected to the selected part.

## Two Parts Selected

If two parts are selected when the NoCollisionConstraint tool is clicked, the
two parts will be connected. You cannot create an NoCollisionConstraint with
more than two parts selected.

[1]: /building-and-visuals/physics/collision-filtering
[2]: /building-and-visuals/physics/collision-filtering
[3]: https://prod.docsiteassets.roblox.com/assets/blt1bdbb753907c17e2/NoCollisionConstraintDemo-min.gif
[4]: https://prod.docsiteassets.roblox.com/assets/bltfc3e108f2decb90f/SettingNoCollisionConstraint-min.gif