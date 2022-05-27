The CameraMode [Player](https://create.roblox.com/docs/reference/engine/classes/Player) property sets what mode that the player's camera
is in. By default, the camera mode is set to third person.

The camera has two modes:

1.  First person
2.  Third person

The [CameraMode](https://developer.roblox.com/en-us/api-reference/enum/CameraMode) Enum is used to set CameraMode in Player, and
determines when first and third person cameras should be used.

#### First-person

In first-person mode, the player's camera is zoomed all the way in. Unless
there is a visible GUI present with the [GuiButton.Modal](https://create.roblox.com/docs/reference/engine/classes/GuiButton#Modal) property set to
_true_, the mouse will be locked and the user's camera will turn as the
mouse moves. ![First Person CameraMode][1]

#### Third-person

In third-person mode, the character can be seen in the camera. While in
third-person mode on Roblox:

- You may right-click and drag to rotate your camera, or use the arrow
  keys at the bottom right-hand corner of the screen.
- When you move your mouse, your camera does not change (unless you move
  the mouse to the end of the screen).
- When you press any of the arrow keys, the user's character will face in
  the corresponding arrow key's direction.
- You can zoom in and out freely.

Third-person is the default camera setting. ![Third Person CameraMode][2]

#### Note

- This item should be used in a [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) to work as expected online.

[1]: https://prod.docsiteassets.roblox.com/assets/blt3d3247ee058ba219/CameraMode-LockFirstPerson.jpg
[2]: https://prod.docsiteassets.roblox.com/assets/bltbf81f29ace6b335b/CameraMode-Classic.jpg