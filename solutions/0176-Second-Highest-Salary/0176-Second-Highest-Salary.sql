# Write your MySQL query statement below
SELECT Max(Salary) AS SecondHighestSalary FROM Employee WHERE Salary < (SELECT Max(Salary) FROM Employee);
