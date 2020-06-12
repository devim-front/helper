import { assert } from 'chai';

import { Helper } from './Helper';
import { NewNotAllowedError } from './NewNotAllowedError';

describe('Helper', () => {
  class TestHelper extends Helper {
    public static create() {
      new this();
    }
  }

  describe('constructor', () => {
    it('should throws an error', () => {
      assert.throw(() => TestHelper.create(), new NewNotAllowedError().message);
    });
  });
});
