A [`Trail`](https://create.roblox.com/docs/reference/engine/classes/Trail) starts drawing its segments at the positions of its
[`Trail.Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Trail#Attachment0) and ***Attachment1**.

When the Trail is [`Trail.Enabled`](https://create.roblox.com/docs/reference/engine/classes/Trail#Enabled) it will record the positions of
its attachments every frame. It will connect these positions to the
positions of the attachments on the previous frame. This creates a polygon
that is then filled in by the Trail's [`Trail.Color`](https://create.roblox.com/docs/reference/engine/classes/Trail#Color) and
[`Trail.Texture`](https://create.roblox.com/docs/reference/engine/classes/Trail#Texture) (if that Texture exists).

When created a Trail will not have any Attachments set by default. These
will need to be set in order for the effect to work.

Changing the Attachments of a Trail while a trail is drawing will remove
all of the segments the trail has already drawn.