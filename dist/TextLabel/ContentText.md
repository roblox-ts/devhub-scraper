This property provides a copy of [TextLabel.Text](https://create.roblox.com/docs/reference/engine/classes/TextLabel#Text) that contains exactly
what is being rendered by the [TextLabel](https://create.roblox.com/docs/reference/engine/classes/TextLabel). This is useful for eliminating
style tags used for rich text.

#### Example

When [TextLabel.RichText](https://create.roblox.com/docs/reference/engine/classes/TextLabel#RichText) is enabled, the [TextLabel.ContentText](https://create.roblox.com/docs/reference/engine/classes/TextLabel#ContentText) property
shows the text as it appears to the player.

| RichText | Text                      | ContentText               |
| -------- | ------------------------- | ------------------------- |
| false    | <b>Hello,<br/> world!</b> | <b>Hello,<br/> world!</b> |
| true     | <b>Hello,<br/> world!</b> | Hello,

 world!           |