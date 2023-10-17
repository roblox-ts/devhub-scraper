The **ProximityPrompt** instance lets you prompt players to interact with an
object in the 3D world, such as opening a door or picking up an item. A
[`ProximityPrompt`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt) object works when parented to a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart),
[`Model`](https://create.roblox.com/docs/reference/engine/classes/Model), or [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) in the workspace. When the player's
character approaches, a UI appears to prompt them for input.

Prompts consist of three primary elements, each of which can be controlled by
the noted properties. The default UI can be swapped out for your own custom
appearance as outlined in [`Style`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#Style).
![undefined](https://prod.docsiteassets.roblox.com/assets/ui/proximity-prompt/Prompt-Diagram.png)
| Property | Description | Default |
| - | - | - |
| [`ObjectText`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#ObjectText) | An optional name for the object being interacted with. |  |
| [`ActionText`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#ActionText) | An optional action name shown to the player. | Interact |
| [`KeyboardKeyCode`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#KeyboardKeyCode) | The keyboard key which will trigger the prompt. | E |
| [`GamepadKeyCode`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#GamepadKeyCode) | The gamepad button which will trigger the prompt. | ButtonX |

You can connect to proximity prompt events either on the
[`ProximityPrompt`](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt) object itself or globally through
[`ProximityPromptService`](https://create.roblox.com/docs/reference/engine/classes/ProximityPromptService). The [`ProximityPromptService`](https://create.roblox.com/docs/reference/engine/classes/ProximityPromptService) allows you
to manage all proximity prompt behavior from one location, preventing any need
for duplicate code in your experience.

For more information regarding proximity prompts, see the
[Proximity Prompts](https://create.roblox.com/docs/ui/proximity-prompts) guide.