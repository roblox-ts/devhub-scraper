RenderingTest is an internal testing utility used by Roblox engineers to do performance/regression tests on the rendering pipeline. It is expected to be parented inside of the [TestService](https://developer.roblox.com/en-us/api-reference/class/TestService), and will run LocalScripts parented inside of it when the TestService is ran via [TestService:Run](https://developer.roblox.com/en-us/api-reference/function/TestService/Run).

![Selected RenderingTest](https://developer.roblox.com/assets/bltb4ce5031891ef0d3/RenderingTest.png)

One of its more notable features is that, upon being selected in the Explorer, it draws an accurate wireframe of the Camera frustum, visualizing what a Camera would see in the RenderingTest's configuration.

Recording Test Results
----------------------

When a RenderingTest is executed by the TestService, the [CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera) of the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) has its properties updated so it mirrors the Camera configuration of the RenderingTest.

The recorded data is then sent as JSON with an HTTP-POST request to: `localhost:8001/api/v1/submit_test`.

For the RenderingTest to pass in Roblox Studio, the request expects the response to be the string `"passed"`. It will also acknowledge the strings `"failed"` or `"golden"` as a string response.