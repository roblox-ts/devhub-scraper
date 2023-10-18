Adds a function to modify or constrain proposed motion. The function takes
an input [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) of **proposed** motion and returns a
[`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) of **modified** or unmodified motion. Both the input and
output are expressed relative to the reference frame. You can add multiple
functions which will be called in order by `priority`, passing the results
along in a chain.

To remove the added constraint function, call
[`Disconnect()`](https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptConnection:Disconnect()) on the returned
connection object.