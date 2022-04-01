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

/**
 * The AuthOAuth2MappingRule model module.
 * @module model/AuthOAuth2MappingRule
 * @version 2.0
 */
var AuthOAuth2MappingRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2MappingRule</code>.
   * @alias module:model/AuthOAuth2MappingRule
   */
  function AuthOAuth2MappingRule() {
    _classCallCheck(this, AuthOAuth2MappingRule);

    AuthOAuth2MappingRule.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2MappingRule, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2MappingRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2MappingRule} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2MappingRule} The populated <code>AuthOAuth2MappingRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2MappingRule();

        if (data.hasOwnProperty('LeftAttribute')) {
          obj['LeftAttribute'] = _ApiClient["default"].convertToType(data['LeftAttribute'], 'String');
        }

        if (data.hasOwnProperty('LeftSplit')) {
          obj['LeftSplit'] = _ApiClient["default"].convertToType(data['LeftSplit'], 'String');
        }

        if (data.hasOwnProperty('NoUpdate')) {
          obj['NoUpdate'] = _ApiClient["default"].convertToType(data['NoUpdate'], 'Boolean');
        }

        if (data.hasOwnProperty('RightAttribute')) {
          obj['RightAttribute'] = _ApiClient["default"].convertToType(data['RightAttribute'], 'String');
        }

        if (data.hasOwnProperty('RightValueTemplate')) {
          obj['RightValueTemplate'] = _ApiClient["default"].convertToType(data['RightValueTemplate'], 'String');
        }

        if (data.hasOwnProperty('RuleString')) {
          obj['RuleString'] = _ApiClient["default"].convertToType(data['RuleString'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2MappingRule;
}();
/**
 * @member {String} LeftAttribute
 */


AuthOAuth2MappingRule.prototype['LeftAttribute'] = undefined;
/**
 * @member {String} LeftSplit
 */

AuthOAuth2MappingRule.prototype['LeftSplit'] = undefined;
/**
 * @member {Boolean} NoUpdate
 */

AuthOAuth2MappingRule.prototype['NoUpdate'] = undefined;
/**
 * @member {String} RightAttribute
 */

AuthOAuth2MappingRule.prototype['RightAttribute'] = undefined;
/**
 * @member {String} RightValueTemplate
 */

AuthOAuth2MappingRule.prototype['RightValueTemplate'] = undefined;
/**
 * @member {String} RuleString
 */

AuthOAuth2MappingRule.prototype['RuleString'] = undefined;
var _default = AuthOAuth2MappingRule;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2MappingRule.js.map
