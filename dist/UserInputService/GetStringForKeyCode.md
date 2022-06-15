**GetStringForKeyCode** returns a string representing a key the user should press in order to input a given KeyCode, keeping in mind their keyboard layout. For KeyCodes that require some modifier to be held, this function returns the key to be pressed in addition to the modifier. See the examples below for further explanation.

When using Roblox with a non-QWERTY keyboard layout, key codes are mapped to equivalent QWERTY positions. For example, pressing A on an AZERTY keyboard results in `Enum.KeyCode.Q`. This mapping can lead to mismatched information on game help menus. For example, “Press M to open Map” is inaccurate on an AZERTY keyboard; it would need to be “Press ? to open Map”, which is in the same position as M on QWERTY. This function solves this issue by providing the actual key to be pressed while using non-QWERTY keyboard layouts.

Usage
-----

local UserInputService = game:GetService("UserInputService")
local textLabel = script.Parent
local mapKey = Enum.KeyCode.M
textLabel.Text = "Press " .. UserInputService:GetStringForKeyCode(mapKey) .. " to open the map!"

Examples on QWERTY Keyboard
---------------------------

KeyCode

Return Value

`Enum.KeyCode.Q`

`Q`

`Enum.KeyCode.W`

`W`

`Enum.KeyCode.Equals`

`=`

`Enum.KeyCode.At`

`2`, because `@` is typed with Shift+2

Examples on [AZERTY Keyboard](https://upload.wikimedia.org/wikipedia/commons/b/b9/KB_France.svg)
------------------------------------------------------------------------------------------------

KeyCode

Return Value

`Enum.KeyCode.Q`

`A`

`Enum.KeyCode.W`

`Z`

`Enum.KeyCode.Equals`

`=`

`Enum.KeyCode.At`

`É`, see keyboard layout for comparison