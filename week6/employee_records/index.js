const employees = [];

function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}
Employee.prototype.printEmployeeForm = function() {
    console.log(this)
}

let bob = new Employee("Bob", "cashier", "$12/hr", "Part Time");
let sam = new Employee("Sam", "stocker", "$15/hr");
let cathy = new Employee("Cathy", "admin", "$17/hr");

bob.printEmployeeForm();
sam.printEmployeeForm();
cathy.printEmployeeForm();

employees.push(bob, sam, cathy);

console.log(employees);