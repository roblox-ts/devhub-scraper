The D property is how much **dampening** will be applied to the torque
used to face the [Target](https://create.roblox.com/docs/reference/engine/classes/RocketPropulsion#Target). When the part
approaches the goal orientation it needs to decelerate, otherwise it will
rotate past the goal and have to stop and re-accelerate back toward the
goal. This is often creates undesirable **rubber-banding** effect, so
applying dampening using this property is how that effect is avoided. The
higher this value is set, the greater the dampening curve becomes, or the
slower the part will approach the goal orientation.