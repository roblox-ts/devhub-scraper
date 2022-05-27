The WidthScale property is a [NumberSequence](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence) that scales the
width of the [Trail](https://create.roblox.com/docs/reference/engine/classes/Trail) over the course of its lifetime.

This property can range from `0` to `1`. The value of the property
influences the width of the trail by setting the trail's width to the
product of:

    (distance between trail's attachment0 and attachment1 in studs) * (the value of WidthScale)

For example, if the trail's attachments are 2 stud's apart, and the value
of this property is 0.5, the trail's width will be 1 stud and the trail
will be centered in between the two attachments.

If you would like to hide the trail entirely, consider setting
[Trail.Enabled](https://create.roblox.com/docs/reference/engine/classes/Trail#Enabled) to false.