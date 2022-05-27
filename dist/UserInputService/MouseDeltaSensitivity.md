This property determines the sensitivity of the user's [Mouse](https://create.roblox.com/docs/reference/engine/classes/Mouse).

The sensitivity determines the extent to which a movement of the physical
mouse translates to a movement of the mouse in-game. This can be used to
adjusted how sensitive events tracking mouse movement, like
[GetMouseDelta](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetMouseDelta), are to mouse movement.

This property does not affect the movement of the mouse icon. Nor does it
affect the _Camera Sensitivity_ setting found in the _Settings_ tab of the
client's _Settings_ menu, which also adjusts the sensitivity of events
tracking mouse movement.

This property has a maximum value of 10 and a minimum value of 0. A lower
value corresponds to lower sensitivity, and a higher value to higher
sensitivity.

When sensitivity is 0, events that track the mouse's movement will still
fire but all parameters and properties indicating the change in mouse
position will return [Vector2.new()](https://developer.roblox.com/en-us/api-reference/datatype/Vector2), or
[Vector3.new()](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) in the case of
[InputObject.Delta](https://create.roblox.com/docs/reference/engine/classes/InputObject#Delta). For example,
[GetMouseDelta](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetMouseDelta) will always return (0, 0).