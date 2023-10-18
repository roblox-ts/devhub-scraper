The MessagingService allows game servers in the same game to communicate with
each other in real time (< 1 second) using topics. Topics are developer
defined strings (1-80 characters) that game servers can send and receive
messages.

Delivery is best effort and not guaranteed. Make sure to architect your game
so delivery failures are not critical.
## Limitations

Note: these limits are subject to change.
| Limit | Maximum |
| - | - |
| **Size of message** | 1kB |
| **Messages sent per game server** | 150 + 60 * (number of players in this game server) per minute |
| **Messages received per topic** | (10 + 20 * number of servers) per minute |
| **Messages received for entire game** | (100 + 50 * number of servers) per minute |
| **Subscriptions allowed per game server** | 5 + 2 * (number of players in this game server) |

[Cross-Server Messaging](https://create.roblox.com/docs/cloud-services/cross-server-messaging)
explores how to communicate between game servers in greater detail with
relevant code samples. Note that Cross-Server Messaging has separate
namespaces for live games and Studio, and they can't communicate with each
other.

If you want to publish ad-hoc messages to live game servers, you can use the
[Open Cloud APIs](https://create.roblox.com/docs/cloud/open-cloud/usage-messaging).