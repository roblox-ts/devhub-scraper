SetTopbarTransparency sets the transparency of the Topbar CoreGui. A value of 0 is completely opaque, and a value of 1 is completely transparent. Values outside of the range \[0, 1\] are clamped. The default transparency of the topbar is 0.5. The current transparency can be retrieved using the similarly-named [GetTopbarTransparency](https://developer.roblox.com/en-us/api-reference/function/PlayerGui/GetTopbarTransparency) function.

Comparison of Values
--------------------

The screenshots below show the topbar at 1.0, 0.5 and 0.0 transparency.  
![The TopBar with a transparency of 1.0 (completely hidden)]](https://developer.roblox.com/assets/bltb3d5158183e86b86/Topbar_Transparency_1.0.png) ![The TopBar with a transparency of 0.5 (50% transparency)]](https://developer.roblox.com/assets/blt3d2716062cdd8606/Topbar_Transparency_0.5.png) ![The TopBar with a transparency of 0.0 (completely opaque)](https://developer.roblox.com/assets/bltc0dd5d97e6bbebae/Topbar_Transparency_0.png)

Usage
-----

This method is often used when re-styling the topbar to match the visual aesthetic of a game. By hiding the topbar, you can create your own custom topbar. See the code samples for an example.

Alternative
-----------

Using the [StarterGui:SetCore](https://developer.roblox.com/en-us/api-reference/function/StarterGui/SetCore) method with the `TopbarEnabled` option allows you to enable/disable the entire topbar and all of its features (player list, health, etc). By contrast, this method only affects how the topbar is displayed.