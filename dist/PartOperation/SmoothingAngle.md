This property represents an angle in degrees for a threshold value between face normals on a [solid modeled](https://developer.roblox.com/en-us/articles/3D-Modeling-with-Parts) part. If the normal difference is less than the value, normals will be adjusted to smooth the difference. Usually a value between 30 and 70 degrees will produce a good result. 0 degrees leads to sharp edges. Values between 90 and 180 degrees are allowed but not encouraged, as it may cause a “shadowing” effect on unions with sharp edges.

Note that smoothing will not affect the normals between different materials or different colors.

![](https://developer.roblox.com/assets/blt53ff07ce0d5f1cf7/CSG-SmoothingAngle-0.png)

SmoothingAngle = 0

![](https://developer.roblox.com/assets/bltc1f5f51600953267/CSG-SmoothingAngle-50.png)

SmoothingAngle = 50