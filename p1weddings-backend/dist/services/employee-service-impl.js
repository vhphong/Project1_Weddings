"use strict";
exports.__esModule = true;
exports.EmployeeServiceImpl = void 0;
var employee_dao_postgres_1 = require("../daos/employee-dao-postgres");
var EmployeeServiceImpl = /** @class */ (function () {
    function EmployeeServiceImpl() {
        this.employeeDAO = new employee_dao_postgres_1.EmployeeDaoPostgres();
    }
    EmployeeServiceImpl.prototype.getAllEmployees = function () {
        return this.employeeDAO.getAllEmployees();
    };
    EmployeeServiceImpl.prototype.getOneEmployeeByEmployeeID = function (employeeID) {
        return this.employeeDAO.getOneEmployeeByEmployeeID(employeeID);
    };
    EmployeeServiceImpl.prototype.getEmployeePasswordByEmployeeID = function (employeeID) {
        return this.employeeDAO.getEmployeePasswordByEmployeeID(employeeID);
    };
    EmployeeServiceImpl.prototype.verifyEmployeeEmailExists = function (employeeEmail) {
        return this.employeeDAO.verifyEmployeeEmailExists(employeeEmail);
    };
    EmployeeServiceImpl.prototype.getEmployeeFirstNameByEmailPassword = function (employeeEmail, employeePW) {
        return this.employeeDAO.getEmployeeFirstNameByEmailPassword(employeeEmail, employeePW);
    };
    EmployeeServiceImpl.prototype.getEmployeeLastNameByEmailPassword = function (employeeEmail, employeePW) {
        return this.employeeDAO.getEmployeeLastNameByEmailPassword(employeeEmail, employeePW);
    };
    return EmployeeServiceImpl;
}());
exports.EmployeeServiceImpl = EmployeeServiceImpl;
