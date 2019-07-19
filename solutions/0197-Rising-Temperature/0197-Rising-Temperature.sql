# Write your MySQL query statement below
select weather.Id as Id from Weather join weather w on DATEDIFF(weather.RecordDate, w.RecordDate) = 1 AND weather.Temperature > w.Temperature
