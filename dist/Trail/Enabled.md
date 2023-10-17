The Enabled property determines whether a Trail will be drawn or not. This
Enabled property defaults to true.

When enabled is true, the trail will create segments between the current
position of its [`Trail.Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Trail#Attachment0) and the position of the
attachments in the last frame.

If enabled is set to false while a trail is drawing no new segments will
be drawn, but any existing segments will be cleaned up naturally when they
reach the end of their [`Trail.Lifetime`](https://create.roblox.com/docs/reference/engine/classes/Trail#Lifetime). If you would like to clean
up any existing segments, you can use the [`Trail:Clear()`](https://create.roblox.com/docs/reference/engine/classes/Trail#Clear) function
at the same time.