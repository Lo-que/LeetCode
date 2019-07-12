# Write your MySQL query statement below
select customers.name as 'Customers' from customers where customers.id not in ( select customerid from orders );

select c.Name as Customers from Customers c left join Orders o on c.Id=o.CustomerId where CustomerId is null;
