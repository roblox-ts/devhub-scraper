Models are container objects, meaning they hold objects and group objects together. They are best used to hold collections of [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s and have a number of functions that extend their functionality.

At their most basic level, Models allow developers to group selections of [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s together. This is particularly useful when building environments in Roblox Studio as it means the grouped parts can be moved and rotated together. When not storing collections of [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s it is recommended that developers use the [Folder](https://developer.roblox.com/en-us/api-reference/class/Folder) object, as they will not benefit from the additional functionality Models provide.

To access some of the extended functionality Models provide, the [Model.PrimaryPart](https://developer.roblox.com/en-us/api-reference/property/Model/PrimaryPart) property needs to be set. This property points to the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) within the Model that is to be used when moving or otherwise manipulating the model.

Models have a wide range of applications, including being used for Roblox Player Characters. They also have a number of unique behaviors that are important to keep in mind when using them:

*   When a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) and a [Part](https://developer.roblox.com/en-us/api-reference/class/Part) named “Head” are parented under a model, a name-tag GUI will appear with the name of the model.
    
*   If a [Part](https://developer.roblox.com/en-us/api-reference/class/Part)'s position on the Y axis hits the [Workspace.FallenPartsDestroyHeight](https://developer.roblox.com/en-us/api-reference/property/Workspace/FallenPartsDestroyHeight) value, and it was the last object inside of a Model, the Model will be destroyed as well.