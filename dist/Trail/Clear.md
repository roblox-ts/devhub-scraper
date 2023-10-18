The Clear function clears the segments of the [`Trail`](https://create.roblox.com/docs/reference/engine/classes/Trail). This means
that any trail that has been drawn will be erased when this function is
called, even if that segment's [`Trail.Lifetime`](https://create.roblox.com/docs/reference/engine/classes/Trail#Lifetime) duration has not yet
been reached.

While this is less noticeable for trails with shorter lifetimes, this is
useful when cleaning up trails that have a longer lifetime, or for cases
where the trail is removed when a certain game action occurs.

Calling this function will only affect old segments that have already been
done. It will not affect the drawing of any new trail segments after this
function call. If you would like to clear existing trail segments, and
temporarily prevent new segments from being drawn, consider toggling the
trail's [`Trail.Enabled`](https://create.roblox.com/docs/reference/engine/classes/Trail#Enabled) property to false at the same time.