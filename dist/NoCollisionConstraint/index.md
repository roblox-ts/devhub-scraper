The **NoCollisionConstraint** prevents collisions between two specific parts,
but those parts may still register collisions with the rest of the world.
Compared to
[collision groups](https://create.roblox.com/docs/workspace/collisions#collision-filtering), it
provides a direct way to disable specific collisions, such as the wheel of a
car scraping against the car's body.

The most common way to create this constraint is by selecting
**No Collision** through Studio's **Create** menu in the
[Model](https://create.roblox.com/docs/studio/model-tab) tab.

![Constraint picker indicated in Studio toolbar](https://prod.docsiteassets.roblox.com/assets/studio/general/Model-Tab-Constraints-Create-Menu.png)

Unlike most constraints, [`NoCollisionConstraint`](https://create.roblox.com/docs/reference/engine/classes/NoCollisionConstraint) does not utilize any
[`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment). Note that the tool acts differently based on
how many parts are selected when the tool is activated:
| Option | Tool Behavior |
| - | - |
| No parts selected | The next two parts that are clicked will be linked together. If the same part is clicked twice, no link will be created. |
| One part selected | The next part that is clicked will be linked to the selected part. |
| Two parts selected | Both selected parts will be linked together. |