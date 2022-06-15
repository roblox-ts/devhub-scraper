This function binds a function to the [PluginGui's](https://developer.roblox.com/en-us/api-reference/class/PluginGui) close button, overriding the default behavior.

By default, when the user clicks the 'x' button in the top right corner of the [PluginGui](https://developer.roblox.com/en-us/api-reference/class/PluginGui) the [Enabled](https://developer.roblox.com/en-us/api-reference/property/LayerCollector/Enabled) property is set to _false_, closing the window. When a custom function is bound using BindToClose this behavior is overwritten, allowing you to check if the user really wants to close the window or give them an opportunity to save their work.

As the default closing behavior is overwritten by this function, you'll need to configure the [PluginGui](https://developer.roblox.com/en-us/api-reference/class/PluginGui) to close manually by setting [PluginGui.Enabled](https://developer.roblox.com/en-us/api-reference/property/LayerCollector/Enabled) to _false_. For example, in the below snippet users are required to click a confirm button to close the GUI:

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

You can call BindToClose with no argument to 'unbind' and revert to the default behavior described above. For example:

pluginGui:BindToClose()

See also
--------

*   [Plugin:CreateDockWidgetPluginGui](https://developer.roblox.com/en-us/api-reference/function/Plugin/CreateDockWidgetPluginGui) to create a [PluginGui](https://developer.roblox.com/en-us/api-reference/class/PluginGui)
*   [DataModel:BindToClose](https://developer.roblox.com/en-us/api-reference/function/DataModel/BindToClose), which can be used to bind a function to the game ending and should not be confused with this function