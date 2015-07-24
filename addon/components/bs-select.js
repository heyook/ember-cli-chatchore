import Ember from "ember";

export default Ember.Component.extend({
  content: null,
  selectedValue: null,

  didInitAttrs(attrs) {
    this._super(attrs);
    var content = this.get('content');

    if (!content) {
      this.set('content', []);
    }
  },

  actions: {
    change() {
      const selectedEl = this.$('select')[0];
      const selectedIndex = selectedEl.selectedIndex;
      const content = this.get('content');
      const selectedValue = content[selectedIndex];

      this.set('selectedValue', selectedValue);
      this.sendAction('action', selectedValue);
    }
  }
});
