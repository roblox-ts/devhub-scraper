The MessagingService allows game servers in the same game to communicate with each other in real time (< 1 second) using topics. Topics are developer defined strings (1-80 characters) that game servers can send and receive messages.

Delivery is best effort and not guaranteed. Make sure to architect your game so delivery failures are not critical.

Limitations
-----------

Note: these limits are subject to change at any time.

Limit

Maximum

### Size of message

1kB

### Messages sent per game server

150 + 60 \* (number of players in this game server) per minute

### Messages received per topic

(10 + 20 \* number of servers) per minute

### Messages received for entire game

(100 + 50 \* number of servers) per minute

See also
--------

[Cross-Server Messaging Guide](https://developer.roblox.com/articles/cross-server-messaging), explores how to communicate between game servers in greater detail with relevant code samples