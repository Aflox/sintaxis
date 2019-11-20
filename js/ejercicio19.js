function Employee (){
    this.name = "";
    this.dept = "general";
}

function Employee (name, dept){
    this.name = name;
    this.dept = dept;
}

Employee.toString();

function Manager (){
    this.reports = [];
}

function Manager (name, dept, reports){
    this.name = name;
    this.dept = dept;
    this.reports = reports;
}

Manager.prototype = new Employee;

Manager.toString();

function WorkerBee (){
    this.projects = [""];
}

function WorkerBee (name, dept, projects){
    this.name = name;
    this.dept = dept;
    this.projects = projects;
}

WorkerBee.prototype = new Employee;

WorkerBee.toString();

function SalesPerson (){
    this.quota = 100;
    this.dept = "sales";
}

SalesPerson.prototype = new WorkerBee;

SalesPerson.toString();

function Engineer (){
    this.machine = "";
    this.dept = "engineering";
}

Engineer.prototype = new WorkerBee;

Engineer.toString();