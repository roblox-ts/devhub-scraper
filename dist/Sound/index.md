A [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound) is an object that emits sound.

## 2D and 3D Sound

A sound placed in a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) or an [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) will emit its sound from
that part's [BasePart.Position](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position) or the attachment's
[Attachment.WorldPosition](https://create.roblox.com/docs/reference/engine/classes/Attachment#WorldPosition). A sound exhibits the Doppler effect, meaning its
frequency and pitch varies with the relative motion of whatever attachment or
part it is attached to. The volume of the sound will be determined by the
distance between the client's sound listener (by default the [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera)
position) and the position of the sound's parent. For more information on this
see [Sound.RollOffMode](https://create.roblox.com/docs/reference/engine/classes/Sound#RollOffMode).

A sound is considered "global" if it is not parented to a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) or an
[Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment). In this case, the sound will play at the same volume throughout
the entire place.

## Sound Replication

Sound playback is not filtered. If a particular client starts playing a sound,
all of the other clients will also play it unless
[SoundService.RespectFilteringEnabled](https://create.roblox.com/docs/reference/engine/classes/SoundService#RespectFilteringEnabled) is set to true.

Important:

- While the playback of sounds will replicate, other properties such as the
  playback speed, pitch, volume, etc. will **not** replicate. This behavior
  can be avoided by creating all sounds locally on the client, as instancing
  sounds will not replicate to the server.
- [Sound.TimePosition](https://create.roblox.com/docs/reference/engine/classes/Sound#TimePosition), [Sound.TimeLength](https://create.roblox.com/docs/reference/engine/classes/Sound#TimeLength), and [Sound.Playing](https://create.roblox.com/docs/reference/engine/classes/Sound#Playing) all properly
  replicate when set from the server.