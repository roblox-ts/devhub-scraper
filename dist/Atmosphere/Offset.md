Controls how light transmits between the camera and the sky background.
Increase this value to create a horizon silhouette against the sky or
reduce it to blend distant objects into the sky for an endless and
seamless open world.

Offset should be balanced against [`Atmosphere.Density`](https://create.roblox.com/docs/reference/engine/classes/Atmosphere#Density) and carefully
tested in your place. A low offset may cause "ghosting" where the skybox
can be seen through objects/terrain. This can be corrected by increasing
the offset, which more clearly silhouettes distant objects/terrain against
the sky, but too much offset may reveal level-of-detail "popping" for far
distant terrain and meshes.