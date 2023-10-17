GuiObjects with a lower SelectionOrder are selected earlier than
GuiObjects with a higher SelectionOrder when starting the gamepad
selection or calling [`GuiService:Select()`](https://create.roblox.com/docs/reference/engine/classes/GuiService#Select) on an ancestor. This
property does not affect directional navigation. Default value is 0.