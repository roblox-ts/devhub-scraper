This function binds a function to the [`PluginGui's`](https://create.roblox.com/docs/reference/engine/classes/PluginGui) close
button, overriding the default behavior.

By default, when the user clicks the 'x' button in the top right corner of
the [`PluginGui`](https://create.roblox.com/docs/reference/engine/classes/PluginGui) the [`Enabled`](https://create.roblox.com/docs/reference/engine/classes/LayerCollector#Enabled) property
is set to *false*, closing the window. When a custom function is bound
using BindToClose this behavior is overwritten, allowing you to check if
the user really wants to close the window or give them an opportunity to
save their work.

As the default closing behavior is overwritten by this function, you'll
need to configure the [`PluginGui`](https://create.roblox.com/docs/reference/engine/classes/PluginGui) to close manually by setting
[`PluginGui.Enabled`](https://create.roblox.com/docs/reference/engine/classes/LayerCollector#Enabled) to *false*. For example,
in the below snippet users are required to click a confirm button to close
the GUI:
```lua
local closing = false
pluginGui:BindToClose(function()
	-- make sure we haven't already made a button
	if closing then
		return
	end
	closing = true

	-- create confirm button
	local confirmButton = Instance.new("TextButton")
	confirmButton.AnchorPoint = Vector2.new(0.5, 0.5)
	confirmButton.Size = UDim2.new(0.5, 0, 0.5, 0)
	confirmButton.Position = UDim2.new(0.5, 0, 0.5, 0)
	confirmButton.BackgroundColor3 = Color3.new(1, 0, 0)
	confirmButton.Text = "Close?"
	confirmButton.Parent = pluginGui

	-- listen for click
	confirmButton.Activated:Connect(function()
		-- close the gui
		pluginGui.Enabled = false

		-- remove confirm button
		confirmButton:Destroy()
	end)
end)
```

You can call BindToClose with no argument to 'unbind' and revert to the
default behavior described above. For example:
```lua
pluginGui:BindToClose()
```

See also:

- [`Plugin:CreateDockWidgetPluginGui()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#CreateDockWidgetPluginGui) to create a [`PluginGui`](https://create.roblox.com/docs/reference/engine/classes/PluginGui)
- [`DataModel:BindToClose()`](https://create.roblox.com/docs/reference/engine/classes/DataModel#BindToClose), which can be used to bind a function to
the game ending and should not be confused with this function