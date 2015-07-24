import Ember from 'ember';
import layout from '../templates/components/upload-progress';

export default Ember.Component.extend({
  layout: layout,
  progressStyle: Em.computed('progressValue', function() {
    return new Ember.Handlebars.SafeString(
      'width: ' + this.get('progressValue') + '%'
    )
  }),

  progressValue: Em.computed('progress', function() {
    return Math.round(this.get('progress')*100);
  }),

  isUploading: Em.computed('progress', function() {
    return this.get('progress') < 1 && this.get('progress') > 0;
  })
});
