This function sets **callback** as the function to be run any time the value associated with the `GlobalDataStore|data store's` key changes. Once every minute, OnUpdate polls for changes by other servers. Changes made on the same server will run the function immediately. In other words, functions like `GlobalDataStore/IncrementAsync|IncrementAsync()`, `GlobalDataStore/SetAsync|SetAsync()`, and `GlobalDataStore/UpdateAsync|UpdateAsync()` change the key's value in the data store and will cause the function to run.

See the `Articles/Data store|Data Stores` article for an in-depth guide on data structure, management, error handling, etc.

It's recommended that you **disconnect** the connection when the subscription to the key is no longer needed.