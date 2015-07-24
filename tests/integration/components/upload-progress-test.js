import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('upload-progress', 'Integration | Component | upload progress', {
  integration: true
});

test('it shows progress', function(assert) {
  this.render(hbs`{{upload-progress progress=0.5}}`);

  var progressDom   = this.$('.upload-progress .progress-bar');
  var expectedWidth = (this.$('.upload-progress').width() * 0.5) + 'px';
  assert.equal(progressDom.css('width'), expectedWidth, 'it shows progress width');
  assert.equal(progressDom.hasClass('active'), true, 'it shows progress active');
});

test('it shows processing', function(assert) {
  this.render(hbs`{{upload-progress processing=true}}`);

  assert.equal(this.$('.processing-progress').length, 1, 'it shows processing');
});

test('it shows nothing', function(assert) {
  this.render(hbs`{{upload-progress}}`);

  assert.equal(this.$('.upload-progress').length, 0);
  assert.equal(this.$('.processing-progress').length, 0);
});
