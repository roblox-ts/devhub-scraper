Returns a [`StandardPages`](https://create.roblox.com/docs/reference/engine/classes/StandardPages) object including information on all of the
specified group's enemies.

This pages does not include a list of group IDs but instead a list of
group information tables, mirroring the format of those returned by
[`GroupService:GetGroupInfoAsync()`](https://create.roblox.com/docs/reference/engine/classes/GroupService#GetGroupInfoAsync). See below for the structure of
these tables.
```lua
group = {
    Name = "Knights of the Seventh Sanctum",
    Id = 377251,
    Owner = {
        Name = "Vilicus",
        Id = 23415609
    },
    EmblemUrl = "http://www.roblox.com/asset/?id=60428602",
    Description = "We fight alongside the balance to make sure no one becomes to powerful",
    Roles = {
        [1] = {
            Name = "Apprentice",
            Rank = 1
        },
        [2] = {
            Name = "Warrior",
            Rank = 2
        },
        [3] = {
            Name = "Earth Walker",
            Rank = 255
        }
    }
}
```

Note, as this function returns a [`StandardPages`](https://create.roblox.com/docs/reference/engine/classes/StandardPages) object rather than
an array, developers may wish to convert it to an array for ease of use
(see examples).

This function has a number of useful applications, including detecting if
a player is a member of an enemy group.

For allies, use [`GroupService:GetAlliesAsync()`](https://create.roblox.com/docs/reference/engine/classes/GroupService#GetAlliesAsync).