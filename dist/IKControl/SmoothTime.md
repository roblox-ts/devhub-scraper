This value specifies the average number of seconds that it takes for the
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) to reach the
[`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target). The behavior is that of a
critically-damped spring, where the rate of change is proportional to the
distance to the target and no oscillations are present when approaching
the target. Smaller values create a quicker convergence, and larger values
create a slower convergence. A value of 0 disables smoothing. The default
value is 0.05 to provide a very slight smoothing that makes the motion
feel realistic.