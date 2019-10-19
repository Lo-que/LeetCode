# Write your MySQL query statement below
select name,population,area
from world
where population>25000000
or area>3000000;

select w.name,w.population,w.area
from world w
where w.area>3000000
union
select w.name,w.population,w.area
from world w
where w.population>25000000

