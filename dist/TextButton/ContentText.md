This property provides a copy of [TextButton.Text](https://create.roblox.com/docs/reference/engine/classes/TextButton#Text) that contains exactly
what is being rendered by the [TextButton](https://create.roblox.com/docs/reference/engine/classes/TextButton). This is useful for eliminating
style tags used for rich text.

#### Example

When [TextButton.RichText](https://create.roblox.com/docs/reference/engine/classes/TextButton#RichText) is enabled, the [TextButton.ContentText](https://create.roblox.com/docs/reference/engine/classes/TextButton#ContentText)
property shows the text as it appears to the player.

| RichText | Text                      | ContentText               |
| -------- | ------------------------- | ------------------------- |
| false    | <b>Hello,<br/> world!</b> | <b>Hello,<br/> world!</b> |
| true     | <b>Hello,<br/> world!</b> | Hello,

 world!           |