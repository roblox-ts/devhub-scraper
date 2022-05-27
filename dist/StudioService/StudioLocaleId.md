The **StudioLocaleId** property contains the locale currently in-use by
Studio, e.g. `en_US`. It is useful when localizing plugins.

Below is a trivial example of localization based on the value returned by
this function.

```lua
local locale = game:GetService("StudioService").StudioLocaleId
if locale == "en_US" then
   print("Howdy, ya'll")
elseif locale == "en_GB" then
   print("'Ello, gov'na")
elseif locale:sub(1, 2) == "en" then
   print("Hello")
elseif locale == "fr_FR" then
   print("Bonjour")
end
```