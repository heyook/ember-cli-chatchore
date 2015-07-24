import { isEqual } from '../../../helpers/is-equal';
import { module, test } from 'qunit';

module('Unit | Helper | is equal');

test('it evaluates equality', function(assert) {
  var result = isEqual(1, 1);
  assert.equal(result, true);
});

test('it evaluates equality', function(assert) {
  var result = isEqual(1, 2);
  assert.equal(result, false);
});
