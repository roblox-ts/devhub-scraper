[`Highlight`](https://create.roblox.com/docs/reference/engine/classes/Highlight) is a visual effect you can use to call attention to a
specific object within your experience. Every highlight effect has a
silhouette **outline** that surrounds the object and a solid overlay
**interior** that displays over the object's interior. You can customize both
of these components independently to modify the highlight's visual appearance.
| Original Object | Black Outline, Yellow Interior | Yellow Outline, Black Interior |
| - | - | - |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/ui/highlighting-objects/OutlineTransparency-1.jpg) | ![undefined](https://prod.docsiteassets.roblox.com/assets/ui/highlighting-objects/Overview-Yellow-Interior.jpg) | ![undefined](https://prod.docsiteassets.roblox.com/assets/ui/highlighting-objects/Overview-Yellow-Outline.jpg) |

Useful applications of the highlight effect include:

- Providing visual feedback that an object is important and/or interactable.
- Making distant objects visible through objects that are closer to the user.
- Indicating the current position and status of other characters.

**IMPORTANT:** As a performance limit, Studio only displays 31 simultaneous
Highlight instances on the client at a time. If you exceed this limit, the
additional instances are silently ignored. While a disabled [`Highlight`](https://create.roblox.com/docs/reference/engine/classes/Highlight)
doesn't display, it still takes one of the 31 available [`Highlight`](https://create.roblox.com/docs/reference/engine/classes/Highlight)
slots. If you plan to permanently disable a [`Highlight`](https://create.roblox.com/docs/reference/engine/classes/Highlight) instance, it's
best to delete the highlight rather than disable it.

For low-end devices, Studio uses a fallback version that doesn't have high
performance overheads. This version doesn't have the outline effect; instead,
it creates an interior fill with a checker pattern to emulate the
[`FillTransparency`](https://create.roblox.com/docs/reference/engine/classes/Highlight#FillTransparency) property.
![undefined](https://prod.docsiteassets.roblox.com/assets/ui/highlighting-objects/Fallback-Version-On-Trees.jpg)
![undefined](https://prod.docsiteassets.roblox.com/assets/ui/highlighting-objects/Low-End-Interior-Fill.jpg)