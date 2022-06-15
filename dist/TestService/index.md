The TestService is a service used by Roblox internally to run analytical tests on their engine.  
It makes it possible to write sophisticated tests right inside a game.  

Macros
------

Scripts that are executed inside of the TestService (via [TestService:Run](https://developer.roblox.com/en-us/api-reference/function/TestService/Run)) have access to special macros that directly invoke functions under the TestService. Macros are essentially substitutions for large blocks of code that shouldn't need to be rewritten each time you want to call them.

### RBX\_CHECK

This macro does tests with calls to the [TestService:Check](https://developer.roblox.com/en-us/api-reference/function/TestService/Check) function.

Macro

Test Condition

RBX\_CHECK(cond)

cond == true

RBX\_CHECK\_MESSAGE(cond, failMsg)

cond == true

RBX\_CHECK\_THROW(CODE)

pcall(function () CODE end) == false

RBX\_CHECK\_NO\_THROW(CODE)

pcall(function () CODE end) == true

RBX\_CHECK\_EQUAL(a,b)

a == b

RBX\_CHECK\_NE(a,b)

a ~= b

RBX\_CHECK\_GE(a,b)

a >= b

RBX\_CHECK\_LE(a,b)

a <= b

RBX\_CHECK\_GT(a,b)

a > b

RBX\_CHECK\_LT(a,b)

a < b

### RBX\_REQUIRE

This macro does tests with calls to the [TestService:Require](https://developer.roblox.com/en-us/api-reference/function/TestService/Require) function.

Macro

Test Condition

RBX\_REQUIRE(cond)

cond == true

RBX\_REQUIRE\_MESSAGE(cond, failMsg)

cond == true

RBX\_REQUIRE\_THROW(CODE)

pcall(function () CODE end) == false

RBX\_REQUIRE\_NO\_THROW(CODE)

pcall(function () CODE end) == true

RBX\_REQUIRE\_EQUAL(a,b)

a == b

RBX\_REQUIRE\_NE(a,b)

a ~= b

RBX\_REQUIRE\_GE(a,b)

a >= b

RBX\_REQUIRE\_LE(a,b)

a <= b

RBX\_REQUIRE\_GT(a,b)

a > b

RBX\_REQUIRE\_LT(a,b)

a < b

### RBX\_WARN

This macro does tests with calls to the [TestService:Warn](https://developer.roblox.com/en-us/api-reference/function/TestService/Warn) function.

Macro

Test Condition

RBX\_WARN(cond)

cond == true

RBX\_WARN\_MESSAGE(cond, failMsg)

cond == true

RBX\_WARN\_THROW(CODE)

pcall(function () CODE end) == false

RBX\_WARN\_NO\_THROW(CODE)

pcall(function () CODE end) == true

RBX\_WARN\_EQUAL(a,b)

a == b

RBX\_WARN\_NE(a,b)

a ~= b

RBX\_WARN\_GE(a,b)

a >= b

RBX\_WARN\_LE(a,b)

a <= b

RBX\_WARN\_GT(a,b)

a > b

RBX\_WARN\_LT(a,b)

a < b

### Additional Macros

Macro

Description

RBX\_ERROR(msg)

Directly calls the \`TestService/Error\` function.

RBX\_FAIL(msg)

Directly calls the \`TestService/Fail\` function.

RBX\_MESSAGE(msg)

Directly calls the \`TestService/Message\` function.

See Also
--------

*   [Speeding Roblox Development with Continuous Testing](http://blog.roblox.com/2012/04/speeding-roblox-development-with-continuous-testing)