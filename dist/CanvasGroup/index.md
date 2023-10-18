CanvasGroup renders descendants as a group with color and transparency applied
to the render result. GuiEffect ([`UICorner`](https://create.roblox.com/docs/reference/engine/classes/UICorner) and [`UIGradient`](https://create.roblox.com/docs/reference/engine/classes/UIGradient))
under CanvasGroup will also apply to the whole group. CanvasGroup always has
[`GuiObject.ClipsDescendants`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#ClipsDescendants) set to true and all descendants will render
within CanvasGroup's viewport.
### Important notes:

- Descendants of CanvasGroup will be rendered as a flattened texture only when
the ancestor [`LayerCollector`](https://create.roblox.com/docs/reference/engine/classes/LayerCollector) has its
[`LayerCollector.ZIndexBehavior`](https://create.roblox.com/docs/reference/engine/classes/LayerCollector#ZIndexBehavior) set to [`Enum.ZIndexBehavior`](https://create.roblox.com/docs/reference/engine/enums/ZIndexBehavior).
- CanvasGroup consumes extra texture memory. The quality of the texture and
total memory usage is limited by the [`Enum.QualityLevel`](https://create.roblox.com/docs/reference/engine/enums/QualityLevel) of the client. When
exceeding the memory cap, CanvasGroup will render as a blank texture.
- We recommend using CanvasGroup with static sizes, otherwise a new texture
would need to be created to accommodate new sizes.