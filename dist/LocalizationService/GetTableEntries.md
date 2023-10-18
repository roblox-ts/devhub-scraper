Returns an `Array`, where each element of the returned `Array` is itself
an `Array` of entries in the same format as described in
[`LocalizationTable:GetEntries()`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable#GetEntries). The order of the elements in the
returned `Array` is the same order that the
[`LocalizationTables`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) will be searched through to
attempt autotranslation for the provided [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance). The entry
elements within a particular [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) are returned in an
unspecified order.

This function returns entries regardless of whether the object is a
[`GuiBase2d`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d) with [`GuiBase2d.AutoLocalize`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#AutoLocalize) enabled. An object
that is a [`GuiBase2d`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d) will not actually be autotranslated unless
[`GuiBase2d.AutoLocalize`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#AutoLocalize) is enabled.

The ordering of the tables is as follows:

- First, it looks for the earliest [`GuiBase2d`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d) ancestor of the
object (including the provided object) that has a
[`GuiBase2d.RootLocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#RootLocalizationTable). Tables then append in the same
order as described in [`GuiBase2d.RootLocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#RootLocalizationTable) by going
up through the [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) ancestors of that
[`GuiBase2d.RootLocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#RootLocalizationTable). If no such
[`GuiBase2d.RootLocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#RootLocalizationTable) is found, no tables append in
this step. If `instance` is `nil`, no tables append in this step.
- Next, tables from the [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) hierarchy under
[`LocalizationService`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService) append. For each child
[`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) of [`LocalizationService`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService), it appends
tables going up from the lowest descendant [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) of
the tables parented to the service, all the way up to the children of
the service. If there are no children of [`LocalizationService`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService)
that are [`LocalizationTables`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable), then no tables
append in this step.
- Finally, the cloud [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) appends to the array. If
there is no cloud [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable), or the cloud
[`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) has not yet loaded, then no table appends in
this step.

This function does not yield. It will not wait until the cloud
[`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) has loaded.