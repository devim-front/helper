"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
var NewNotSupportedError_1 = require("./NewNotSupportedError");
/**
 * Базовый класс хэлпера.
 */
var Helper = /** @class */ (function () {
    /**
     * Создает экземпляр хэлпера.
     */
    function Helper() {
        throw new NewNotSupportedError_1.NewNotSupportedError();
    }
    return Helper;
}());
exports.Helper = Helper;
