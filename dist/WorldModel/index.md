The WorldModel provides some physics features to a [`ViewportFrame`](https://create.roblox.com/docs/reference/engine/classes/ViewportFrame).

More specifically, you can make a WorldModel a child of a ViewportFrame, and
then parent geometry to the WorldModel. This will then allow you to use
raycasts in the ViewportFrame through the WorldModel. Furthermore you can put
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) characters in the WorldModel and their joints will be set-up
correctly, and you can animate them.