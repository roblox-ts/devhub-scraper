The [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) in which the [AngularVelocity](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity) force is specified.
If set to **[World](https://developer.roblox.com/en-us/api-reference/enum/ActuatorRelativeToWorld)**, the angular velocity
vector is used as is. If set to **Attachment1**, the angular velocity is
transformed by the CFrame of the assigned attachment.

[RelativeTo](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity#RelativeTo) can also be set to
**Attachment0**, but it makes no physical sense and will lead to
unpredictable behaviors. There will be a warning in Studio but the API
will not prevent setting this value.