Setting this property in the properties pane will scale the model as
though `Model/ScaleTo` was called on it, scaling all descendant Instances
in the model such that the model has the specified scale factor relative
to its original size.

This property is only available in Studio and will throw an error if used
in a `Script` or `LocalScript`. `Model/ScaleTo` and `Model/GetScale`
should be used from scripts.