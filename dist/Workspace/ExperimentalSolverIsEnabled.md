Returns true if the game has the PGS Physics solver enabled.

The PGS Physics solver was previously called the 'Experimental' solver, before becoming Roblox's default server. This function returns the same result as `Workspace:PGSIsEnabled`.

print(workspace:PGSIsEnabled() == workspace:ExperimentalSolverIsEnabled()) -- true

This function can only be used by plugins and the command bar.

What is the PGS Solver?
-----------------------

The PGS Solver is Roblox's state of the art physics solver which offers a range of simulation capabilities not available in Roblox's legacy solver.

Note, the PGS solver is currently the default physics solver used by Roblox. Developers should expect the legacy physics solver to be deprecated or removed at some point in the future.

For more information on the PGS Solver, please see [this article](https://developer.roblox.com/articles/Building-with-PGS).