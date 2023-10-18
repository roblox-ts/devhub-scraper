**UseLocalSpace** determines whether the studio movement/rotation tools
will manipulate a part's [`CFrame`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CFrame) using the local
space of an object or global space. By default, this setting is toggled
with Ctrl-L. Plugins can read from this property if they
implement their own object movement tools.

The table below shows how movement/rotation tools change when working with
parts. Notice how when UseLocalSpace is false, the movement tools align
with the global axes, and when true the movement tools align with the
part's local axes.
| UseLocalSpace | Movement | Rotation |
| - | - | - |
| `true` | ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/StudioService.UseLocalSpace.true.jpg) | ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/StudioService.UseLocalSpace.true.rotation.jpg) |
| `false` | ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/StudioService.UseLocalSpace.false.jpg) | ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/StudioService.UseLocalSpace.false.rotation.jpg) |