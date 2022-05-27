This property determines the level of detail that solid-modeled and mesh
parts will be shown in and can be set to the possible values of the
[RenderFidelity](https://developer.roblox.com/en-us/api-reference/enum/RenderFidelity) enum.

By default, solid-modeled and mesh parts will always be shown in precise
fidelity, no matter how far they are from the game camera. This improves
their appearance when viewed from any distance, but if a place has a large
number of detailed solid-modeled or mesh parts, it may reduce overall game
performance.

| Distance From Camera | Render Fidelity |
| -------------------- | --------------- |
| Less than 250 studs  | Highest         |
| 250-500 studs        | Medium          |
| 500 or more studs    | Lowest          |