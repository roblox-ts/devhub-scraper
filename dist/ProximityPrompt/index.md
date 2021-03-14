The ProximityPrompt is an object that allows developers to prompt users to interact with an object in the 3D world, such as opening a door or picking up an item.

ProximityPrompts work when parented to a [Part](https://developer.roblox.com/en-us/api-reference/class/Part), [Model](https://developer.roblox.com/en-us/api-reference/class/Model), or [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment) in the workspace.  
In order to detect when the user interacts with the object, listen for the Triggered event on the ProximityPrompt in either a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript), as in this simple example:

workspace.Part.ProximityPrompt.Triggered:Connect(function(player)
    print("The user interacted with me!")
end)

When a user is near, a UI will appear to prompt them for input. This works for all input types - keyboard, gamepad, and touchscreen.

The provided UI can be swapped out for your own custom UI. See [ProximityPrompt.Style](https://developer.roblox.com/en-us/api-reference/property/ProximityPrompt/Style) for details.

### Prompt Appearance

Prompts consist of three primary elements, each of which can be controlled by the following properties:

![](https://developer.roblox.com/assets/blt452f8e22e82a11d8/ProximityPrompt-Diagram.png)

* * *

*   **ObjectText** — An optional name for the object being interacted with.
*   **ActionText** — An optional action name shown to the player.
*   **KeyboardKeyCode** — The keyboard key which will trigger the prompt.
*   **GamepadKeyCode** — The gamepad button which will trigger the prompt.

See also
--------

For more information regarding ProximityPrompts, take a look at the [Proximity Prompts](https://developer.roblox.com/en-us/articles/proximity-prompts).