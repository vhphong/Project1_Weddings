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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var entities_1 = require("./entities");
var errors_1 = require("./errors");
var wedding_service_impl_1 = require("./services/wedding-service-impl");
var expense_service_impl_1 = require("./services/expense-service-impl");
var employee_service_impl_1 = require("./services/employee-service-impl");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
var weddingService = new wedding_service_impl_1.WeddingServiceImpl();
var expenseService = new expense_service_impl_1.ExpenseServiceImpl();
var employeeService = new employee_service_impl_1.EmployeeServiceImpl();
/////////////////////////////////////////////////////////////////
// Wedding Services
/**
 * POST /weddings
 *    creates a new wedding
 *    returns 201 status code
 */
app.post("/weddings", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newWedding;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newWedding = req.body;
                return [4 /*yield*/, weddingService.createWedding(newWedding)];
            case 1:
                newWedding = _a.sent();
                res.status(201);
                res.send(newWedding);
                return [2 /*return*/];
        }
    });
}); });
/**
 * GET /weddings
 *    gets all weddings
 *    return 200
 */
app.get("/weddings", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allWeddings, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, weddingService.getAllWeddings()];
            case 1:
                allWeddings = _a.sent();
                res.status(200);
                res.send(allWeddings);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                if (error_1 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send(error_1);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * GET /weddings/:id
 *    gets a wedding with wedding ID
 *    returns 404 if wedding DNE
 */
app.get("/weddings/:weddingid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var weddingID, retrievedWedding, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                weddingID = Number(req.params.weddingid);
                return [4 /*yield*/, weddingService.getWeddingByWeddingID(weddingID)];
            case 1:
                retrievedWedding = _a.sent();
                res.send(retrievedWedding);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                if (error_2 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send(error_2);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * PUT /weddings
 *    update a wedding
 *    returns 404 if wedding DNE
 */
app.put("/weddings/:weddingid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var weddingID, retrievedWedding, retrievedWeddingDate, retrievedWeddingLocation, retrievedWeddingName, retrievedWeddingBudget, reqBody, newDate, newLocation, newName, newBudget, updatedWedding, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                weddingID = Number(req.params.weddingid);
                return [4 /*yield*/, weddingService.getWeddingByWeddingID(weddingID)];
            case 1:
                retrievedWedding = _a.sent();
                retrievedWeddingDate = JSON.stringify(retrievedWedding.weddingDate);
                retrievedWeddingLocation = retrievedWedding.weddingLocation;
                retrievedWeddingName = retrievedWedding.name;
                retrievedWeddingBudget = retrievedWedding.budget;
                reqBody = req.body;
                newDate = retrievedWeddingDate;
                newLocation = retrievedWeddingLocation;
                newName = retrievedWeddingName;
                newBudget = retrievedWeddingBudget;
                if (reqBody.weddingDate != retrievedWeddingDate) {
                    newDate = (reqBody.weddingDate != "") ? reqBody.weddingDate : retrievedWeddingDate;
                }
                if (reqBody.weddingLocation != retrievedWeddingLocation) {
                    newLocation = (reqBody.weddingLocation != "") ? reqBody.weddingLocation : retrievedWeddingLocation;
                }
                if (reqBody.name != retrievedWeddingName) {
                    newName = (reqBody.name != "") ? reqBody.name : retrievedWeddingName;
                }
                if (reqBody.budget != retrievedWeddingBudget) {
                    newBudget = (reqBody.budget != "") ? reqBody.budget : retrievedWeddingBudget;
                }
                updatedWedding = new entities_1.Wedding(weddingID, newDate, newLocation, newName, newBudget);
                return [4 /*yield*/, weddingService.updateWedding(updatedWedding)];
            case 2:
                updatedWedding = _a.sent();
                res.send(updatedWedding);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                if (error_3 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send(error_3);
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/**
 * DELETE /weddings/:weddingid
 *    deletes a wedding
 *    returns 404 if DNE
 */
app["delete"]("/weddings/:weddingid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var weddingID, deleteResult, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                weddingID = Number(req.params.weddingid);
                return [4 /*yield*/, weddingService.deleteWedding(weddingID)];
            case 1:
                deleteResult = _a.sent();
                res.status(205);
                res.send(deleteResult);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                if (error_4 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send(error_4);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/////////////////////////////////////////////////////////////////
// Expense Services
/**
 * POST /expenses/:weddingid
 *    creates an expense for an existed wedding ID
 *    returns 201 if success
 */
app.post("/expenses/:weddingid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var weddingID, newExpense, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                weddingID = Number(req.params.weddingid);
                newExpense = req.body;
                return [4 /*yield*/, expenseService.createExpense(weddingID, newExpense)];
            case 1:
                newExpense = _a.sent();
                res.status(201);
                res.send(newExpense);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                if (error_5 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send(error_5);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * GET /expenses
 *    gets all expenses
 *    returns 200 if success
 */
app.get("/expenses", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allExpenses, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, expenseService.getAllExpenses()];
            case 1:
                allExpenses = _a.sent();
                res.status(200);
                res.send(allExpenses);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                if (error_6 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send(error_6);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * GET /expenses/:expenseid
 *    gets expense by expense ID
 *    returns 404 if DNE
 */
app.get("/expenses/:expenseid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var expenseID, retrievedExpense, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                expenseID = Number(req.params.expenseid);
                return [4 /*yield*/, expenseService.getExpenseByExpenseID(expenseID)];
            case 1:
                retrievedExpense = _a.sent();
                res.send(retrievedExpense);
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                if (error_7 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send(error_7);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * GET /weddings/:id/expenses
 *    gets all expenses of an existed wedding ID
 *    returns 404 if weddings or expenses DNE
 */
app.get("/weddings/:id/expenses", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var weddingID, retrievedAllExpenses, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                weddingID = Number(req.params.id);
                return [4 /*yield*/, expenseService.getAllExpensesOfAWedding(weddingID)];
            case 1:
                retrievedAllExpenses = _a.sent();
                res.send(retrievedAllExpenses);
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                if (error_8 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send(error_8);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * PUT /expenses/:id
 *    update expense by expense ID
 */
app.put("/expenses/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var expenseID, retrievedExpense, retrievedExpenseEID, retrievedExpenseWID, reqBody, newReason, newAmount, updatedExpense, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                expenseID = Number(req.params.id);
                return [4 /*yield*/, expenseService.getExpenseByExpenseID(expenseID)];
            case 1:
                retrievedExpense = _a.sent();
                retrievedExpenseEID = retrievedExpense.expenseID;
                retrievedExpenseWID = retrievedExpense.wedding_ID;
                reqBody = req.body;
                newReason = retrievedExpense.reason;
                newAmount = retrievedExpense.amount;
                // if reason changes. eg: {"reason": "Cake"}, and new input is not null
                if (reqBody.reason != retrievedExpense.reason) {
                    newReason = (reqBody.reason != "") ? reqBody.reason : "TBD";
                }
                // if amount changes, and new input is not null 
                if (reqBody.amount != retrievedExpense.amount) {
                    newAmount = (reqBody.amount != '') ? reqBody.amount : 0.00;
                }
                updatedExpense = new entities_1.Expense(retrievedExpenseEID, retrievedExpenseWID, newReason, newAmount);
                return [4 /*yield*/, expenseService.updateExpense(updatedExpense)];
            case 2:
                updatedExpense = _a.sent();
                res.send(updatedExpense);
                return [3 /*break*/, 4];
            case 3:
                error_9 = _a.sent();
                if (error_9 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send(error_9);
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/**
 * DELETE /expenses/:id
 *    deletes expense by expense ID
 *    returns 404 if DNE
 */
app["delete"]("/expenses/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var expenseID, deleteResult, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                expenseID = Number(req.params.id);
                return [4 /*yield*/, expenseService.deleteExpenseByExpenseID(expenseID)];
            case 1:
                deleteResult = _a.sent();
                res.send(deleteResult);
                return [3 /*break*/, 3];
            case 2:
                error_10 = _a.sent();
                if (error_10 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send(error_10);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/////////////////////////////////////////////////////////////////
// Employee Services
/**
 * GET /users/:email/verify
 * 200 if user exists
 * 404 if no user found
 */
app.get("/users/:email/verify", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var emplEmail, verifiedEmployeeEmail, error_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                emplEmail = String(req.params.email);
                return [4 /*yield*/, employeeService.verifyEmployeeEmailExists(emplEmail)];
            case 1:
                verifiedEmployeeEmail = _a.sent();
                res.status(200);
                res.send(verifiedEmployeeEmail);
                return [3 /*break*/, 3];
            case 2:
                error_11 = _a.sent();
                if (error_11 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send(error_11);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * PATCH /users/login
 * Request Body: {"email": "bill@wed.com", "password":"gatorfan1"}
 * Response Body: {"fname":"Bill", "lname":"Smith"}
 */
app.patch("/users/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var emplEmail, emplPassword, emplFirstname, emplLastname, error_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                emplEmail = String(req.body.email);
                emplPassword = String(req.body.password);
                return [4 /*yield*/, employeeService.getEmployeeFirstNameByEmailPassword(emplEmail, emplPassword)];
            case 1:
                emplFirstname = _a.sent();
                return [4 /*yield*/, employeeService.getEmployeeLastNameByEmailPassword(emplEmail, emplPassword)];
            case 2:
                emplLastname = _a.sent();
                res.send("{\"fname\":" + emplFirstname + ", \"lname\":" + emplLastname + "}");
                return [3 /*break*/, 4];
            case 3:
                error_12 = _a.sent();
                if (error_12 instanceof errors_1.MissingResourceError) {
                    res.status(404);
                    res.send("Employee with email " + req.body.email + " does not exist.");
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () { console.log("Application started."); });
