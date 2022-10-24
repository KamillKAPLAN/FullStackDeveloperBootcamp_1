"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var root = document.getElementById("root");

var Car = /*#__PURE__*/function (_React$Component) {
  _inherits(Car, _React$Component);

  var _super = _createSuper(Car);

  function Car(props) {
    var _this;

    _classCallCheck(this, Car);

    _this = _super.call(this, props);
    _this.changeColor = _this.changeColor.bind(_assertThisInitialized(_this));
    _this.changeColorr = _this.changeColorr.bind(_assertThisInitialized(_this));
    _this.state = {
      brand: 'Opel',
      model: 'Astra',
      color: 'red',
      year: 2020,
      colors: ["red", "blue", "yellow", "black"]
    };
    return _this;
  }

  _createClass(Car, [{
    key: "changeColor",
    value: function changeColor() {
      this.setState({
        color: 'blue'
      });
    }
  }, {
    key: "changeColorr",
    value: function changeColorr(e) {
      console.log(e.target.value);
      this.setState({
        color: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.state.brand, " ", this.state.model), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("select", {
        onChange: this.changeColorr
      }, this.state.colors.map(function (item) {
        return /*#__PURE__*/React.createElement("option", {
          key: item,
          value: item
        }, item);
      }))), /*#__PURE__*/React.createElement("div", null, this.state.colors.map(function (item) {
        return /*#__PURE__*/React.createElement("button", {
          key: item,
          onClick: _this2.selectItem
        }, item);
      })), /*#__PURE__*/React.createElement("p", null, "Selected Color: ", /*#__PURE__*/React.createElement("b", null, this.state.color)), /*#__PURE__*/React.createElement("button", {
        onClick: this.changeColor
      }, "Change Color"));
    }
  }]);

  return Car;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Car, null), root);
