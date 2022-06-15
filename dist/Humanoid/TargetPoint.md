**Do not use**  
This property only works with Experimental Mode enabled, which has been entirely discontinued.

This property describes a 3D position in space where the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) controlling this [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) last clicked with a [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool) equipped.

This property is primarily used by classic tools to determine what a humanoid is targeting when they activate a tool. If you give an NPC a classic rocket launcher, set their **TargetPoint**, and then call the tool's [Tool:Activate](https://developer.roblox.com/en-us/api-reference/function/Tool/Activate) function, you can make the NPC fire a rocket at the target point.