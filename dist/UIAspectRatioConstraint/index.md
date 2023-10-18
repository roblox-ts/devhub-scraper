A UIAspectRatioConstraint ensures that the parent UI element
([`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject)) maintains a particular aspect ratio even if its size is
set as a percentage of its parent. If an object with this constraint is also
under the control of a [`UILayout`](https://create.roblox.com/docs/reference/engine/classes/UILayout) such as [`UIGridLayout`](https://create.roblox.com/docs/reference/engine/classes/UIGridLayout), then the
constraint controls the objects size and overwrites any size the layout would
apply.

When applied to a GuiObject, the UIAspectRatioConstraint will make sure that
the objects ratio is maintained by the value defined in
[`UIAspectRatioConstraint.AspectRatio`](https://create.roblox.com/docs/reference/engine/classes/UIAspectRatioConstraint#AspectRatio). The
[`UIAspectRatioConstraint.AspectType`](https://create.roblox.com/docs/reference/engine/classes/UIAspectRatioConstraint#AspectType) sets what determines the maximum
size of the object. When set to
[`UIAspectRatioConstraint.FitWithinMaxSize`](https://create.roblox.com/docs/reference/engine/classes/UIAspectRatioConstraint#FitWithinMaxSize), the constraint will make the
object the maximum size it can be within the [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) of the element.
When set to ScaleWithParentSize, the elements maximum size will be the size of
the parent while still maintaining the aspect ratio. Finally, the
[`UIAspectRatioConstraint.DominantAxis`](https://create.roblox.com/docs/reference/engine/classes/UIAspectRatioConstraint#DominantAxis) will determine which axis to use
when setting the new size of the element.