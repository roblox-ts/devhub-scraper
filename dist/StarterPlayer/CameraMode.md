The CameraMode [`StarterPlayer`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer) property sets whether cameras will be
locked to first person or not when a player joins the game.

Sets the default value for [`Player.CameraMode`](https://create.roblox.com/docs/reference/engine/classes/Player#CameraMode) for each player in
the game.

The camera has two modes:

2. First person
2. Third person

The `Enum.CameraMode` Enum is used to set CameraMode, and determines when
first and third person cameras should be used.
#### First-person

In first-person mode, the player's camera is zoomed all the way in. Unless
there is a visible GUI present with the [`GuiButton.Modal`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#Modal) property
set to *true*, the mouse will be locked and the user's camera will turn as
the mouse moves.
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

Third-person is the default camera setting.