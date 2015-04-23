"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var FireStore = (function () {
  function FireStore() {
    _classCallCheck(this, FireStore);

    this.loginMode = "normal";

    Fire.subscribe("loginRequested", this);
    Fire.subscribe("loginCancelled", this);
    Fire.subscribe("loginAttempted", this);
  }

  _createClass(FireStore, [{
    key: "onLoginAttempted",
    value: function onLoginAttempted() {
      this.loginMode = "normal";
      Fire.broadcast("appStateChanged");
    }
  }, {
    key: "onLoginCancelled",
    value: function onLoginCancelled() {
      this.loginMode = "normal";
      Fire.broadcast("appStateChanged");
    }
  }, {
    key: "onLoginRequested",
    value: function onLoginRequested() {
      this.loginMode = "form";
      Fire.broadcast("appStateChanged");
    }
  }]);

  return FireStore;
})();
