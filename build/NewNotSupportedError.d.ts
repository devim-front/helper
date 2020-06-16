import { NotSupportedError } from '@devim-front/error';
/**
 * Ошибка, которая возникает, когда в коде происходит попытка создать экземпляр
 * хэлпера.
 */
export declare class NewNotSupportedError extends NotSupportedError {
    /**
     * Создает экземпляр ошибки.
     */
    constructor();
}
