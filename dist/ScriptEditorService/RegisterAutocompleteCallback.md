Registers an Autocomplete callback `callbackFunction` named `name` with
priority `priority`.

When the Script Editor invokes Autocomplete, all registered autocomplete
callbacks call in order of ascending priority with the autocomplete
request and response. Multiple callbacks may share a priority, but then
their calling order is unpredictable. Each callback is intended to return
a response table with the same format as the response input table.
Callbacks shouldn't yield. The first callback invoked receives the
internal Autocomplete's response as its response table, and subsequent
callbacks receive the previous callback's output as their response table.
Callbacks may either modify the passed table or return a new table of the
same format.

The `callbackFunction` must have the following type:
`(Request: table, Response: table) -> table`

The Request table has the following format:
```lua
type Request = {
  position: {
    line: number,
    character: number
  },
  textDocument: {
    document: ScriptDocument?,
    script: LuaSourceContainer?
  }
}
```

- `position` is the one-indexed cursor position where you are
autocompleting.
- `textDocument.document` is the open [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) you are
completing in, if it exists.
- `textDocument.script` is the [`LuaSourceContainer`](https://create.roblox.com/docs/reference/engine/classes/LuaSourceContainer) you are
completing in, if it exists.

If both `textDocument.document` and `textDocument.script` are present,
then they correspond to each other:
`req.textDocument.document:GetScript() == req.textDocument.script`

The Response table has the following format:
```lua
type Response = {
  items: {
    {
      label: string, -- The label
      kind: Enum.CompletionItemKind?,
      tags: {Enum.CompletionItemTag}?,
      detail: string?,
      documentation: {
        value: string,
      }?,
      overloads: number?,
      learnMoreLink: string?,
      codeSample: string?,
      preselect: boolean?,
      textEdit: {
        newText: string,
        replace: { start: { line: number, character: number }, ["end"]: { line: number, character: number } },
      }?
    }
  }
}
```

- `Response.items` is an array of the completion items. The order of this
array is insignificant, and it resorts in the editor as the user types.
- `Response.items[n].label` is the label of the item which display in the
Autocomplete menu.
- `Response.items[n].kind` specifies what type of Autocomplete item this
is. Primarily this controls the icon given to the item in the editor.
Not all kinds have a unique icon. If not specified, the editor uses the
"Text" icon. Unsupported kinds default to displaying the "Property"
icon.
- `Response.items[n].tags` specifies an array of tags describing this
completion item. See the [`Enum.CompletionItemTag`](https://create.roblox.com/docs/reference/engine/enums/CompletionItemTag) for details on their
function.
- `Response.items[n].details` specifies a string describing details about
the completion item. For default items, this is a string representation
of their type. Note that, in order for the documentation widget to
display, `documentation` must be present, but `documentation.value` may
be empty.
- `Response.items[n].documentation` specifies the main body of the
documentation in its `value` field. `documentation` is present, even if
value is empty, so the documentation window displays if either details
or overloads are specified.
- `Response.items[n].overloads` specifies the number of overloads of a
function autocompletion.
- `Response.items[n].learnMoreLink` links to a relevant page on the
creator docs. This URL must be an https request to create.roblox.com, no
other URLs display in the editor.
- `Response.items[n].codeSample` specifies a sample use of the completion
item. `documentation` must be non-empty to display this field.
- `Response.items[n].preselect` If true, the editor sorts this completion
item ahead of all others and selects it for the user by default. No
effect if false or missing.
- `Response.items[n].textEdit` If present, accepting the completion
applies this text edit - replacing the span between the positions start
and end with newText.

If a callback returns a malformed result or encounters an error, the
editor discards the modified Response table and uses the built-in
Autocomplete result list.