Gets the user's preferred transparency as a number between 0 and 1, which
indicates how much more opaque they want the background of UI elements to
be. Defaults to 1.

This returns the value of a setting which can be set from the user's side
in either the app settings, under Accessibility, or in the in-game
settings menu (which is called “Background Transparency”). The default
value is 1, indicating that the user prefers the default background
transparency. The lowest value is 0, indicating that the user prefers
backgrounds to be completely opaque, improving readability and contrast
for affected UI. Multiplying an element's BackgroundTransparency with the
value returned from PreferredTransparency is the recommended way to use
this setting; backgrounds will become more opaque as PreferredTransparency
approaches 0. This should be used with
[`Instance:GetPropertyChangedSignal()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetPropertyChangedSignal) so that it automatically
updates when the user changes their preferred transparency.