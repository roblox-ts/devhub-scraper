Points to the [Model](https://developer.roblox.com/en-us/api-reference/class/Model)'s primary part. The part is the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) that is used as a basis when positioning the model using the [Model:MoveTo](https://developer.roblox.com/en-us/api-reference/function/Model/MoveTo) and [Model:SetPrimaryPartCFrame](https://developer.roblox.com/en-us/api-reference/function/Model/SetPrimaryPartCFrame) functions.

Note when assigning the PrimaryPart that the part must be a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) that is descendant of the Model. If this is not the case, the PrimaryPart will be set to nil in Roblox studio, or produce an error if done so by a Script.

When dealing with models full of unanchored parts connected with joints such as [Weld](https://developer.roblox.com/en-us/api-reference/class/Weld)s or [Motor6D](https://developer.roblox.com/en-us/api-reference/class/Motor6D)s it is best practice to set the PrimaryPart to the root part of the assembly. Giving the example of a Player Character, this is the HumanoidRootPart.