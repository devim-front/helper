/**
 * Ошибка, которая возникает, когда в коде происходит попытка создать экземпляр
 * хэлпера.
 */
export class NewNotAllowedError extends Error {
  /**
   * Создает экземпляр ошибки.
   */
  public constructor() {
    super('Creating an instance of a helper is prohibited');
    this.name = 'HelperError';
  }
}
