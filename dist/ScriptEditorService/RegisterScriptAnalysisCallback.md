Registers a Script Analysis callback `callbackFunction` named `name` with
`priority`. When Script Analysis in Studio runs, all registered callbacks
call in order of ascending priority. Each callback is intended to return a
response table matching the format specified below. Callbacks should not
yield.

The request table has the following format, where `script` is the
`LuaSourceContainer` that is going to be analyzed.
```lua
type Request = {
  script: LuaSourceContainer?
}
```

The response table has the following format, where `diagnostics` is an
array of diagnostic tables. Each diagnostic table has the entries listed
below.
```lua
type Response = {
  diagnostics: {
    {
      range: {
        start: {
          line: number,
          character: number,
        },
        ["end"]: {
          line: number,
          character: number,
        }
      },
      code: string?
      message: string
      severity: Enum.Severity?
      codeDescription: { href: string }?
    },
  }
}
```

- `range` represents a text range that should be highlighted by the
linter, providing what line/character to start highlighting and what
line/character to stop highlighting.
- `code` is a label for the message.
- `message` is a warning message to be displayed for the line. This will
also appear on a tooltip when the user hovers their cursor over the line
in the Script Editor.
- `severity` is a [`Enum.Severity`](https://create.roblox.com/docs/reference/engine/enums/Severity) value for the diagnostics. This
determines how the diagnostic is categorized in the Script Analysis tool
in Studio, as well as how text is highlighted in the Script Editor.
- `codeDescription` links to a relevant page on the creator docs. This URL
must be an `https` request to `create.roblox.com`; no other URLs display
in the editor.