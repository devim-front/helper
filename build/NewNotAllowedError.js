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
exports.NewNotAllowedError = void 0;
/**
 * Ошибка, которая возникает, когда в коде происходит попытка создать экземпляр
 * хэлпера.
 */
var NewNotAllowedError = /** @class */ (function (_super) {
    __extends(NewNotAllowedError, _super);
    /**
     * Создает экземпляр ошибки.
     */
    function NewNotAllowedError() {
        var _this = _super.call(this, 'Creating an instance of a helper is prohibited') || this;
        _this.name = 'HelperError';
        return _this;
    }
    return NewNotAllowedError;
}(Error));
exports.NewNotAllowedError = NewNotAllowedError;
