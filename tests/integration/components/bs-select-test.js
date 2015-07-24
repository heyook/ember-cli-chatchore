import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('bs-select', 'Integration | Component | bootstrap select', {
  integration: true
});

test('it renders', function(assert) {
  this.set('content', ['a', 'b']);
  this.render(hbs`{{bs-select content=content}}`);

  assert.equal(this.$('select option').length, 2);
  assert.equal(this.$('select option[value=b]').length, 1);
});

test('it triggers action', function(assert) {
  expect(2);
  this.set('content', ['a', 'b']);
  this.set('onSelect', function(val) {
    assert.ok(true, 'target object action was called');
    assert.equal(val, 'b', 'it sends selected value');
  });

  this.render(hbs`{{bs-select content=content action=onSelect}}`);

  this.$('select option[value=b]').attr('selected', true);
  this.$('select').trigger('change');
});
