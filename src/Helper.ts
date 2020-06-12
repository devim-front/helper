import { NewNotAllowedError } from './NewNotAllowedError';

/**
 * Базовый класс хэлпера.
 */
export class Helper {
  /**
   * Создает экземпляр хэлпера.
   */
  protected constructor() {
    throw new NewNotAllowedError();
  }
}
