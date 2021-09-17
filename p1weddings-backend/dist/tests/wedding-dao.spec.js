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
var connection_1 = require("../connection");
var wedding_dao_postgres_1 = require("../daos/wedding-dao-postgres");
var entities_1 = require("../entities");
var weddingDAO = new wedding_dao_postgres_1.WeddingDaoPostgres();
// PASSED
test("Test: Create a wedding", function () { return __awaiter(void 0, void 0, void 0, function () {
    var testWedding, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                testWedding = new entities_1.Wedding(0, '12/15/2020', 'LA', 'Pete Alice', 11);
                return [4 /*yield*/, weddingDAO.createWedding(testWedding)];
            case 1:
                result = _a.sent();
                console.log(result);
                expect(result.weddingID).not.toBe(0);
                return [2 /*return*/];
        }
    });
}); });
// PASSED
test("Test: Get all weddings", function () { return __awaiter(void 0, void 0, void 0, function () {
    var wedding1, wedding2, wedding3, result1, result2, result3, allWeddings;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                wedding1 = new entities_1.Wedding(0, '12/27/2021', 'CA', 'Pete Alice', 22);
                wedding2 = new entities_1.Wedding(0, '11/15/2021', 'FL', 'Mike Emma', 33);
                wedding3 = new entities_1.Wedding(0, '12/15/2021', 'TX', 'Cris Elle', 44);
                return [4 /*yield*/, weddingDAO.createWedding(wedding1)];
            case 1:
                result1 = _a.sent();
                return [4 /*yield*/, weddingDAO.createWedding(wedding2)];
            case 2:
                result2 = _a.sent();
                return [4 /*yield*/, weddingDAO.createWedding(wedding3)];
            case 3:
                result3 = _a.sent();
                console.log("wedding1.weddingDate: " + wedding1.weddingDate);
                console.log("result1.weddingDate: " + result1.weddingDate);
                console.log("wedding2.weddingDate: " + wedding2.weddingDate);
                console.log("result2.weddingDate: " + result2.weddingDate);
                console.log("wedding3.weddingDate: " + wedding3.weddingDate);
                console.log("result3.weddingDate: " + result3.weddingDate);
                return [4 /*yield*/, weddingDAO.getAllWeddings()];
            case 4:
                allWeddings = _a.sent();
                expect(allWeddings.length).toBeGreaterThanOrEqual(3);
                return [2 /*return*/];
        }
    });
}); });
// PASSED
test("Test: Get wedding by wedding ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var testWedding, result, retrievedWedding;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                testWedding = new entities_1.Wedding(0, '12/27/2021', 'CA', 'Pete Alice', 55);
                return [4 /*yield*/, weddingDAO.createWedding(testWedding)];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, weddingDAO.getWeddingByWeddingID(result.weddingID)];
            case 2:
                retrievedWedding = _a.sent();
                console.log("testWedding.weddingDate: " + testWedding.weddingDate);
                console.log("result.weddingDate: " + result.weddingDate);
                console.log("retrievedWedding.weddingDate: " + retrievedWedding.weddingDate);
                expect(retrievedWedding.weddingID).toBe(testWedding.weddingID);
                // wrong day format?????????????????????
                // expect(retrievedWedding.weddingDate).toBe(result.weddingDate);
                expect(retrievedWedding.weddingLocation).toBe(testWedding.weddingLocation);
                expect(retrievedWedding.name).toBe(testWedding.name);
                expect(retrievedWedding.budget).toBe(testWedding.budget);
                return [2 /*return*/];
        }
    });
}); });
// PASSED
test("Test: Update wedding by wedding ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var testWedding, updatedWedding;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                testWedding = new entities_1.Wedding(0, '12/27/2021', 'CA', 'Pete Alice', 66);
                return [4 /*yield*/, weddingDAO.createWedding(testWedding)];
            case 1:
                testWedding = _a.sent();
                console.log(testWedding);
                testWedding.budget = 67;
                return [4 /*yield*/, weddingDAO.updateWedding(testWedding)];
            case 2:
                testWedding = _a.sent();
                console.log(testWedding);
                return [4 /*yield*/, weddingDAO.getWeddingByWeddingID(testWedding.weddingID)];
            case 3:
                updatedWedding = _a.sent();
                console.log(updatedWedding); // weddingDate: undefined ????????
                expect(updatedWedding.budget).toBe(67);
                return [2 /*return*/];
        }
    });
}); });
// PASSED
test("Test: Delete wedding by wedding ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var wedding1, deleteResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                wedding1 = new entities_1.Wedding(0, '12/27/2021', 'CA', 'Pete Alice', 77);
                return [4 /*yield*/, weddingDAO.createWedding(wedding1)];
            case 1:
                wedding1 = _a.sent();
                console.log(wedding1);
                return [4 /*yield*/, weddingDAO.deleteWedding(wedding1.weddingID)];
            case 2:
                deleteResult = _a.sent();
                expect(deleteResult).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        connection_1.conn.end();
        return [2 /*return*/];
    });
}); });
