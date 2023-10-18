Asks the editor to set its cursor selection to the argument values. Both
anchor arguments must be passed, or neither. If neither is passed, then
they each default to being the same as the corresponding cursor argument.
The editor might decline to update its cursor if the text content of the
document has changed, or the cursor has moved since the request was made.
Returns (true, nil) if the cursor was updated, and (false, string) with an
explanation string if it was not. Yields the current thread until the
editor replies.