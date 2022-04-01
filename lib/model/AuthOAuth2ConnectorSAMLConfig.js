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
 * The AuthOAuth2ConnectorSAMLConfig model module.
 * @module model/AuthOAuth2ConnectorSAMLConfig
 * @version 2.0
 */
var AuthOAuth2ConnectorSAMLConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2ConnectorSAMLConfig</code>.
   * @alias module:model/AuthOAuth2ConnectorSAMLConfig
   */
  function AuthOAuth2ConnectorSAMLConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorSAMLConfig);

    AuthOAuth2ConnectorSAMLConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2ConnectorSAMLConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2ConnectorSAMLConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorSAMLConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorSAMLConfig} The populated <code>AuthOAuth2ConnectorSAMLConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorSAMLConfig();

        if (data.hasOwnProperty('ca')) {
          obj['ca'] = _ApiClient["default"].convertToType(data['ca'], 'String');
        }

        if (data.hasOwnProperty('caData')) {
          obj['caData'] = _ApiClient["default"].convertToType(data['caData'], 'String');
        }

        if (data.hasOwnProperty('emailAttr')) {
          obj['emailAttr'] = _ApiClient["default"].convertToType(data['emailAttr'], 'String');
        }

        if (data.hasOwnProperty('entityIssuer')) {
          obj['entityIssuer'] = _ApiClient["default"].convertToType(data['entityIssuer'], 'String');
        }

        if (data.hasOwnProperty('groupsAttr')) {
          obj['groupsAttr'] = _ApiClient["default"].convertToType(data['groupsAttr'], 'String');
        }

        if (data.hasOwnProperty('groupsDelim')) {
          obj['groupsDelim'] = _ApiClient["default"].convertToType(data['groupsDelim'], 'String');
        }

        if (data.hasOwnProperty('insecureSkipSignatureValidation')) {
          obj['insecureSkipSignatureValidation'] = _ApiClient["default"].convertToType(data['insecureSkipSignatureValidation'], 'Boolean');
        }

        if (data.hasOwnProperty('nameIDPolicyFormat')) {
          obj['nameIDPolicyFormat'] = _ApiClient["default"].convertToType(data['nameIDPolicyFormat'], 'String');
        }

        if (data.hasOwnProperty('redirectURI')) {
          obj['redirectURI'] = _ApiClient["default"].convertToType(data['redirectURI'], 'String');
        }

        if (data.hasOwnProperty('ssoIssuer')) {
          obj['ssoIssuer'] = _ApiClient["default"].convertToType(data['ssoIssuer'], 'String');
        }

        if (data.hasOwnProperty('ssoURL')) {
          obj['ssoURL'] = _ApiClient["default"].convertToType(data['ssoURL'], 'String');
        }

        if (data.hasOwnProperty('usernameAttr')) {
          obj['usernameAttr'] = _ApiClient["default"].convertToType(data['usernameAttr'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2ConnectorSAMLConfig;
}();
/**
 * @member {String} ca
 */


AuthOAuth2ConnectorSAMLConfig.prototype['ca'] = undefined;
/**
 * @member {String} caData
 */

AuthOAuth2ConnectorSAMLConfig.prototype['caData'] = undefined;
/**
 * @member {String} emailAttr
 */

AuthOAuth2ConnectorSAMLConfig.prototype['emailAttr'] = undefined;
/**
 * @member {String} entityIssuer
 */

AuthOAuth2ConnectorSAMLConfig.prototype['entityIssuer'] = undefined;
/**
 * @member {String} groupsAttr
 */

AuthOAuth2ConnectorSAMLConfig.prototype['groupsAttr'] = undefined;
/**
 * @member {String} groupsDelim
 */

AuthOAuth2ConnectorSAMLConfig.prototype['groupsDelim'] = undefined;
/**
 * @member {Boolean} insecureSkipSignatureValidation
 */

AuthOAuth2ConnectorSAMLConfig.prototype['insecureSkipSignatureValidation'] = undefined;
/**
 * @member {String} nameIDPolicyFormat
 */

AuthOAuth2ConnectorSAMLConfig.prototype['nameIDPolicyFormat'] = undefined;
/**
 * @member {String} redirectURI
 */

AuthOAuth2ConnectorSAMLConfig.prototype['redirectURI'] = undefined;
/**
 * @member {String} ssoIssuer
 */

AuthOAuth2ConnectorSAMLConfig.prototype['ssoIssuer'] = undefined;
/**
 * @member {String} ssoURL
 */

AuthOAuth2ConnectorSAMLConfig.prototype['ssoURL'] = undefined;
/**
 * @member {String} usernameAttr
 */

AuthOAuth2ConnectorSAMLConfig.prototype['usernameAttr'] = undefined;
var _default = AuthOAuth2ConnectorSAMLConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2ConnectorSAMLConfig.js.map
