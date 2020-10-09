Returns a table containing basic information about the jobs performed by the task scheduler

In computing, a task scheduler is a system responsible for executing key tasks at the appropriate intervals.

You can also find live task scheduler statistics in the Task Scheduler window in Roblox Studio.

The first entry in the table returned is a reference dictionary containing the statistics (or headings) available. It is in the following format:

```lua
{
    ["name"] = "name",
    ["averageDutyCycle"] = "averageDutyCycle",
    ["averageStepsPerSecond"] = "averageStepsPerSecond",
    ["averageStepTime"] = "averageStepTime",
    ["averageError"] = "averageError",
    ["isRunning"] = "isRunning",
}
``` 

The subsequent entries in the table returned are dictionaries containing the above statistics for jobs performed by the task scheduler. For example:

```lua
{
    ["name"] = "Heartbeat",
    ["averageDutyCycle"] = 0,
    ["averageStepsPerSecond"] = 0,
    ["averageStepTime"] = 0,
    ["averageError"] = 0,
    ["isRunning"] = false,
}
``` 

See also
--------

*   [TaskScheduler](https://developer.roblox.com/en-us/api-reference/class/TaskScheduler)
*   [DataModel:GetJobsExtendedStats](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetJobsExtendedStats)
*   [DataModel:GetJobIntervalPeakFraction](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetJobIntervalPeakFraction)
*   [DataModel:GetJobTimePeakFraction](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetJobTimePeakFraction)