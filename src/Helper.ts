import { NewNotSupportedError } from './NewNotSupportedError';

/**
 * Базовый класс хэлпера.
 */
export class Helper {
  /**
   * Создает экземпляр хэлпера.
   */
  protected constructor() {
    throw new NewNotSupportedError();
  }
}
