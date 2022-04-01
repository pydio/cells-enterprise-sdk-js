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
 * The AuthOAuth2ConnectorOAuthConfig model module.
 * @module model/AuthOAuth2ConnectorOAuthConfig
 * @version 2.0
 */
var AuthOAuth2ConnectorOAuthConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2ConnectorOAuthConfig</code>.
   * @alias module:model/AuthOAuth2ConnectorOAuthConfig
   */
  function AuthOAuth2ConnectorOAuthConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorOAuthConfig);

    AuthOAuth2ConnectorOAuthConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2ConnectorOAuthConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2ConnectorOAuthConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorOAuthConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorOAuthConfig} The populated <code>AuthOAuth2ConnectorOAuthConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorOAuthConfig();

        if (data.hasOwnProperty('authorizeURL')) {
          obj['authorizeURL'] = _ApiClient["default"].convertToType(data['authorizeURL'], 'String');
        }

        if (data.hasOwnProperty('baseURL')) {
          obj['baseURL'] = _ApiClient["default"].convertToType(data['baseURL'], 'String');
        }

        if (data.hasOwnProperty('clientID')) {
          obj['clientID'] = _ApiClient["default"].convertToType(data['clientID'], 'String');
        }

        if (data.hasOwnProperty('clientSecret')) {
          obj['clientSecret'] = _ApiClient["default"].convertToType(data['clientSecret'], 'String');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], ['String']);
        }

        if (data.hasOwnProperty('redirectURI')) {
          obj['redirectURI'] = _ApiClient["default"].convertToType(data['redirectURI'], 'String');
        }

        if (data.hasOwnProperty('tokenURL')) {
          obj['tokenURL'] = _ApiClient["default"].convertToType(data['tokenURL'], 'String');
        }

        if (data.hasOwnProperty('useBrokenAuthHeaderProvider')) {
          obj['useBrokenAuthHeaderProvider'] = _ApiClient["default"].convertToType(data['useBrokenAuthHeaderProvider'], 'Boolean');
        }

        if (data.hasOwnProperty('useLoginAsID')) {
          obj['useLoginAsID'] = _ApiClient["default"].convertToType(data['useLoginAsID'], 'Boolean');
        }

        if (data.hasOwnProperty('userInfoURL')) {
          obj['userInfoURL'] = _ApiClient["default"].convertToType(data['userInfoURL'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2ConnectorOAuthConfig;
}();
/**
 * @member {String} authorizeURL
 */


AuthOAuth2ConnectorOAuthConfig.prototype['authorizeURL'] = undefined;
/**
 * @member {String} baseURL
 */

AuthOAuth2ConnectorOAuthConfig.prototype['baseURL'] = undefined;
/**
 * @member {String} clientID
 */

AuthOAuth2ConnectorOAuthConfig.prototype['clientID'] = undefined;
/**
 * @member {String} clientSecret
 */

AuthOAuth2ConnectorOAuthConfig.prototype['clientSecret'] = undefined;
/**
 * @member {Array.<String>} groups
 */

AuthOAuth2ConnectorOAuthConfig.prototype['groups'] = undefined;
/**
 * @member {String} redirectURI
 */

AuthOAuth2ConnectorOAuthConfig.prototype['redirectURI'] = undefined;
/**
 * @member {String} tokenURL
 */

AuthOAuth2ConnectorOAuthConfig.prototype['tokenURL'] = undefined;
/**
 * @member {Boolean} useBrokenAuthHeaderProvider
 */

AuthOAuth2ConnectorOAuthConfig.prototype['useBrokenAuthHeaderProvider'] = undefined;
/**
 * @member {Boolean} useLoginAsID
 */

AuthOAuth2ConnectorOAuthConfig.prototype['useLoginAsID'] = undefined;
/**
 * @member {String} userInfoURL
 */

AuthOAuth2ConnectorOAuthConfig.prototype['userInfoURL'] = undefined;
var _default = AuthOAuth2ConnectorOAuthConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2ConnectorOAuthConfig.js.map
