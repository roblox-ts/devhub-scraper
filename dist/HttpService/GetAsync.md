The GetAsync function sends an HTTP GET request. It functions similarly to
[`RequestAsync`](https://create.roblox.com/docs/reference/engine/classes/HttpService#RequestAsync) except that it accepts
HTTP request parameters as method parameters instead of a single
dictionary and returns only the body of the HTTP response. Generally, this
method is useful only as a shorthand and
[`RequestAsync`](https://create.roblox.com/docs/reference/engine/classes/HttpService#RequestAsync) should to be used in most
cases.

When true, the `nocache` parameter prevents this function from caching
results from previous calls with the same `url`.