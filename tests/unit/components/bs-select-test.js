// import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('bs-select', 'Unit | Component | bootstrap select', {
  needs: ['helper:is-equal']
});

test('it has selections', function(assert) {
  this.subject({
    content: ['a', 'b']
  });

  this.render();

  assert.equal(this.$('select option').length, 2);
  assert.equal(this.$('select option[value=b]').length, 1);
});

test('it changes value', function(assert) {
  var component = this.subject({
    content: ['a', 'b']
  });

  this.render();

  this.$('select option[value=b]').attr('selected', true);
  this.$('select').trigger('change');

  assert.equal(component.get('selectedValue'), 'b');
});

test('it triggers targetObject action', function(assert) {
  this.subject({
    content: ['a', 'b'],
    action: 'someAction',
    targetObject: {
      someAction: function() {
        assert.ok(true, 'target object action was called');
      }
    }
  });

  this.render();

  this.$('select option[value=b]').attr('selected', true);
  this.$('select').trigger('change');
});
