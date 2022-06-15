This property provides a copy of [TextLabel.Text](https://developer.roblox.com/en-us/api-reference/property/TextLabel/Text) that contains exactly what is being rendered by the [TextLabel](https://developer.roblox.com/en-us/api-reference/class/TextLabel). This is useful for eliminating style tags used for rich text.

Example
-------

When [TextLabel.RichText](https://developer.roblox.com/en-us/api-reference/property/TextLabel/RichText) is enabled, the [TextLabel.ContentText](https://developer.roblox.com/en-us/api-reference/property/TextLabel/ContentText) property shows the text as it appears to the player.

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