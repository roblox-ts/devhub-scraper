This function sets whether the [CoreGui](https://developer.roblox.com/en-us/api-reference/class/CoreGui) element associated with the given [CoreGuiType](https://developer.roblox.com/en-us/api-reference/enum/CoreGuiType) is enabled or disabled.

The top bar can not be disabled using this function. To disable the top bar, set _TopbarEnabled_ to _false_ using [StarterGui:SetCore](https://developer.roblox.com/en-us/api-reference/function/StarterGui/SetCore). This will also disable the element associated with all [CoreGuiTypes](https://developer.roblox.com/en-us/api-reference/enum/CoreGuiType).

For more information on how to use this function, see the article on `Articles/Disabling Parts of Game Interface|disabling the game interface`.