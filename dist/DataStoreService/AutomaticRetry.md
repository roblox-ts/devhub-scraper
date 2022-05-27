Sets whether data store functions should automatically retry or not.

DataStoreService does not respect this property because automatic retry
has been disabled due to technical reasons. Therefore, you must implement
systems for retrying operations yourself. It is possible that automatic
retry will be enabled again in the future.