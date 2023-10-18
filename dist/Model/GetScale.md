Models contain a persistent canonical scale factor, which starts out at 1
for newly created models and changes as the model is scaled by calling
`Model/ScaleTo`. This function returns the current canonical scale factor
of the model.

The current scale factor does not *directly* impact the size of Instances
under the model. It is used for content authoring and scripting purposes
to remember how the model has been scaled relative to its original size.

Within a given session, the model will cache the precise original size
information of the descendant Instances after the first `Model/ScaleTo`
call. This means that calling `ScaleTo(x)` followed by `ScaleTo(1)` will
get you back *exactly* the original configuration of the model with no
floating point drift. Avoiding floating point drift is the motivation for
having a Scale**To** function instead of a Scale**By** function.

The scale factor does impact engine behavior in one way: The scale factor
of a model will be applied to joint offsets of
[`animations`](https://create.roblox.com/docs/reference/engine/classes/Animation) played on an [`AnimationController`](https://create.roblox.com/docs/reference/engine/classes/AnimationController)
under that model, so that animated rigs will correctly play back
animations even when scaled.