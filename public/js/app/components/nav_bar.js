"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var NavBar = (function (_React$Component) {
  function NavBar(props) {
    _classCallCheck(this, NavBar);

    _get(Object.getPrototypeOf(NavBar.prototype), "constructor", this).call(this, props);
    this.state = {};
  }

  _inherits(NavBar, _React$Component);

  _createClass(NavBar, [{
    key: "loginAttempted",
    value: function loginAttempted() {
      Fire.broadcast("loginAttempted");
    }
  }, {
    key: "loginClicked",
    value: function loginClicked() {
      Fire.broadcast("loginRequested");
    }
  }, {
    key: "loginCancelClicked",
    value: function loginCancelClicked() {
      Fire.broadcast("loginCancelled");
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.loginMode == "form") {
        return React.createElement(
          "nav",
          null,
          React.createElement(
            "div",
            { className: "nav-wrapper indigo white-text" },
            React.createElement(
              "a",
              { href: "#", className: "brand-logo" },
              "YouHaveTo"
            ),
            React.createElement(
              "ul",
              { id: "main-menu", className: "right hide-on-med-and-down" },
              React.createElement(
                "li",
                null,
                React.createElement("input", { type: "email", placeholder: "E-mail" })
              ),
              React.createElement(
                "li",
                null,
                React.createElement("input", { type: "password", placeholder: "Password" })
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#!", onClick: this.loginAttempted.bind(this) },
                  "Login"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#!", onClick: this.loginCancelClicked.bind(this) },
                  "Nevermind"
                )
              )
            )
          )
        );
      } else {
        return React.createElement(
          "nav",
          null,
          React.createElement(
            "div",
            { className: "nav-wrapper indigo white-text" },
            React.createElement(
              "a",
              { href: "#", className: "brand-logo" },
              "YouHaveTo"
            ),
            React.createElement(
              "ul",
              { id: "main-menu", className: "right hide-on-med-and-down" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#!", onClick: this.loginClicked.bind(this) },
                  "Login"
                )
              )
            )
          )
        );
      }
    }
  }]);

  return NavBar;
})(React.Component);
