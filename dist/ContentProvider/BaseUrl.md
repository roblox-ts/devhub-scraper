Used by the [ContentProvider](https://developer.roblox.com/en-us/api-reference/class/ContentProvider) to download assets from the Roblox website.

This URL points to a Roblox hosted website from which assets are downloaded and is pulled from the AppSettings.xml file, located in the version-hash folder.

It is possible to overwrite this property using the [ContentProvider:SetBaseUrl](https://developer.roblox.com/en-us/api-reference/function/ContentProvider/SetBaseUrl) function in the command bar; however, this is not recommended and may cause asset loading issues.