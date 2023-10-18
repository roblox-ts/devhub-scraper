Requests that the editor associated with this document close. Yields the
current thread until the editor responds to the request. If the function
succeeds, it returns (true, nil). If the function fails, it returns
(false, string) as a description of the problem.

This function can't close the command bar.