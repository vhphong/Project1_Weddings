"use strict";
exports.__esModule = true;
exports.ExpenseServiceImpl = void 0;
var expense_dao_postgres_1 = require("../daos/expense-dao-postgres");
var ExpenseServiceImpl = /** @class */ (function () {
    function ExpenseServiceImpl() {
        this.expenseDAO = new expense_dao_postgres_1.ExpenseDaoPostgres();
    }
    ExpenseServiceImpl.prototype.createExpense = function (weddingID, expense) {
        return this.expenseDAO.createExpense(weddingID, expense);
    };
    ExpenseServiceImpl.prototype.getAllExpenses = function () {
        return this.expenseDAO.getAllExpenses();
    };
    ExpenseServiceImpl.prototype.getExpenseByExpenseID = function (expenseID) {
        return this.expenseDAO.getExpenseByExpenseID(expenseID);
    };
    ExpenseServiceImpl.prototype.getAllExpensesOfAWedding = function (weddingID) {
        return this.expenseDAO.getAllExpensesOfAWedding(weddingID);
    };
    ExpenseServiceImpl.prototype.updateExpense = function (expense) {
        return this.expenseDAO.updateExpense(expense);
    };
    ExpenseServiceImpl.prototype.deleteExpenseByExpenseID = function (expenseID) {
        return this.expenseDAO.deleteExpenseByExpenseID(expenseID);
    };
    return ExpenseServiceImpl;
}());
exports.ExpenseServiceImpl = ExpenseServiceImpl;
