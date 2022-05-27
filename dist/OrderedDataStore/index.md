A **OrderedDataStore** is essentially a [GlobalDataStore](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore) with the exception
that stored values must be **positive integers**. It exposes a method
[GetSortedAsync()](https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore#GetSortedAsync) which allows inspection of
the entries in sorted order using a [DataStorePages](https://create.roblox.com/docs/reference/engine/classes/DataStorePages) object.

See [Data Stores](/scripting/data/data-stores) for an overview on using
ordered data stores.