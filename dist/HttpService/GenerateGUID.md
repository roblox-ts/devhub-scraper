The GenerateGUID function randomly creates a [universally unique identifier (UUID)](https://en.wikipedia.org/wiki/Universally_unique_identifier) string.

The sixteen octets of a UUID are represented as 32 hexadecimal (base 16) digits, displayed in 5 groups separated by hyphens in the form `8-4-4-4-12` for a total of 36 characters. For example: `123e4567-e89b-12d3-a456-426655440000`.

The _wrapInCurlyBraces_ argument determines whether the returned string is wrapped in curly braces _{}_. For instance:

*   **true** - _{94b717b2-d54f-4340-a504-bd809ef5bf5c}_
*   **false** - _db454790-7563-44ed-ab4b-397ff5df737b_