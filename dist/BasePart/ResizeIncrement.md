The ResizeIncrement property is a read-only property that describes the smallest change in size allowable by the [BasePart:Resize](https://developer.roblox.com/en-us/api-reference/function/BasePart/Resize) method. It differs between implementations of the `/BasePart` abstract class. For instance, `/Part` has this set to 1 and `/TrussPart` has this set to 2 (since individual truss sections are 2x2x2 in size).