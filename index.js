/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-chatchore',

  included: function(app, parentAddon) {
    this._super.included(app);

    var target = (parentAddon || app);

    target.import(target.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
    target.import(target.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
    target.import(target.bowerDirectory + '/bootstrap/dist/css/bootstrap.css.map', { destDir: 'assets' });

  }
};
