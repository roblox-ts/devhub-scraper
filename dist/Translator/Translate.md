Returns the localized text string in a [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) based on
its [`Translator`](https://create.roblox.com/docs/reference/engine/classes/Translator) locale. This string will be in the context of the
provided object, given the provided **Source** text.

See
[Localizing with Scripting](https://create.roblox.com/docs/production/localization/localizing-with-scripting)
for more details and usage examples of this function.
#### Context Overrides

In some cases, duplicate **Source** strings may have completely different
translations in other languages. For example, the English noun "Screen"
can indicate both a computer screen and a window screen, but the Spanish
translations are completely different:
| A | B | C | D | E |
| Key | Context | **Source** | Example | **es** |
|  |  | Screen |  | Pantalla |
|  |  | Screen |  | Mosquitero |
|  |  |  |  |  |

In these cases, the first argument to this function — a valid
in-game [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) — can be used as a "tie breaker" when
multiple GUI objects use the same source string. To implement this,
specify the "path" to the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) you'd like to override as the
**Context** value of the translation data:
| A | B | C | D | E |
| Key | **Context** | Source | Example | es |
|  | workspace.ComputerScreen.SurfaceGui.TextLabel | Screen |  | Pantalla |
|  |  | Screen |  | Mosquitero |
|  |  |  |  |  |

Then, when calling this function in a script, pass the same
[`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) as the first argument, followed by the **Source** lookup
text as the second argument:
```lua
local LocalizationService = game:GetService("LocalizationService")

local success, translator = pcall(function()
	return LocalizationService:GetTranslatorForPlayerAsync(game.Players.LocalPlayer)
end)

if success then
	local trans = translator:Translate(workspace.ComputerScreen.SurfaceGui.TextLabel, "Screen")
	print(trans)
else
	warn("Cannot load translator for player!")
end
```