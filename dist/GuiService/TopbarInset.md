Returns a `Datatype.Rect` object representing the unoccupied area between
Roblox left-most control and Roblox right-most control within the top bar
space.

The value is dynamic and can be expected to change based on the visibility
of UI controls such as changing the local player's
[`Health`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Health) property, usage of
[`StarterGui:SetCoreGuiEnabled()`](https://create.roblox.com/docs/reference/engine/classes/StarterGui#SetCoreGuiEnabled), changing the size and position of
Roblox UI Controls, and/or others. For this reason, it's recommend that
you detect and react to changes of this property with
[`Instance:GetPropertyChangedSignal()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetPropertyChangedSignal).