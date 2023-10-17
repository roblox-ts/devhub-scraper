CurrentPhysicalProperties indicates the current physical properties of the
part. You can set custom values for the physical properties per part,
[custom material](https://create.roblox.com/docs/parts/materials), and material override. The
Engine prioritizes more granular definitions when determining the
effective physical properties of a part. The values in the following list
are in order from highest to lowest priority:

- Custom physical properties of the part
- Custom physical properties of the part's custom material
- Custom physical properties of the material override of the part's
material
- Default physical properties of the part's material