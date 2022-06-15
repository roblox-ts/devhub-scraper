This property determines the magnitude of the opposing torque of the spring, in the absence of damping, and is expressed as `k_t` in the formula:

T=-k\_t (Δ\*Θ) - c\_t (Δ⋅Θ)

The value defaults to 100.

In the absence of damping, the opposing torque of the spring is proportional to the stiffness parameter. For instance, higher stiffness results in a larger opposing torque, and smaller stiffness results in a smaller opposing torque. The larger the torque value, the faster the axes are pushed together when the relative angle is positive (or away from each other if the relative angle is negative).

In the example below, developers can change the stiffness of the torsion spring as follows:

torsionSpring.Stiffness = 1000