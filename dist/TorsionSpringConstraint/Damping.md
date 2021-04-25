This property determines how the angular velocity is dampened by the constraint and is expressed as the torsional damping `c_t` in the formula:

T=-k\_t (Δ\*Θ) - c\_t (Δ⋅Θ)

The value defaults to 0.01.

Damping of the torsion spring causes the spring to oppose the relative angular velocity. For instance, if the two axes are rotating toward each other with an angular velocity (Δ⋅Θ < 0) an opposing torque will try to slow down this relative rotation (T>0). If the axes were rotating away from each other (Δ⋅Θ > 0) an opposing torque (T<0) will slow down this angular velocity. In both cases, the damping is resulting in a torque that opposes the motion.

In the example below, developers can change the damping of the torsion spring as follows:

torsionSpring.Damping = 1.0