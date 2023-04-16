//problem 1
var employees=[
    {
        "firstName":"Sam",
        "department":"Tech",
        "designation":"salary",
        "salary":"40000",
        "raiseel":true,
    },
    {
        "firstName":"Mary",
        "department":"Finance",
        "designation":"Trainee",
        "salary":"18500",
        "raiseel":true,
    },
    {
        "firstName":"Bill",
        "department":"HR",
        "designation":"Executive",
        "salary":"21200",
        "raiseel":false,
    }
]
console.log(employees)
// problem 2
var company={
        "companyName":"Tech Stars",
        "website":"www.techstars.site",
        "employees":employees,
}
//problem 3
var newEmployee={
    "firstName":"Anna",
    "department":"Tech",
    "designation":"Executive",
    "salary":"25600",
    "raiseel":false,
}

company.employees.push(newEmployee);

console.log(company)

//problem 4
let totalSalary=0;
company.employees.forEach((employee)=>{totalSalary += employee.salary});

console.log(totalSalary)

//problem 5
function updateSalary(company){
    company.employees.ForEach((employee)=>{
        if(employee.raiseel){
            employee.salary*=1.1
            employee.raiseel=false
        }
    })
}
updateSalary(company);
console.log(company)

//problem 6 

const workfromhome=["Anna", "Sam"];
company.employees.forEach((employee)=>{
    employee.wfh=workfromhome.includes(employee.firstName);
});

console.log(company)