The LightInfluence property determines how much environment light affects
the color of individual particles when they render. It must be in the
range [0, 1]; behavior of values outside of this range are not defined. At
0, particles are not influenced by light at all (they retain full
brightness), and at 1 particles are fully influenced by light (in complete
darkness, particles will be black).

By default, this value is 1 if inserted with Studio tools. If inserted
using `Datatype.Instance.new()`, it is 0.