import Ember from 'ember';

export default Ember.Controller.extend({
  selections: ['a', 'b'],

  actions: {
    onSelect: function(value) {
      Ember.assert(value);
    }
  }
});
