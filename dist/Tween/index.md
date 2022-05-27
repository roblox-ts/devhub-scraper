Tweens are used to interpolate the properties of instances. The Tween object
itself controls the playback of the interpolation. Creating and configuring
tweens is done with the [TweenService:Create](https://create.roblox.com/docs/reference/engine/classes/TweenService#Create) function. This is the only way
to create tweens. Instance.new cannot be used for this particular object.

Note that while the configuration of a tween can be accessed after a tween has
been created, it can not be modified. If new goals are needed for
interpolation, a new tween must be created. Further information on how to
create Tweens can be found on the [TweenService](https://create.roblox.com/docs/reference/engine/classes/TweenService) page.

Multiple tweens can be played on the same object at the same time, but they
must not be animating the same property. If two tweens attempt to modify the
same property, the initial tween will be cancelled and overwritten by the most
recent tween (see examples).

Although other methods exist for tweening objects, such as
[GuiObject:TweenSizeAndPosition](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TweenSizeAndPosition), Tweens allows multiple properties to be
modified and for the animation to be paused and cancelled at any point.