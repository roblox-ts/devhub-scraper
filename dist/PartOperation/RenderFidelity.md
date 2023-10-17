This property determines the level of detail that the solid modeled part
will be shown in. It can be set to the possible values of the
`Enum.RenderFidelity` enum.

By default, solid modeled parts will always be shown in **precise
fidelity**, no matter how far they are from the camera. This improves
their appearance when viewed from any distance, but if a place has a large
number of detailed solid modeled parts, it may reduce overall performance.
| Distance From Camera | Render Fidelity |
| - | - |
| Less than 250 studs | Highest |
| 250-500 studs | Medium |
| 500 or more studs | Lowest |