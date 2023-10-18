Toggling SelectionGroup on for a GUI allows customization of how gamepad
selection can move between buttons, which are descendants of the
SelectionGroup, leaves the group, and selects other buttons. Setting
SelectionGroup to true exposes the SelectionBehaviorUp/Down/Left/ Right
properties, which can be set to [`Enum.SelectionBehavior`](https://create.roblox.com/docs/reference/engine/enums/SelectionBehavior) or
[`Enum.SelectionBehavior`](https://create.roblox.com/docs/reference/engine/enums/SelectionBehavior). Escape is the default behavior. When set to
Escape, the gamepad selection tries to first find a selection within the
SelectionGroup and only moves outside if it does not find a suitable
button. When set to Stop, gamepad selection only looks within the
SelectionGroup and does not move outside of the group from the
SelectionBehavior direction.