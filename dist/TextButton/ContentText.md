This property provides a copy of [TextButton.Text](https://developer.roblox.com/en-us/api-reference/property/TextButton/Text) that contains exactly what is being rendered by the [TextButton](https://developer.roblox.com/en-us/api-reference/class/TextButton). This is useful for eliminating style tags used for rich text.

Example
-------

When [TextButton.RichText](https://developer.roblox.com/en-us/api-reference/property/TextButton/RichText) is enabled, the [TextButton.ContentText](https://developer.roblox.com/en-us/api-reference/property/TextButton/ContentText) property shows the text as it appears to the player.

RichText

Text

ContentText

false

<b>Hello,<br/> world!</b>

<b>Hello,<br/> world!</b>

true

<b>Hello,<br/> world!</b>

Hello,  
world!