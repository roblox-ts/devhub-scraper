This function customizes various settings of the in-game bubble chat.

Before using this, make sure that bubble chat is enabled by setting [Chat.BubbleChatEnabled](https://developer.roblox.com/en-us/api-reference/property/Chat/BubbleChatEnabled) to true.

The settings argument is a table where the keys are the names of the settings you want to edit and the values are what you want to change these settings to. Below is a list of all the supported settings. Note that you don't have to include all of them in the settings argument, omitting some will result in them keeping their default value. Examples are included near the end of this page.

This function is client-side only, attempting to call it on the server will trigger an error.

Name

Explanation

Type

Default value

BubbleDuration

The amount of time, in seconds, to wait before a bubble fades out.

number

15

MaxBubbles

The amount of messages to be displayed, before old ones disappear immediately when a new message comes in.

number

3

BackgroundColor3

Background color of the bubbles

Color3

Color3.fromRGB(250, 250, 250)

TextColor3

Background color of the bubbles

Color3

Color3.fromRGB(57, 59, 61)

TextSize

Size of the text inside the bubbles

number

16

Font

Font of the text inside the bubbles

Enum.Font

Enum.Font.GothamSemibold

Transparency

Transparency of the bubbles, between 0 and 1.

number

0.1

CornerRadius

Radius of the bubble's corner

UDim

UDim.new(0, 12)

TailVisible

Whether or not the tail of the first bubble is visible

bool

True

Padding

Space between the text and the edges of the bubble, in pixels

number

8

MaxWidth

Maximum width of the bubbles, in pixels

number

300

VerticalStudsOffset

Extra space between the head of the character and the bubbles. Userful if you want to leave some space for other character billboard UIs

number

0

BubblesSpacing

Space between two bubbles, in pixels

number

6

MinimizeDistance

Distance (from the camera) that bubbles turn into a single bubble with ellipses (...) to indicate chatter

number

40

MaxDistance

Maximum distance (from the camera) that bubbles are shown at

number

100

See also
--------

*   Developers who are interested interested in configuring their games' chat system even further should take a look at the `/articles/Lua Chat System|Lua Chat System|Lua Chat System` article