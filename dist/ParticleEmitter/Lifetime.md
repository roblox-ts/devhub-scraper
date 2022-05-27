The Lifetime property defines the maximum and minimum ages a newly emit
particle will. When a particle is emit, a random lifetime is chosen
uniformly. Lifetimes are stored on a per-particle basis, so if this value
is changed, existing particles will stay "alive" until their randomly
chosen lifetime is lived. The bounds for this property should be in the
range [0, 20]. By default, [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter)s will have a lifetime of 5 to
10 seconds. A lifetime of 0 will prevent particles from being emit in the
first place.

it is important to pick a sensible Lifetime and [ParticleEmitter.Rate](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Rate) so
that you don't have too many particles being rendered at once. Long
lifetimes and high emission rates are a quick way to cause performance
issues. If you need many particles, pick a balance of lifetime and rate.
To instantly remove any presently emit particles (perhaps ones with
absurdly long lifetimes), you can call [ParticleEmitter:Clear](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Clear).