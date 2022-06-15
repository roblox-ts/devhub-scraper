An object that represents an Asset loaded from a file on a local disk.

Files generate a temporary asset id in the form _“rbxtemp://####”_, which can be used in Studio without uploading the asset, but will be destroyed when the File is destroyed or when the Studio session ends. Temporary asset ids are not shared across [Team Create](https://developer.roblox.com/en-us/articles/Team-Create).

The default [Name](https://developer.roblox.com/en-us/api-reference/property/Instance/Name) of a File instance will be the filename on disk, excluding path, including extension.