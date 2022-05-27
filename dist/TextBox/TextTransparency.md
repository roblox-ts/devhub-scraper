The TextColor3 property determines the transparency of all the text
rendered by a UI element. This property along with [TextBox.Font](https://create.roblox.com/docs/reference/engine/classes/TextBox#Font),
[TextBox.TextSize](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextSize) and [TextBox.TextColor3](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextColor3) will determine the visual
properties of text. Text is rendered after the text stroke
([TextBox.TextStrokeTransparency](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextStrokeTransparency)).

Fading text in using a numeric for-loop is a fantastic way to draw a
player's attention to text appearing on screen.

```
-- Count backwards from 1 to 0, decrementing by 0.1
for i = 1, 0, -.1 do
   textLabel.TextTransparency = i
   wait(.1)
end
```