The Destroying event fires immediately before the Instance or one of its ancestors is destroyed.

The Instance will never be deleted from memory while a connected function is still using it. However, if the function yields at any point, the Instance and its descendants will be parented to `nil`.