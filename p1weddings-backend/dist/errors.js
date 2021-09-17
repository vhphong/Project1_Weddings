"use strict";
exports.__esModule = true;
exports.MissingResourceError = void 0;
var MissingResourceError = /** @class */ (function () {
    function MissingResourceError(message) {
        this.description = "This error means a resource could not be found";
        this.message = message;
    }
    return MissingResourceError;
}());
exports.MissingResourceError = MissingResourceError;
