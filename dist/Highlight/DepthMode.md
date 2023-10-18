Controls how the Highlight effect displays with respect to other objects
in the world. You can set this property to one of the following options:

- 

[`AlwaysOnTop`](https://create.roblox.com/docs/reference/engine/enums/HighlightDepthMode) - Allows the highlight
to display regardless if there are objects between the camera and the
highlighted object. This means the user is always able to see the
highlight regardless of what is between the highlighted object and the
camera.

- 

[`Occluded`](https://create.roblox.com/docs/reference/engine/enums/HighlightDepthMode) - Hides the highlight if
there are objects between the camera and the highlighted object. This
means the user is only able to see the object if there are no
obstructing objects between the highlighted object and the camera's
view.

| DepthMode = AlwaysOnTop | DepthMode = Occluded |
| - | - |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/ui/highlighting-objects/DepthMode-AlwaysOnTop.jpg) | ![undefined](https://prod.docsiteassets.roblox.com/assets/ui/highlighting-objects/DepthMode-Occluded.jpg) |