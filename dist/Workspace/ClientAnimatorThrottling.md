Specifies the [`Enum.ClientAnimatorThrottlingMode`](https://create.roblox.com/docs/reference/engine/enums/ClientAnimatorThrottlingMode) to use for the local
client.

When enabled, animations on remotely-simulated [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) instances
will begin to throttle. The throttler calculates throttling intensity
using:

- Visibility of a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) in relation to the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)
- In-game FPS
- Number of active animations