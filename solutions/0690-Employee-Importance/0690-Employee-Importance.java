/*
// Employee info
class Employee {
    // It's the unique id of each node;
    // unique id of this employee
    public int id;
    // the importance value of this employee
    public int importance;
    // the id of direct subordinates
    public List<Integer> subordinates;
};
*/
class Solution {
    public int getImportance(List<Employee> employees, int id) {
	    if(employees.size() == 0) return 0;
	    for(Employee e : employees){
	        //获取id指定的Empolyee
	        if(e.id == id){
	            int sum = e.importance;
	            if(e.subordinates.size() > 0){
	                for(int subId : e.subordinates){
	                    sum += getImportance(employees,subId);
	                }
	            }
	            return sum;
	        }
	    }
	    return 0;
	}
}
