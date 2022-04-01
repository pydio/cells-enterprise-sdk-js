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
 * The AuthOAuth2ConnectorOIDCConfig model module.
 * @module model/AuthOAuth2ConnectorOIDCConfig
 * @version 2.0
 */
var AuthOAuth2ConnectorOIDCConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2ConnectorOIDCConfig</code>.
   * @alias module:model/AuthOAuth2ConnectorOIDCConfig
   */
  function AuthOAuth2ConnectorOIDCConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorOIDCConfig);

    AuthOAuth2ConnectorOIDCConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2ConnectorOIDCConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2ConnectorOIDCConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorOIDCConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorOIDCConfig} The populated <code>AuthOAuth2ConnectorOIDCConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorOIDCConfig();

        if (data.hasOwnProperty('basicAuthUnsupported')) {
          obj['basicAuthUnsupported'] = _ApiClient["default"].convertToType(data['basicAuthUnsupported'], 'Boolean');
        }

        if (data.hasOwnProperty('clientID')) {
          obj['clientID'] = _ApiClient["default"].convertToType(data['clientID'], 'String');
        }

        if (data.hasOwnProperty('clientSecret')) {
          obj['clientSecret'] = _ApiClient["default"].convertToType(data['clientSecret'], 'String');
        }

        if (data.hasOwnProperty('getUserInfo')) {
          obj['getUserInfo'] = _ApiClient["default"].convertToType(data['getUserInfo'], 'Boolean');
        }

        if (data.hasOwnProperty('hostedDomains')) {
          obj['hostedDomains'] = _ApiClient["default"].convertToType(data['hostedDomains'], ['String']);
        }

        if (data.hasOwnProperty('insecureSkipEmailVerified')) {
          obj['insecureSkipEmailVerified'] = _ApiClient["default"].convertToType(data['insecureSkipEmailVerified'], 'Boolean');
        }

        if (data.hasOwnProperty('issuer')) {
          obj['issuer'] = _ApiClient["default"].convertToType(data['issuer'], 'String');
        }

        if (data.hasOwnProperty('redirectURI')) {
          obj['redirectURI'] = _ApiClient["default"].convertToType(data['redirectURI'], 'String');
        }

        if (data.hasOwnProperty('scopes')) {
          obj['scopes'] = _ApiClient["default"].convertToType(data['scopes'], ['String']);
        }

        if (data.hasOwnProperty('userIDKey')) {
          obj['userIDKey'] = _ApiClient["default"].convertToType(data['userIDKey'], 'String');
        }

        if (data.hasOwnProperty('userNameKey')) {
          obj['userNameKey'] = _ApiClient["default"].convertToType(data['userNameKey'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2ConnectorOIDCConfig;
}();
/**
 * @member {Boolean} basicAuthUnsupported
 */


AuthOAuth2ConnectorOIDCConfig.prototype['basicAuthUnsupported'] = undefined;
/**
 * @member {String} clientID
 */

AuthOAuth2ConnectorOIDCConfig.prototype['clientID'] = undefined;
/**
 * @member {String} clientSecret
 */

AuthOAuth2ConnectorOIDCConfig.prototype['clientSecret'] = undefined;
/**
 * @member {Boolean} getUserInfo
 */

AuthOAuth2ConnectorOIDCConfig.prototype['getUserInfo'] = undefined;
/**
 * @member {Array.<String>} hostedDomains
 */

AuthOAuth2ConnectorOIDCConfig.prototype['hostedDomains'] = undefined;
/**
 * @member {Boolean} insecureSkipEmailVerified
 */

AuthOAuth2ConnectorOIDCConfig.prototype['insecureSkipEmailVerified'] = undefined;
/**
 * @member {String} issuer
 */

AuthOAuth2ConnectorOIDCConfig.prototype['issuer'] = undefined;
/**
 * @member {String} redirectURI
 */

AuthOAuth2ConnectorOIDCConfig.prototype['redirectURI'] = undefined;
/**
 * @member {Array.<String>} scopes
 */

AuthOAuth2ConnectorOIDCConfig.prototype['scopes'] = undefined;
/**
 * @member {String} userIDKey
 */

AuthOAuth2ConnectorOIDCConfig.prototype['userIDKey'] = undefined;
/**
 * @member {String} userNameKey
 */

AuthOAuth2ConnectorOIDCConfig.prototype['userNameKey'] = undefined;
var _default = AuthOAuth2ConnectorOIDCConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2ConnectorOIDCConfig.js.map
