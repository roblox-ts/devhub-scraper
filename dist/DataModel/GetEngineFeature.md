The goal of this API is to provide a stable interface for core script-level Lua code to query for enabled engine features.

If a feature does not exist, this method returns false. This is intended for the case where new Lua is running on an old engine version.

Example:

if game:GetEngineFeature("FooApi") then
  -- code using Foo
end