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
 * The AuthOAuth2ConnectorMicrosoftConfig model module.
 * @module model/AuthOAuth2ConnectorMicrosoftConfig
 * @version 2.0
 */
var AuthOAuth2ConnectorMicrosoftConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2ConnectorMicrosoftConfig</code>.
   * @alias module:model/AuthOAuth2ConnectorMicrosoftConfig
   */
  function AuthOAuth2ConnectorMicrosoftConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorMicrosoftConfig);

    AuthOAuth2ConnectorMicrosoftConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2ConnectorMicrosoftConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2ConnectorMicrosoftConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorMicrosoftConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorMicrosoftConfig} The populated <code>AuthOAuth2ConnectorMicrosoftConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorMicrosoftConfig();

        if (data.hasOwnProperty('clientID')) {
          obj['clientID'] = _ApiClient["default"].convertToType(data['clientID'], 'String');
        }

        if (data.hasOwnProperty('clientSecret')) {
          obj['clientSecret'] = _ApiClient["default"].convertToType(data['clientSecret'], 'String');
        }

        if (data.hasOwnProperty('groupNameFormat')) {
          obj['groupNameFormat'] = _ApiClient["default"].convertToType(data['groupNameFormat'], 'String');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], ['String']);
        }

        if (data.hasOwnProperty('onlySecurityGroups')) {
          obj['onlySecurityGroups'] = _ApiClient["default"].convertToType(data['onlySecurityGroups'], 'Boolean');
        }

        if (data.hasOwnProperty('redirectURI')) {
          obj['redirectURI'] = _ApiClient["default"].convertToType(data['redirectURI'], 'String');
        }

        if (data.hasOwnProperty('tenant')) {
          obj['tenant'] = _ApiClient["default"].convertToType(data['tenant'], 'String');
        }

        if (data.hasOwnProperty('useGroupsAsWhitelist')) {
          obj['useGroupsAsWhitelist'] = _ApiClient["default"].convertToType(data['useGroupsAsWhitelist'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2ConnectorMicrosoftConfig;
}();
/**
 * @member {String} clientID
 */


AuthOAuth2ConnectorMicrosoftConfig.prototype['clientID'] = undefined;
/**
 * @member {String} clientSecret
 */

AuthOAuth2ConnectorMicrosoftConfig.prototype['clientSecret'] = undefined;
/**
 * @member {String} groupNameFormat
 */

AuthOAuth2ConnectorMicrosoftConfig.prototype['groupNameFormat'] = undefined;
/**
 * @member {Array.<String>} groups
 */

AuthOAuth2ConnectorMicrosoftConfig.prototype['groups'] = undefined;
/**
 * @member {Boolean} onlySecurityGroups
 */

AuthOAuth2ConnectorMicrosoftConfig.prototype['onlySecurityGroups'] = undefined;
/**
 * @member {String} redirectURI
 */

AuthOAuth2ConnectorMicrosoftConfig.prototype['redirectURI'] = undefined;
/**
 * @member {String} tenant
 */

AuthOAuth2ConnectorMicrosoftConfig.prototype['tenant'] = undefined;
/**
 * @member {Boolean} useGroupsAsWhitelist
 */

AuthOAuth2ConnectorMicrosoftConfig.prototype['useGroupsAsWhitelist'] = undefined;
var _default = AuthOAuth2ConnectorMicrosoftConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2ConnectorMicrosoftConfig.js.map
