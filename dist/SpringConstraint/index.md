A **SpringConstraint** applies a force to its [Attachments](https://developer.roblox.com/en-us/api-reference/class/Attachment) based on spring and damper behavior. Assuming the constraint has [SpringConstraint.Stiffness](https://developer.roblox.com/en-us/api-reference/property/SpringConstraint/Stiffness), it will apply forces based on how far apart the attachments are. If the attachments are further apart than the constraint's [SpringConstraint.FreeLength](https://developer.roblox.com/en-us/api-reference/property/SpringConstraint/FreeLength), the attachments will be forced together. If they are closer than the [SpringConstraint.FreeLength](https://developer.roblox.com/en-us/api-reference/property/SpringConstraint/FreeLength), the attachments will be forced apart. In addition, if [SpringConstraint.Damping](https://developer.roblox.com/en-us/api-reference/property/SpringConstraint/Damping) is set, there will be a damping component to the applied force that scales with the velocity of the attachments.

This constraint, along with a [CylindricalConstraint](https://developer.roblox.com/en-us/api-reference/class/CylindricalConstraint), is ideal for building vehicle suspension as demonstrated in `/articles/building carkit 1|Building a Basic Car`.

Note that if this constraint attaches one part (**A**) to another part (**B**) that is anchored or connected to an anchored part (**Z**), part **A** will not be locally simulated when interacting with a player.

Calculating SpringConstraint Force
----------------------------------

The following helper function exhibits how the force of a [SpringConstraint](https://developer.roblox.com/en-us/api-reference/class/SpringConstraint) is calculated based on various properties of the constraint and its attachments.

local function getSpringForce(spring)
	if not spring:IsA("SpringConstraint") then
		warn(spring .. " is not a spring constraint!")
		return
	end

	local currentLength = spring.CurrentLength
	local freeLength = spring.FreeLength
	if (spring.LimitsEnabled) then
		currentLength = math.clamp(currentLength, spring.MinLength, spring.MaxLength)
		freeLength = math.clamp(freeLength, spring.MinLength, spring.MaxLength)
	end
	local springLength = currentLength - freeLength

	local axis = spring.Attachment0.WorldPosition - spring.Attachment1.WorldPosition
	if axis.Magnitude > 0 then
		axis = axis.Unit
	end
	local effectiveVelocity = spring.Attachment0.Parent.Velocity - spring.Attachment1.Parent.Velocity

	-- https://en.wikipedia.org/wiki/Harmonic\_oscillator
	-- f = -k \* x - c \* dx/dt + fext
	-- Gravity may not be all of the external forces; friction may affect this, but it's harder to account for
	local forceExternal = Vector3.new(0, -workspace.Gravity, 0)
	local force = -spring.Stiffness \* springLength - spring.Damping \* axis:Dot(effectiveVelocity) + axis:Dot(forceExternal)

	force = math.clamp(force, -spring.MaxForce, spring.MaxForce)
	return force
end