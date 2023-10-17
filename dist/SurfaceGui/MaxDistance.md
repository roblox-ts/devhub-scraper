Controls how far away the SurfaceGui can be displayed before it stops
rendering. A value of 0 means there is no limit, and it will render
infinitely far away.

For experiences with many SurfaceGuis, it's recommended to set this to an
appropriate value for each SurfaceGui. The default value when inserting a
SurfaceGui in Studio is 1000, which should be fine for most usages.

For UIs that are outdoors, you should set the MaxDistance far enough away
so that the UI is small on the screen when it pops out, around 10 pixels
across. This makes it less noticeable when it pops in or out.

You can reduce the pop in effect even more by adding a similar looking
decal underneath the SurfaceGui, or by changing the part color to match
the background color of your UI.

For indoor spaces, the MaxDistance should be set slightly larger than the
size of the room, so that the UI won't render when the player is in a
different room.