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
exports.ExpenseDaoPostgres = void 0;
var connection_1 = require("../connection");
var entities_1 = require("../entities");
var errors_1 = require("../errors");
var ExpenseDaoPostgres = /** @class */ (function () {
    function ExpenseDaoPostgres() {
    }
    ExpenseDaoPostgres.prototype.getAllExpenses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sql, result, allExpenses, _i, _a, row, expense;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sql = 'SELECT * FROM expense ORDER BY wedding_id, expenseid';
                        return [4 /*yield*/, connection_1.conn.query(sql)];
                    case 1:
                        result = _b.sent();
                        allExpenses = [];
                        for (_i = 0, _a = result.rows; _i < _a.length; _i++) {
                            row = _a[_i];
                            expense = new entities_1.Expense(row.expenseid, row.wedding_id, row.reason, row.amount);
                            allExpenses.push(expense);
                        }
                        return [2 /*return*/, allExpenses];
                }
            });
        });
    };
    ExpenseDaoPostgres.prototype.getExpenseByExpenseID = function (expenseID) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result, row, retrievedExpense;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'SELECT * FROM expense WHERE expenseid = $1';
                        values = [expenseID];
                        return [4 /*yield*/, connection_1.conn.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rowCount === 0) {
                            throw new errors_1.MissingResourceError("The expense with ID " + expenseID + " does not exist.");
                        }
                        row = result.rows[0];
                        retrievedExpense = new entities_1.Expense(row.expenseid, row.wedding_id, row.reason, row.amount);
                        return [2 /*return*/, retrievedExpense];
                }
            });
        });
    };
    ExpenseDaoPostgres.prototype.getAllExpensesOfAWedding = function (weddingID) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result, retrievedExpenses, _i, _a, row, e;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sql = 'SELECT * FROM expense WHERE wedding_id = $1 ORDER BY wedding_id, expenseid';
                        values = [weddingID];
                        return [4 /*yield*/, connection_1.conn.query(sql, values)];
                    case 1:
                        result = _b.sent();
                        if (result.rowCount === 0) {
                            throw new errors_1.MissingResourceError("The weddingID " + weddingID + " does NOT have any expense.");
                        }
                        retrievedExpenses = [];
                        for (_i = 0, _a = result.rows; _i < _a.length; _i++) {
                            row = _a[_i];
                            e = new entities_1.Expense(row.expenseid, row.wedding_id, row.reason, row.amount);
                            retrievedExpenses.push(e);
                        }
                        return [2 /*return*/, retrievedExpenses];
                }
            });
        });
    };
    ExpenseDaoPostgres.prototype.createExpense = function (weddingID, newExpense) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'INSERT INTO expense (reason, amount, wedding_id) VALUES ($1, $2, $3) returning expenseid';
                        values = [newExpense.reason, newExpense.amount, weddingID];
                        return [4 /*yield*/, connection_1.conn.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        newExpense.expenseID = result.rows[0].expenseid;
                        return [2 /*return*/, newExpense];
                }
            });
        });
    };
    ExpenseDaoPostgres.prototype.updateExpense = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'UPDATE expense SET reason=$1, amount=$2 WHERE expenseid = $3';
                        values = [e.reason, e.amount, e.expenseID];
                        return [4 /*yield*/, connection_1.conn.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rowCount === 0) {
                            throw new errors_1.MissingResourceError("The expense with ID " + e.expenseID + " does not exist.");
                        }
                        return [2 /*return*/, e];
                }
            });
        });
    };
    ExpenseDaoPostgres.prototype.deleteExpenseByExpenseID = function (expenseID) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'DELETE FROM expense WHERE expenseid = $1';
                        values = [expenseID];
                        return [4 /*yield*/, connection_1.conn.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rowCount === 0) {
                            throw new errors_1.MissingResourceError("The expense with ID " + expenseID + " does not exist.");
                        }
                        console.log("Expense ID ${expenseID} deleted successfully.");
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return ExpenseDaoPostgres;
}());
exports.ExpenseDaoPostgres = ExpenseDaoPostgres;
