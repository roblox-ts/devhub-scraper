This function is currently broken

This function returns a table containing extended statistics on the jobs performed by the task scheduler.

In computing, a task scheduler is a system responsible for executing key tasks at the appropriate intervals.

This function is currently broken and does not return the correct values. You can find live task scheduler statistics in the Task Scheduler window in Roblox Studio.

The first entry in the table returned is a reference dictionary containing the statistics (or headings) available. It is in the following format:

```Lua
{
    ["name"] = "name",
    ["time.average"] = "time.average",
    ["time.variance"] = "time.variance",
    ["time.samples"] = "time.samples",
    ["interval.average"] = "interval.average",
    ["interval.variance"] = "interval.variance",
    ["interval.samples"] = "interval.samples",
    ["dutyfraction"] = "dutyfraction"
}
``` 

The subsequent entries in the table returned are dictionaries containing the above statistics for jobs performed by the task scheduler. For example:

```Lua
{
    ["name"] = "Heartbeat",
    ["time.average"] = 0,
    ["time.variance"] = 0,
    ["time.samples"] = 0,
    ["interval.average"] = 0,
    ["interval.variance"] = 0,
    ["interval.samples"] = 0,
    ["dutyfraction"] = 0
}
``` 

See also
--------

*   [TaskScheduler](https://developer.roblox.com/en-us/api-reference/class/TaskScheduler)
*   [DataModel:GetJobsInfo](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetJobsInfo)
*   [DataModel:GetJobIntervalPeakFraction](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetJobIntervalPeakFraction)
*   [DataModel:GetJobTimePeakFraction](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetJobTimePeakFraction)