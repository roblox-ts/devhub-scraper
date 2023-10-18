**GetStringForKeyCode** returns a string representing a key the user
should press in order to input a given [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode), keeping in mind
their keyboard layout. For key codes that require some modifier to be
held, this function returns the key to be pressed in addition to the
modifier. See the examples below for further explanation.

When using Roblox with a non‑QWERTY keyboard layout, key codes are mapped
to equivalent QWERTY positions. For example, pressing A on an
AZERTY keyboard results in [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode). This mapping can lead to
mismatched information on experience UI elements. For example, "Press
M to open the map" is inaccurate on an AZERTY keyboard; it
would need to be "Press ? to open the map" which is in the same
position as M on QWERTY. This function solves this issue by
providing the actual key to be pressed while using non‑QWERTY keyboard
layouts.
```lua
local UserInputService = game:GetService("UserInputService")

local textLabel = script.Parent
local mapKey = Enum.KeyCode.M
textLabel.Text = "Press " .. UserInputService:GetStringForKeyCode(mapKey) .. " to open the map"
```
#### Examples on QWERTY Keyboard
| KeyCode | Return Value |
| - | - |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `Q` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `W` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `=` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `2` because `@` is typed with Shift2 |

#### Examples on AZERTY Keyboard
| KeyCode | Return Value |
| - | - |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `A` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `Z` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `=` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `É` |

#### Gamepad Usage

[`GetStringForKeyCode()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetStringForKeyCode)
returns the string mapping for the [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) for the most recently
connected gamepad. If the connected controller is not supported, the
function returns the default string conversion for the requested key code.

The following example shows how you can map custom assets for
[`ButtonA`](https://create.roblox.com/docs/reference/engine/enums/KeyCode):
```lua
local UserInputService = game:GetService("UserInputService")

local imageLabel = script.Parent
local key = Enum.KeyCode.ButtonA

local mappings = {
  ButtonA = "rbxasset://BUTTON_A_ASSET",  -- Replace with the desired ButtonA asset
  ButtonCross = "rbxasset://BUTTON_CROSS_ASSET"  -- Replace with the desired ButtonCross asset
}

local mappedKey = UserInputService:GetStringForKeyCode(key)
local image = mappings[mappedKey]

imageLabel.Image = image
```
#### Gamepad Mappings

The directional pad key codes do not have any differences based on device.
[`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) has slightly different behavior in some cases.
Use both PlayStation mappings to ensure users see the correct buttons.
| KeyCode | PlayStation Return Value | Xbox Return Value |
| - | - | - |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonCross` | `ButtonA` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonCircle` | `ButtonB` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonSquare` | `ButtonX` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonTriangle` | `ButtonY` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonL1` | `ButtonLB` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonL2` | `ButtonLT` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonL3` | `ButtonLS` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonR1` | `ButtonRB` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonR2` | `ButtonRT` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonR3` | `ButtonRS` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonOptions` | `ButtonStart` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | `ButtonTouchpad` and `ButtonShare` | `ButtonSelect` |

#### System Images for KeyCodes

When using a [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) that may be better represented as an image,
such as for an [`ImageLabel`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel) in a user interface, you can use the
following legacy icons. However, it's recommended that you use
[`GetImageForKeyCode()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetImageForKeyCode) as a
more modern, cross‑platform method to retrieve Xbox and PlayStation
controller icons.
| KeyCode | Image | Asset ID |
| - | - | - |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxX.png) | `rbxasset://textures/ui/Controls/xboxX.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxY.png) | `rbxasset://textures/ui/Controls/xboxY.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxA.png) | `rbxasset://textures/ui/Controls/xboxA.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxB.png) | `rbxasset://textures/ui/Controls/xboxB.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/dpadLeft.png) | `rbxasset://textures/ui/Controls/dpadLeft.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/dpadRight.png) | `rbxasset://textures/ui/Controls/dpadRight.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/dpadUp.png) | `rbxasset://textures/ui/Controls/dpadUp.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/dpadDown.png) | `rbxasset://textures/ui/Controls/dpadDown.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxView.png) | `rbxasset://textures/ui/Controls/xboxView.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxmenu.png) | `rbxasset://textures/ui/Controls/xboxmenu.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxLB.png) | `rbxasset://textures/ui/Controls/xboxLB.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxRB.png) | `rbxasset://textures/ui/Controls/xboxRB.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxLT.png) | `rbxasset://textures/ui/Controls/xboxLT.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxRT.png) | `rbxasset://textures/ui/Controls/xboxRT.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxLS.png) | `rbxasset://textures/ui/Controls/xboxLS.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxRS.png) | `rbxasset://textures/ui/Controls/xboxRS.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxLSDirectional.png) | `rbxasset://textures/ui/Controls/xboxLSDirectional.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/xboxRSDirectional.png) | `rbxasset://textures/ui/Controls/xboxRSDirectional.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/backspace.png) | `rbxasset://textures/ui/Controls/backspace.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/return.png) | `rbxasset://textures/ui/Controls/return.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/shift.png) | `rbxasset://textures/ui/Controls/shift.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/shift.png) | `rbxasset://textures/ui/Controls/shift.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/tab.png) | `rbxasset://textures/ui/Controls/tab.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/apostrophe.png) | `rbxasset://textures/ui/Controls/apostrophe.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/comma.png) | `rbxasset://textures/ui/Controls/comma.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/graveaccent.png) | `rbxasset://textures/ui/Controls/graveaccent.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/period.png) | `rbxasset://textures/ui/Controls/period.png` |
| [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) | ![undefined](https://prod.docsiteassets.roblox.com/assets/scripting/controls/spacebar.png) | `rbxasset://textures/ui/Controls/spacebar.png` |