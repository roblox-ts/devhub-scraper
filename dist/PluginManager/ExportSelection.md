ExportSelection will export all geometry in the current [Selection](https://developer.roblox.com/en-us/api-reference/class/Selection) to an .OBJ file. The file is saved to the path chosen by the user in a file save dialogue (the `filePath` argument is ignored). This function does the same thing as the **Export Selection…** right-click menu option in the Explorer.

History
-------

Previously, this function would save the generated .OBJ file to the given file path, so long as Roblox Studio had write access. This was changed for security reasons on [Release 379](https://developer.roblox.com/resources/release-note/Release-Notes-for-379) in April 2019.