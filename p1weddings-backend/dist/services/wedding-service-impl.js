"use strict";
exports.__esModule = true;
exports.WeddingServiceImpl = void 0;
var wedding_dao_postgres_1 = require("../daos/wedding-dao-postgres");
var WeddingServiceImpl = /** @class */ (function () {
    function WeddingServiceImpl() {
        this.weddingDAO = new wedding_dao_postgres_1.WeddingDaoPostgres();
    }
    WeddingServiceImpl.prototype.createWedding = function (wedding) {
        return this.weddingDAO.createWedding(wedding);
    };
    WeddingServiceImpl.prototype.getAllWeddings = function () {
        return this.weddingDAO.getAllWeddings();
    };
    WeddingServiceImpl.prototype.getWeddingByWeddingID = function (weddingID) {
        return this.weddingDAO.getWeddingByWeddingID(weddingID);
    };
    WeddingServiceImpl.prototype.updateWedding = function (wedding) {
        return this.weddingDAO.updateWedding(wedding);
    };
    WeddingServiceImpl.prototype.deleteWedding = function (weddingID) {
        return this.weddingDAO.deleteWedding(weddingID);
    };
    return WeddingServiceImpl;
}());
exports.WeddingServiceImpl = WeddingServiceImpl;
