define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(tweetBox);

  /**
   * Module function
   */

  function tweetBox() {
    this.attributes({

    });

    this.after('initialize', function () {

    });
  }

});
