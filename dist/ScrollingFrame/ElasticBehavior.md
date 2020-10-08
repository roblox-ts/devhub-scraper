This property determines when elastic scrolling is allowed. It can be used to dictate if and when the [ScrollingFrame](https://developer.roblox.com/en-us/api-reference/class/ScrollingFrame) canvas is elastic. Defaults to WhenScrollable.

What's the Differences Between Elastic and Non-Elastic
------------------------------------------------------

### Elastic

The image below demonstrates Enum.Elasticity.Always an Enum.Elasticity.WhenScrollable when the canvas is scrollable:  
![Enum.Elasticity.Always](https://developer.roblox.com/assets/blt9196df6e72785924/ElasticityAlways.gif)

### Non-Elastic

The image below demonstrates Enum.Elasticity.Never:  
![Enum.Elasticity.Never](https://developer.roblox.com/assets/blt11cf6cfa633763bc/ElasticityNever.gif)

Enums
-----

It can be set to several [ElasticBehavior](https://developer.roblox.com/en-us/api-reference/enum/ElasticBehavior) enum values, which determine how elastic scrolling behaves:

Name

Description

Always

Regardless of scrolling, you can always move the canvas a bit outside the bounds

Never

You can never move the canvas outside the rect bounds

WhenScrollable

(default) Elastic scrolling is allowed when canvas size is larger than the rect size

See also
--------

*   [ScrollingFrame.ScrollingDirection](https://developer.roblox.com/en-us/api-reference/property/ScrollingFrame/ScrollingDirection), the direction scrolling is allowed in this scrolling frame