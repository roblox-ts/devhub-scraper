An object that represents an Asset loaded from a file on a local disk.

Files generate a temporary asset id in the form _"rbxtemp://####"_, which can
be used in Studio without uploading the asset, but will be destroyed when the
File is destroyed or when the Studio session ends. Temporary asset ids are not
shared across [Team Create][1].

The default [Name](https://create.roblox.com/docs/reference/engine/classes/Instance#Name) of a File instance will be the filename on
disk, excluding path, including extension.

[1]: /studio/team-create