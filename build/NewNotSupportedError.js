"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewNotSupportedError = void 0;
var error_1 = require("@devim-front/error");
/**
 * Ошибка, которая возникает, когда в коде происходит попытка создать экземпляр
 * хэлпера.
 */
var NewNotSupportedError = /** @class */ (function (_super) {
    __extends(NewNotSupportedError, _super);
    /**
     * Создает экземпляр ошибки.
     */
    function NewNotSupportedError() {
        return _super.call(this, 'It is forbidden to create an instance of the Helper') || this;
    }
    return NewNotSupportedError;
}(error_1.NotSupportedError));
exports.NewNotSupportedError = NewNotSupportedError;
