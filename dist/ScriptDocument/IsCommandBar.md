Returns true if the [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) represents the Command bar. The
command bar has special rules and limitations in this API:

- Studio creates the Command bar before running plugins, so it doesn't
always fire the opened event, although it does close and reopen as
Studio transitions between DataModels.
- You can't edit the Command bar with `EditTextAsync` for security
reasons.