The D property determines how much **dampening** will be applied to the
force used toward reaching the goal
[`Position`](https://create.roblox.com/docs/reference/engine/classes/BodyPosition#Position). When the part approaches the goal
position it needs to decelerate, otherwise it will move past the goal and
have to stop and re-accelerate back toward the goal. This is often creates
undesirable **rubber-banding** effect, so applying dampening using this
property is how that effect is avoided. The higher this value is set, the
greater the dampening curve becomes, or the slower the part will approach
the goal position.