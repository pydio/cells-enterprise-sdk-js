"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The AuthOAuth2MappingRule model module.
* @module model/AuthOAuth2MappingRule
* @version 2.0
*/
var AuthOAuth2MappingRule = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthOAuth2MappingRule</code>.
  * @alias module:model/AuthOAuth2MappingRule
  * @class
  */
  function AuthOAuth2MappingRule() {
    _classCallCheck(this, AuthOAuth2MappingRule);

    _defineProperty(this, "LeftAttribute", undefined);

    _defineProperty(this, "RuleString", undefined);

    _defineProperty(this, "RightAttribute", undefined);

    _defineProperty(this, "LeftSplit", undefined);

    _defineProperty(this, "RightValueTemplate", undefined);

    _defineProperty(this, "NoUpdate", undefined);
  }
  /**
  * Constructs a <code>AuthOAuth2MappingRule</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthOAuth2MappingRule} obj Optional instance to populate.
  * @return {module:model/AuthOAuth2MappingRule} The populated <code>AuthOAuth2MappingRule</code> instance.
  */


  _createClass(AuthOAuth2MappingRule, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2MappingRule();

        if (data.hasOwnProperty('LeftAttribute')) {
          obj['LeftAttribute'] = _ApiClient["default"].convertToType(data['LeftAttribute'], 'String');
        }

        if (data.hasOwnProperty('RuleString')) {
          obj['RuleString'] = _ApiClient["default"].convertToType(data['RuleString'], 'String');
        }

        if (data.hasOwnProperty('RightAttribute')) {
          obj['RightAttribute'] = _ApiClient["default"].convertToType(data['RightAttribute'], 'String');
        }

        if (data.hasOwnProperty('LeftSplit')) {
          obj['LeftSplit'] = _ApiClient["default"].convertToType(data['LeftSplit'], 'String');
        }

        if (data.hasOwnProperty('RightValueTemplate')) {
          obj['RightValueTemplate'] = _ApiClient["default"].convertToType(data['RightValueTemplate'], 'String');
        }

        if (data.hasOwnProperty('NoUpdate')) {
          obj['NoUpdate'] = _ApiClient["default"].convertToType(data['NoUpdate'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {String} LeftAttribute
    */

  }]);

  return AuthOAuth2MappingRule;
}();

exports["default"] = AuthOAuth2MappingRule;
//# sourceMappingURL=AuthOAuth2MappingRule.js.map
