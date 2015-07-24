import Ember from 'ember';
import layout from '../templates/components/upload-progress';

export default Ember.Component.extend({
  layout: layout,
  progressStyle: Ember.computed('progressValue', function() {
    return new Ember.Handlebars.SafeString(
      'width: ' + this.get('progressValue') + '%'
    );
  }),

  progressValue: Ember.computed('progress', function() {
    return Math.round(this.get('progress')*100);
  }),

  isUploading: Ember.computed('progress', function() {
    return this.get('progress') < 1 && this.get('progress') > 0;
  })
});
