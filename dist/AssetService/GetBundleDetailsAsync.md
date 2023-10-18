If the bundle Id does not exist, it throws HTTP 400 (HTTP/1.1 400 Bad
Request). If bundleId is not convertible to int, throws "Unable to cast
string to int64". If param type is string, it implicitly tries to convert
to int.

This function returns details of the contents of the specified bundle.
#### Understanding the returned ValueTable

It returns a ValueTable object with the following key-value pairs
containing details about the specified bundle
| Key Name | Value Type | Description |
| - | - | - |
| Id number | int | Bundle Id (passed in as an argument) |
| Name | string | Bundle name |
| Description | string | Bundle description |
| BundleType | string | Bundle Type. eg. BodyParts or `AvatarAnimation|AvatarAnimations` |
| Items | ValueArray | An array of ValueTable objects |

Each object in the Items array contains details of the item as described
in the table below:
| Key Name | Value Type | Description |
| - | - | - |
| Id number | int | Item's id |
| Name | string | Item name |
| Type | string | Item Type eg: "UserOutfit" or "Asset" |