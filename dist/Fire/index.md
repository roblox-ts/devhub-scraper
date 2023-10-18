**Fire** is one of several premade particle-emitting classes. Like other
particle emitting objects, a Fire emits particles when parented to a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) an [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) and while [`Enabled`](https://create.roblox.com/docs/reference/engine/classes/Fire#Enabled).
This object is useful to create a quick visual effect in a pinch; for more
detailed work it is preferable to use a [`ParticleEmitter`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) instead.

Fire particles emit from the center of [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) to which they are
parented. The particles are emit toward the top (+Y) direction; however, a
negative [`Fire.Heat`](https://create.roblox.com/docs/reference/engine/classes/Fire#Heat) may be used to emit in the bottom (-Y) direction.
Using an [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) as a Parent instead allows the emission
position/direction to be modified by changing the [`Attachment.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Attachment#CFrame) or
related properties.

When [`Enabled`](https://create.roblox.com/docs/reference/engine/classes/Fire#Enabled) is off, existing particles continue to
render until they expire. However, if the Fire's
[`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) is set to nil all existing particles
immediately disappear, similar to the behavior of
[`ParticleEmitter:Clear()`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Clear). It is possible to set the
[`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) to nil and back to the exact original object to
achieve the same effect. If immediate disappearance is not desired, try moving
the Fire's parent to some far away position, then
[`Destroy`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy) the Fire after a few seconds using
[`Debris:AddItem()`](https://create.roblox.com/docs/reference/engine/classes/Debris#AddItem). This will give the existing particles time to
expire.

Fire objects emit no light on their own. To help create a cohesive environment
around a burning object, try adding a [`PointLight`](https://create.roblox.com/docs/reference/engine/classes/PointLight) with an orange
[`Color`](https://create.roblox.com/docs/reference/engine/classes/Light#Color). This can help your fire appear more realistic.

Fire object consist of two emitters. Both of these are affected in various
ways by the Fire's [`Size`](https://create.roblox.com/docs/reference/engine/classes/Fire#Size), [`Heat`](https://create.roblox.com/docs/reference/engine/classes/Fire#Heat),
[`Color`](https://create.roblox.com/docs/reference/engine/classes/Fire#Color) and [`SecondaryColor`](https://create.roblox.com/docs/reference/engine/classes/Fire#SecondaryColor). The
particles emit from the smaller, secondary emitter have a significantly longer
lifetime (and rise farther) than those emit by the primary emitter. In the
video to the right, you can see the two emitters with the distinct colors.

Unlike actual flames, the Fire object **does not spread on its own**. If you
notice this behavior in your game, it is happening because of a
[`Script`](https://create.roblox.com/docs/reference/engine/classes/Script).