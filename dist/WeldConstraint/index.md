**WeldConstraint** connects two [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) and ensures they
stay in the same relative position/orientation to each other, meaning that if
one part moves, the other moves the same amount. Even if the two parts are not
touching, they can be welded together.

The most common way to create a weld constraint is by selecting **Weld**
through Studio's **Create** menu in the [Model](https://create.roblox.com/docs/studio/model-tab)
tab.

![Constraint picker indicated in Studio toolbar](https://prod.docsiteassets.roblox.com/assets/studio/general/Model-Tab-Constraints-Create-Menu.png)

Note that this tool behaves differently depending on how many
[`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) are selected when the tool is activated:

- If no [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) are selected, the next two
[`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) clicked will be connected by a new
[`WeldConstraint`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint). If the same [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) is clicked twice, no
constraint will be created.
- If one [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) is already selected, the next [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)
clicked will be connected to the selected one with a new
[`WeldConstraint`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint).
- If multiple [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) are selected, those which are
touching or overlapping will be automatically welded together by new
[`WeldConstraints`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint).

#### Repositioning Behavior

Moving a welded [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) behaves differently depending on whether the
part was moved through its [`Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position) or through its
`Datatype.CFrame`.

- 

If a welded part's [`Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position) is updated, that part
will move but none of the connected parts will move with it. The weld will
recalculate the offset from the other parts based on the moved part's new
position.

- 

If a welded part's `Datatype.CFrame` is updated, that part will move **and**
all of the connected parts will also move, ensuring they maintain the same
offset as when the weld was created.