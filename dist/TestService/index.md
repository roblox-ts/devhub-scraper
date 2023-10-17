The TestService is a service used by Roblox internally to run analytical tests
on their engine. It makes it possible to write sophisticated tests right
inside a game.
## Macros

Scripts that are executed inside of the TestService (via
[`TestService:Run()`](https://create.roblox.com/docs/reference/engine/classes/TestService#Run)) have access to special macros that directly invoke
functions under the TestService. Macros are essentially substitutions for
large blocks of code that shouldn't need to be rewritten each time you want to
call them.
### RBX_CHECK

This macro does tests with calls to the [`TestService:Check()`](https://create.roblox.com/docs/reference/engine/classes/TestService#Check) function.
| Macro | Test Condition |
| RBX_CHECK(cond) | cond == true |
| RBX_CHECK_MESSAGE(cond, failMsg) | cond == true |
| RBX_CHECK_THROW(CODE) | pcall(function () CODE end) == false |
| RBX_CHECK_NO_THROW(CODE) | pcall(function () CODE end) == true |
| RBX_CHECK_EQUAL(a,b) | a == b |
| RBX_CHECK_NE(a,b) | a ~= b |
| RBX_CHECK_GE(a,b) | a >= b |
| RBX_CHECK_LE(a,b) | a <= b |
| RBX_CHECK_GT(a,b) | a > b |
| RBX_CHECK_LT(a,b) | a < b |

### RBX_REQUIRE

This macro does tests with calls to the [`TestService:Require()`](https://create.roblox.com/docs/reference/engine/classes/TestService#Require)
function.
| Macro | Test Condition |
| RBX_REQUIRE(cond) | cond == true |
| RBX_REQUIRE_MESSAGE(cond, failMsg) | cond == true |
| RBX_REQUIRE_THROW(CODE) | pcall(function () CODE end) == false |
| RBX_REQUIRE_NO_THROW(CODE) | pcall(function () CODE end) == true |
| RBX_REQUIRE_EQUAL(a,b) | a == b |
| RBX_REQUIRE_NE(a,b) | a ~= b |
| RBX_REQUIRE_GE(a,b) | a >= b |
| RBX_REQUIRE_LE(a,b) | a <= b |
| RBX_REQUIRE_GT(a,b) | a > b |
| RBX_REQUIRE_LT(a,b) | a < b |

### RBX_WARN

This macro does tests with calls to the [`TestService:Warn()`](https://create.roblox.com/docs/reference/engine/classes/TestService#Warn) function.
| Macro | Test Condition |
| RBX_WARN(cond) | cond == true |
| RBX_WARN_MESSAGE(cond, failMsg) | cond == true |
| RBX_WARN_THROW(CODE) | pcall(function () CODE end) == false |
| RBX_WARN_NO_THROW(CODE) | pcall(function () CODE end) == true |
| RBX_WARN_EQUAL(a,b) | a == b |
| RBX_WARN_NE(a,b) | a ~= b |
| RBX_WARN_GE(a,b) | a >= b |
| RBX_WARN_LE(a,b) | a <= b |
| RBX_WARN_GT(a,b) | a > b |
| RBX_WARN_LT(a,b) | a < b |

### Additional Macros
| Macro | Description |
| RBX_ERROR(msg) | Directly calls the [`TestService:Error()`](https://create.roblox.com/docs/reference/engine/classes/TestService#Error) function. |
| RBX_FAIL(msg) | Directly calls the [`TestService:Fail()`](https://create.roblox.com/docs/reference/engine/classes/TestService#Fail) function. |
| RBX_MESSAGE(msg) | Directly calls the [`TestService:Message()`](https://create.roblox.com/docs/reference/engine/classes/TestService#Message) function. |