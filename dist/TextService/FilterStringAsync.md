The FilterStringAsync function filters a string being received from a
user, using the [`TextService`](https://create.roblox.com/docs/reference/engine/classes/TextService), and returns a
[`TextFilterResult`](https://create.roblox.com/docs/reference/engine/classes/TextFilterResult) which can be used to distribute the correctly
filtered text accordingly.
#### Usage

This method should be called once each time a user submits a message. Do
not cache the results of this function and re-use them for separate
messages. If a user submits the same text multiple times this method must
be called again each time the message is sent. If the results are cached
and reused spam detection and many forms of context-aware filtering will
be broken and potentially put user safety at risk. Games that improperly
use cached results may face moderation.

However, it is encouraged to keep these result objects to display the same
message to users who join the server later. For example: this can be used
to safely and efficiently implement a server chat log that always uses the
least restrictive filtering for users who join later, or for efficiently
displaying text like a pet name to a user who joins the game after the pet
was first spawned and name filtered.

The optional [`Enum.TextFilterContext`](https://create.roblox.com/docs/reference/engine/enums/TextFilterContext) parameter will not impact the
filtered result of the query. This value will be used to improve Roblox's
text filtering.

Private text is anything that is seen only by specific players, rather
than every player. For example, if the chat is seen by a single player, or
by a selected group of players, then the chat is considered private. Chat
for teams or chat that is potentially visible to a wider group, such as
the server, is considered public. If you are unsure what your text
qualifies as, leave the optional field blank.

Note:

- This method always yields to make a text filtering service call
- This method may throw if there is a service error that can not be
resolved. If this function throws an error please do not retry the
request; this method implements it's own retry logic internally. If this
method fails do not display the text to any user.
- This method currently throws if *fromUserId* is not online on the
current server. We plan to support users who are offline or on a
different server in the future.