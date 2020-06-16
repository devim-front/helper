import { assert } from 'chai';

import { Helper } from './Helper';
import { NewNotSupportedError } from './NewNotSupportedError';

describe('Helper', () => {
  class TestHelper extends Helper {
    public static create() {
      new this();
    }
  }

  describe('constructor', () => {
    it('should throws an error', () => {
      assert.throw(
        () => TestHelper.create(),
        new NewNotSupportedError().message
      );
    });
  });
});
