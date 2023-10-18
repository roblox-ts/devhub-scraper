The [`FlipbookMode`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#FlipbookMode) property determines
the type of the flipbook animation. The property can be any value of the
[`Enum.ParticleFlipbookMode`](https://create.roblox.com/docs/reference/engine/enums/ParticleFlipbookMode) enum:

- **Loop** – Continuously play through all frames, starting back at
the first frame after playing the last.
- **OneShot** – Play through the animation only once across the
particle's lifetime. With this setting, the
[`ParticleEmitter.FlipbookFramerate`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#FlipbookFramerate) property doesn't apply;
instead, the framerate is determined by the particle's
[`ParticleEmitter.Lifetime`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Lifetime) divided evenly by the number of frames
in the animation. **OneShot** animations are useful for clear
non-repeating animations, such as an explosion that creates a puff of
smoke and then fades out.
- **PingPong** – Play from the first to the last frame, then in
reverse from the last to the first, repeating throughout the
[`Lifetime`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Lifetime) of the particle.
- **Random** – Play the frames in a random order,
blending/crossfading from one frame to the next. This can be useful for
organic particle textures at low framerates, such as stars slowly
twinkling between subtly different shapes.