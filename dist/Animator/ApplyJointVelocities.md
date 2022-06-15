Given the current set of [AnimationTracks](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) playing, and their current times and play speeds, compute relative velocities between the parts and apply them to Motor6D.Part1 (the part which [Animator](https://developer.roblox.com/en-us/api-reference/class/Animator) considers the “child” part). These relative velocity calculations and assignments happen in the order provided.

This method doesn't apply velocities for a given joint if both of the joint's parts are currently part of the same assembly, for example, if they are still connected directly or indirectly by Motors or Welds.

This method doesn't disable or remove the joints for you. You must disable or otherwise remove the rigid joints from the assembly before calling this method.

The given `Motor6Ds` are not required to be descendants of the the [DataModel](https://developer.roblox.com/en-us/api-reference/class/DataModel). Removing the joints from the [DataModel](https://developer.roblox.com/en-us/api-reference/class/DataModel) before calling this method is supported.