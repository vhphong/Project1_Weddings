"use strict";
exports.__esModule = true;
exports.Employee = exports.Expense = exports.Wedding = void 0;
var Wedding = /** @class */ (function () {
    function Wedding(weddingID, 
    // public weddingDate: JSON,
    weddingDate, weddingLocation, name, budget) {
        this.weddingID = weddingID;
        this.weddingDate = weddingDate;
        this.weddingLocation = weddingLocation;
        this.name = name;
        this.budget = budget;
    }
    return Wedding;
}());
exports.Wedding = Wedding;
var Expense = /** @class */ (function () {
    function Expense(expenseID, wedding_ID, reason, amount) {
        this.expenseID = expenseID;
        this.wedding_ID = wedding_ID;
        this.reason = reason;
        this.amount = amount;
    }
    return Expense;
}());
exports.Expense = Expense;
var Employee = /** @class */ (function () {
    function Employee(employeeID, employeeFname, employeeLname, employeeEmail, employeePassword) {
        this.employeeID = employeeID;
        this.employeeFname = employeeFname;
        this.employeeLname = employeeLname;
        this.employeeEmail = employeeEmail;
        this.employeePassword = employeePassword;
    }
    return Employee;
}());
exports.Employee = Employee;
