"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
var NewNotAllowedError_1 = require("./NewNotAllowedError");
/**
 * Базовый класс хэлпера.
 */
var Helper = /** @class */ (function () {
    /**
     * Создает экземпляр хэлпера.
     */
    function Helper() {
        throw new NewNotAllowedError_1.NewNotAllowedError();
    }
    return Helper;
}());
exports.Helper = Helper;
