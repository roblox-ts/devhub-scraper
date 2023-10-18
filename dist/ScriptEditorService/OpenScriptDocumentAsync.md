Requests that a Script Editor open the specified script. Returns (true,
nil) if the request succeeds. Returns (false, string) if the request
fails, with a string that describes the problem.

If the script is already open, this function succeeds and switches tabs to
the associated editor.