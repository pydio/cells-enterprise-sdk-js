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
 * The AuthLdapMapping model module.
 * @module model/AuthLdapMapping
 * @version 2.0
 */
var AuthLdapMapping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthLdapMapping</code>.
   * @alias module:model/AuthLdapMapping
   */
  function AuthLdapMapping() {
    _classCallCheck(this, AuthLdapMapping);

    AuthLdapMapping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthLdapMapping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthLdapMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthLdapMapping} obj Optional instance to populate.
     * @return {module:model/AuthLdapMapping} The populated <code>AuthLdapMapping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthLdapMapping();

        if (data.hasOwnProperty('LeftAttribute')) {
          obj['LeftAttribute'] = _ApiClient["default"].convertToType(data['LeftAttribute'], 'String');
        }

        if (data.hasOwnProperty('RightAttribute')) {
          obj['RightAttribute'] = _ApiClient["default"].convertToType(data['RightAttribute'], 'String');
        }

        if (data.hasOwnProperty('RolePrefix')) {
          obj['RolePrefix'] = _ApiClient["default"].convertToType(data['RolePrefix'], 'String');
        }

        if (data.hasOwnProperty('RuleString')) {
          obj['RuleString'] = _ApiClient["default"].convertToType(data['RuleString'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthLdapMapping;
}();
/**
 * @member {String} LeftAttribute
 */


AuthLdapMapping.prototype['LeftAttribute'] = undefined;
/**
 * @member {String} RightAttribute
 */

AuthLdapMapping.prototype['RightAttribute'] = undefined;
/**
 * @member {String} RolePrefix
 */

AuthLdapMapping.prototype['RolePrefix'] = undefined;
/**
 * @member {String} RuleString
 */

AuthLdapMapping.prototype['RuleString'] = undefined;
var _default = AuthLdapMapping;
exports["default"] = _default;
//# sourceMappingURL=AuthLdapMapping.js.map
