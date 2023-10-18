This event fires when the game server recognizes that the user's status
for a certain subscription has changed. Note that the server only attempts
to check and update the status **after** the Subscription Purchase modal
has been closed. To account for cases in which the user purchases the
subscription **outside** of the game while playing, you must still prompt
them to purchase the subscription; the prompt shows a message telling the
user they're already subscribed, and after they close the modal, the game
server updates their subscription status and triggers this event.

**Note**: Only server scripts receive this event.