Controls how light transmits between the camera and the sky background. Increase this value to create a horizon silhouette against the sky or reduce it to blend distant objects into the sky for an endless and seamless open world.

Offset should be balanced against [Density](https://developer.roblox.com/en-us/api-reference/property/Atmosphere/Density) and carefully tested in your place. A low offset may cause “ghosting” where the skybox can be seen through objects/terrain. This can be corrected by increasing the offset, which more clearly silhouettes distant objects/terrain against the sky, but too much offset may reveal level-of-detail “popping” for far distant terrain and meshes.

See the `articles/Atmosphere|Atmosphere Controls` article for property comparisons and example environments.

See also
--------

*   `articles/Custom Skyboxes|Custom Skyboxes`, outlines how to change the default skybox for games and customize the lighting
*   `articles/Post Processing Effects|Post-Processing Effects`, outlines how post-processing effects can quickly improve a game's visuals with a variety of customizable filters