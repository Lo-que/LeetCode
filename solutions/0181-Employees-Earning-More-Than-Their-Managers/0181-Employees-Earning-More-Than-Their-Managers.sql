# Write your MySQL query statement below
select e.Name as Employee From Employee e where e.ManagerId is not null and e.salary > (select b.salary from employee b where b.id = e.ManagerId)
select e.Name as Employee From Employee e left join Employee b on e.ManagerId = b.Id where e.salary > b.salary
select e.Name as Employee From Employee as e, Employee as b where e.ManagerId = b.Id and e.salary > b.salary
