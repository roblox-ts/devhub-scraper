This property is the main rule in determining the root part of an
assembly. It is an integer between -127 and 127 that takes precedence over
all other rules for root part sort (including the weird rules based on
part [size](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size)). A part with a higher RootPriority will take
priority over other [unanchored](https://create.roblox.com/docs/reference/engine/classes/BasePart#Anchored) parts with equal
[Massless](https://create.roblox.com/docs/reference/engine/classes/BasePart#Massless) values and a lower RootPriority.

![RootPriority in Properties window](https://prod.docsiteassets.roblox.com/assets/bltc008b2f69b29c958/Screen_Shot_2019-01-18_at_10.09.15_PM.png)

Use this to control which part of an assembly is the root part and keep
the root part stable if size changes.

See also:

- [Understanding Root Parts](https://create.roblox.com/docs/reference/engine/classes/understanding root parts), an article
  documenting what root parts are and how to use them.