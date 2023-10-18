This property is intended for fine-tuning purposes and is highly optional.

Allows slight shrinking/expanding of the resulting render mesh, without
affecting any other layers. This is useful in rare cases when the clothing
mesh does not precisely fit the underlying clothing layers (the cage is
usually slightly overestimated atop the real shape to avoid layer
interpenetration). Even slight overestimation has the tendency to
accumulate, especially when there are a lot of layers. While this is
usually not critical, some items like backpacks may be problematic.

Valid range is -1 to 1. A value of -1 will maximally expand while a value
of 1 will maximally shrink. A value of 0 (default) has no effect.