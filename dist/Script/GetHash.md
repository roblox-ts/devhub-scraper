The GetHash function returns a hash of the script's source.

What is a Hash
--------------

A hash is a string of characters produced by a cryptographic algorithm that maps data of arbitrary size, since scripts can be short or long, to data of a fixed size, a string of a fixed length. Although they have several uses, hashes are often used to determine the integrity of data and make it faster to look up data. If you compare two pieces of data and their hashes do not match, then the data has changed.

Hashes have three key properties:

1.  They are often of fixed lengths. Since the function uses a hashing algorithm known as MD5, this function always generates hashes consisting of 32 hexadecimal (number and letter) characters.
2.  The same data (e.g. script source) always generates the same hash.
3.  Different data (e.g. different script sources) generate unique hashes. It is highly unlikely that two different sources will generate the same hash.

Limitations
-----------

The hash function has several limitations, including:

*   If the script's [LinkedSource](https://developer.roblox.com/en-us/api-reference/property/BaseScript/LinkedSource) property is set, then this method will return the empty string.
*   This item is protected. Attempting to use it in a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) will cause an error.