"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var expense_dao_postgres_1 = require("../daos/expense-dao-postgres");
var wedding_dao_postgres_1 = require("../daos/wedding-dao-postgres");
var entities_1 = require("../entities");
var expenseDAO = new expense_dao_postgres_1.ExpenseDaoPostgres();
var weddingDAO = new wedding_dao_postgres_1.WeddingDaoPostgres();
// PASSED
test("Test: Create expense for an existed wedding", function () { return __awaiter(void 0, void 0, void 0, function () {
    var testExpense, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                testExpense = new entities_1.Expense(0, 1, 'Flowers', 11111111);
                return [4 /*yield*/, expenseDAO.createExpense(testExpense.wedding_ID, testExpense)];
            case 1:
                // createExpense
                testExpense = _a.sent();
                return [4 /*yield*/, expenseDAO.getExpenseByExpenseID(testExpense.expenseID)];
            case 2:
                result = _a.sent();
                // console.log(result);
                expect("Test: Create expense for an existed wedding " + testExpense.expenseID).not.toBe(0);
                return [2 /*return*/];
        }
    });
}); });
// PASSED
test("Test: Get all expenses", function () { return __awaiter(void 0, void 0, void 0, function () {
    var expense1, expense2, expense3, result1, result2, result3, allExpenses;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expense1 = new entities_1.Expense(0, 1, 'Cake', 22);
                expense2 = new entities_1.Expense(0, 1, 'Flowers', 33);
                expense3 = new entities_1.Expense(0, 1, 'Hotel', 44);
                return [4 /*yield*/, expenseDAO.createExpense(expense1.wedding_ID, expense1)];
            case 1:
                expense1 = _a.sent();
                return [4 /*yield*/, expenseDAO.createExpense(expense2.wedding_ID, expense2)];
            case 2:
                expense2 = _a.sent();
                return [4 /*yield*/, expenseDAO.createExpense(expense3.wedding_ID, expense3)];
            case 3:
                expense3 = _a.sent();
                return [4 /*yield*/, expenseDAO.getExpenseByExpenseID(expense1.expenseID)];
            case 4:
                result1 = _a.sent();
                return [4 /*yield*/, expenseDAO.getExpenseByExpenseID(expense2.expenseID)];
            case 5:
                result2 = _a.sent();
                return [4 /*yield*/, expenseDAO.getExpenseByExpenseID(expense3.expenseID)];
            case 6:
                result3 = _a.sent();
                console.log(result1);
                console.log(result2);
                console.log(result3);
                return [4 /*yield*/, expenseDAO.getAllExpenses()];
            case 7:
                allExpenses = _a.sent();
                expect(allExpenses.length).toBeGreaterThanOrEqual(3);
                return [2 /*return*/];
        }
    });
}); });
// PASSED
test("Test: Get expense by expense ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var testExpense, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                testExpense = new entities_1.Expense(0, 1, 'Cake', 55);
                console.log(testExpense);
                return [4 /*yield*/, expenseDAO.createExpense(testExpense.wedding_ID, testExpense)];
            case 1:
                testExpense = _a.sent();
                return [4 /*yield*/, expenseDAO.getExpenseByExpenseID(testExpense.expenseID)];
            case 2:
                result = _a.sent();
                console.log(result);
                // const retrievedExpense: Expense = await expenseDAO.getExpenseByExpenseID(testExpense.expenseID);
                expect(result.expenseID).toBe(testExpense.expenseID);
                return [2 /*return*/];
        }
    });
}); });
// PASSED
test("Test: Get all expenses by wedding ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var testExpense, result, retrievedAllExpenses, _i, retrievedAllExpenses_1, eachExpense;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                testExpense = new entities_1.Expense(0, 1, 'Cake', 66);
                console.log(testExpense);
                return [4 /*yield*/, expenseDAO.createExpense(testExpense.wedding_ID, testExpense)];
            case 1:
                testExpense = _a.sent();
                console.log(testExpense);
                return [4 /*yield*/, expenseDAO.getExpenseByExpenseID(testExpense.expenseID)];
            case 2:
                result = _a.sent();
                console.log(result);
                return [4 /*yield*/, expenseDAO.getAllExpensesOfAWedding(testExpense.wedding_ID)];
            case 3:
                retrievedAllExpenses = _a.sent();
                for (_i = 0, retrievedAllExpenses_1 = retrievedAllExpenses; _i < retrievedAllExpenses_1.length; _i++) {
                    eachExpense = retrievedAllExpenses_1[_i];
                    console.log(eachExpense);
                    expect(eachExpense.wedding_ID).toBe(testExpense.wedding_ID);
                }
                return [2 /*return*/];
        }
    });
}); });
// PASSED
test("Test: Update expense", function () { return __awaiter(void 0, void 0, void 0, function () {
    var testExpense;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                testExpense = new entities_1.Expense(0, 1, 'Cake', 77);
                return [4 /*yield*/, expenseDAO.createExpense(testExpense.wedding_ID, testExpense)];
            case 1:
                testExpense = _a.sent();
                console.log(testExpense);
                testExpense.reason = 'Flowers';
                testExpense.amount = 77;
                return [4 /*yield*/, expenseDAO.updateExpense(testExpense)];
            case 2:
                testExpense = _a.sent();
                console.log("updated expense: " + testExpense);
                expect(testExpense.reason).toBe('Flowers');
                return [2 /*return*/];
        }
    });
}); });
// PASSED
test("Test: Delete expense", function () { return __awaiter(void 0, void 0, void 0, function () {
    var testExpense, result, deleteResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                testExpense = new entities_1.Expense(0, 1, 'Cake', 88);
                console.log(testExpense);
                return [4 /*yield*/, expenseDAO.createExpense(testExpense.wedding_ID, testExpense)];
            case 1:
                testExpense = _a.sent();
                console.log(testExpense);
                return [4 /*yield*/, expenseDAO.getExpenseByExpenseID(testExpense.expenseID)];
            case 2:
                result = _a.sent();
                console.log(result);
                return [4 /*yield*/, expenseDAO.deleteExpenseByExpenseID(result.expenseID)];
            case 3:
                deleteResult = _a.sent();
                expect(deleteResult).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
