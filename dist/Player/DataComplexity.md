This property was once used by an ancient data persistence method to indicate the total amount of data currently being stored in the [Player's](https://developer.roblox.com/en-us/api-reference/class/Player) cache on the current place.

Notes
-----

*   Booleans and numbers cost 1 data complexity unit.
*   Strings cost their length divided by 100 in data complexity units.
*   Instances cost their DataCost in data complexity units.
*   Saving the default value (0 for numbers, false for booleans, “” for strings and nil for Instances) removes the key from the DataComplexity count.
*   If, when using the SaveBoolean, SaveString, SaveNumber or SaveInstance functions, the DataComplexity for the player goes over the limit (currently 45000 units, defined by DataComplexityLimit), the function throws an error, the value is not saved, and any previous value of the key that was being saved to is deleted.