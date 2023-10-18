SetTopbarTransparency sets the transparency of the Topbar CoreGui. A value
of 0 is completely opaque, and a value of 1 is completely transparent.
Values outside of the range [0, 1] are clamped. The default transparency
of the topbar is 0.5. The current transparency can be retrieved using the
similarly-named
[`GetTopbarTransparency`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui#GetTopbarTransparency) function.
#### Comparison of Values

The screenshots below show the topbar at 1.0, 0.5 and 0.0 transparency.
![The TopBar with a transparency of 1.0 (completely hidden)]](https://prod.docsiteassets.roblox.com/assets/legacy/Topbar_Transparency_1.0.png)
![The TopBar with a transparency of 0.5 (50% transparency)]](https://prod.docsiteassets.roblox.com/assets/legacy/Topbar_Transparency_0.5.png)
![The TopBar with a transparency of 0.0 (completely opaque)](https://prod.docsiteassets.roblox.com/assets/legacy/Topbar_Transparency_0.png)
#### Usage

This method is often used when re-styling the topbar to match the visual
aesthetic of a game. By hiding the topbar, you can create your own custom
topbar. See the code samples for an example.
#### Alternative

Using the [`StarterGui:SetCore()`](https://create.roblox.com/docs/reference/engine/classes/StarterGui#SetCore) method with the `TopbarEnabled`
option allows you to enable/disable the entire topbar and all of its
features (player list, health, etc). By contrast, this method only affects
how the topbar is displayed.