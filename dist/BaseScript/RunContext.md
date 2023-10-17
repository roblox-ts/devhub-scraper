Determines the context under which the script will run.

When using the Legacy RunContext scripts will only run when parented to
certain containers dependent on whether they are a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

If RunContext is assigned while the script is running any threads created
by the script will be terminated and the script will start running under
the new context if possible.

Note, RunContext cannot be used from a LocalScript.