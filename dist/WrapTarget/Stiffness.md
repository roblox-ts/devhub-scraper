Defines how much the body mesh can be compressed by clothing. Super tight
clothing may lead to an intersection between the clothing mesh and body
mesh. To solve this visual artifact, the deformer can compress the body
mesh slightly to solve possible intersections.

Valid range is 0 to 1. A value of 0 will compress the body mesh as much as
necessary to ensure that the intersections are eliminated (visible body
parts might look a little bit deformed). A value of 1 will prevent the
body mesh from being compressed (may lead to visible intersections or
Z-fighting). A value of 0.9 (default) is a reasonable default that solves
most of the intersections without introducing any significant body
deformation.