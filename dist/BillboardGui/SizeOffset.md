A 2D offset in size-relative units that acts like an anchor point. This
can be used similarly to the [GuiObject.AnchorPoint](https://create.roblox.com/docs/reference/engine/classes/GuiObject#AnchorPoint) property, but the
values are different.

#### Common Values

| SizeOffset | Explanation                                         |
| ---------: | --------------------------------------------------- |
|   0.0, 0.0 | The default. The UI will be anchored at its center. |
|   0.5, 0.5 | The UI will anchor at the bottom left.              |
|  0.5, -0.5 | The UI will anchor at the top left.                 |
|  -0.5, 0.5 | The UI will anchor at the top right.                |
| -0.5, -0.5 | The UI will anchor at the bottom right.             |

See also:

- [StudsOffset](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#StudsOffset),
  [StudsOffsetWorldSpace](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#StudsOffsetWorldSpace),
  [ExtentsOffset](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#ExtentsOffset),
  [ExtentsOffsetWorldSpace](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#ExtentsOffsetWorldSpace), which
  are all other offset properties that work in 3D space instead