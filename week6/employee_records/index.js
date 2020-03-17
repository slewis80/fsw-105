const employees = [];

function Employee(name, jobTitle, salary) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
    this.form = function printEmployeeForm(){
        console.log(this)
    }
}

let bob = new Employee("Bob", "cashier", "$12/hr");
bob.status = "Part Time"
let sam = new Employee("Sam", "stocker", "$15/hr");
let cathy = new Employee("Cathy", "admin", "$17/hr");

bob.form();
sam.form();
cathy.form();

employees.push(bob, sam, cathy);

console.log(employees);