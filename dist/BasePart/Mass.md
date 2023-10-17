**Mass** is a read-only property that describes the product of a part's
volume and density. It is returned by the
[`GetMass`](https://create.roblox.com/docs/reference/engine/classes/BasePart#GetMass) function.

- The volume of a part is determined by its [`Size`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size) and
its [`Shape`](https://create.roblox.com/docs/reference/engine/classes/Part#Shape), which varies depending on the kind of
BasePart used, such as [`WedgePart`](https://create.roblox.com/docs/reference/engine/classes/WedgePart).
- The density of a part is determined by its
[`Material`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Material) or
[`CustomPhysicalProperties`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CustomPhysicalProperties), if
specified.