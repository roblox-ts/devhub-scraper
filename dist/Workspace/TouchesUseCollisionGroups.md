This property determines whether [`parts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in different
groups set to not collide will ignore collisions and touch events. By
default, the value of this property is set to `false`.

When this property is enabled, parts in different groups set to not
collide will also ignore the [`CanTouch`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanTouch) property,
similar to how [`BasePart.CanCollide`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanCollide) is ignored. For more
information on the behavior of CanTouch, please visit its property page.