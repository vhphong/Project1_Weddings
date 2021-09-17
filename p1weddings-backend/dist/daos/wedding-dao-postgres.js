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
exports.WeddingDaoPostgres = void 0;
var connection_1 = require("../connection");
var entities_1 = require("../entities");
var errors_1 = require("../errors");
// https://www.postgresqltutorial.com/postgresql-date/
var WeddingDaoPostgres = /** @class */ (function () {
    function WeddingDaoPostgres() {
    }
    WeddingDaoPostgres.prototype.getAllWeddings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sql, result, allWeddings, _i, _a, row, wedding;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sql = 'SELECT * FROM wedding ORDER BY weddingid';
                        return [4 /*yield*/, connection_1.conn.query(sql)];
                    case 1:
                        result = _b.sent();
                        allWeddings = [];
                        for (_i = 0, _a = result.rows; _i < _a.length; _i++) {
                            row = _a[_i];
                            wedding = new entities_1.Wedding(row.weddingid, row.weddingdate, row.weddinglocation, row.weddingname, row.budget);
                            allWeddings.push(wedding);
                        }
                        return [2 /*return*/, allWeddings];
                }
            });
        });
    };
    WeddingDaoPostgres.prototype.getWeddingByWeddingID = function (weddingID) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result, row, retrievedWedding;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'SELECT weddingid, weddingdate, weddinglocation, weddingname, budget FROM wedding WHERE weddingid = $1';
                        values = [weddingID];
                        return [4 /*yield*/, connection_1.conn.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rowCount === 0) {
                            throw new errors_1.MissingResourceError("The wedding with ID " + weddingID + " does not exist.");
                        }
                        row = result.rows[0];
                        retrievedWedding = new entities_1.Wedding(row.weddingid, row.weddingdate, row.weddinglocation, row.weddingname, row.budget);
                        return [2 /*return*/, retrievedWedding];
                }
            });
        });
    };
    WeddingDaoPostgres.prototype.createWedding = function (newWedding) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "INSERT INTO wedding (weddingdate, weddinglocation, weddingname, budget) VALUES ($1, $2, $3, $4) returning weddingid";
                        values = [newWedding.weddingDate, newWedding.weddingLocation, newWedding.name, newWedding.budget];
                        return [4 /*yield*/, connection_1.conn.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        newWedding.weddingID = result.rows[0].weddingid;
                        return [2 /*return*/, newWedding];
                }
            });
        });
    };
    WeddingDaoPostgres.prototype.updateWedding = function (wedding) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'UPDATE wedding SET weddingdate=$1, weddinglocation=$2, weddingname=$3, budget=$4 WHERE weddingid=$5';
                        values = [wedding.weddingDate, wedding.weddingLocation, wedding.name, wedding.budget, wedding.weddingID];
                        return [4 /*yield*/, connection_1.conn.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rowCount === 0) {
                            throw new errors_1.MissingResourceError("The wedding with ID " + wedding.weddingID + " does not exist.");
                        }
                        return [2 /*return*/, wedding];
                }
            });
        });
    };
    WeddingDaoPostgres.prototype.deleteWedding = function (weddingID) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'DELETE FROM wedding WHERE weddingid=$1';
                        values = [weddingID];
                        return [4 /*yield*/, connection_1.conn.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rowCount === 0) {
                            throw new errors_1.MissingResourceError("The wedding with ID " + weddingID + " does not exist.");
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return WeddingDaoPostgres;
}());
exports.WeddingDaoPostgres = WeddingDaoPostgres;
