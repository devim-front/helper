import { NotSupportedError } from '@devim-front/error';

/**
 * Ошибка, которая возникает, когда в коде происходит попытка создать экземпляр
 * хэлпера.
 */
export class NewNotSupportedError extends NotSupportedError {
  /**
   * Создает экземпляр ошибки.
   */
  public constructor() {
    super('It is forbidden to create an instance of the Helper');
  }
}
