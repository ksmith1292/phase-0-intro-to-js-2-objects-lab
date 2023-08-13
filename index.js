const employee = {'name':'kevin', 'streetAddress': '123 john doe'};
function updateEmployeeWithKeyAndValue(object,key,value) {
    return {...object,[key]: value}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value
return employee;}


function deleteFromEmployeeByKey(employee,key) {
var employee2  =  {...employee}
delete employee2[key]
return employee2
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
delete employee[key]
return employee
}
