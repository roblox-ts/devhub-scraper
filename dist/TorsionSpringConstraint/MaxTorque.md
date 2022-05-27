This property determines the maximum torque supported by the spring. The
value defaults to 1000.0.

If a part isn't moving, consider raising this value (and also check that
it is not [Anchored](https://create.roblox.com/docs/reference/engine/classes/BasePart#Anchored) or attached to another anchored
part).

#### What is torque

Torque is equivalent to a force applied over a distance (T = force \*
distance). The same way that applying a force translates into
[pulling.pushing](https://create.roblox.com/docs/reference/engine/classes/pulling#pushing) an object, applying a torque results in `rotating` the
object.

#### Setting the MaxTorque

In the example below, you can change the maximum torque provided by the
torsion spring as follows:

```lua
torsionSpring.MaxTorque = 300
```