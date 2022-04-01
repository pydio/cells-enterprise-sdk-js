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
 * The AuthOAuth2ClientConfig model module.
 * @module model/AuthOAuth2ClientConfig
 * @version 2.0
 */
var AuthOAuth2ClientConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2ClientConfig</code>.
   * @alias module:model/AuthOAuth2ClientConfig
   */
  function AuthOAuth2ClientConfig() {
    _classCallCheck(this, AuthOAuth2ClientConfig);

    AuthOAuth2ClientConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2ClientConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2ClientConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ClientConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ClientConfig} The populated <code>AuthOAuth2ClientConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ClientConfig();

        if (data.hasOwnProperty('audience')) {
          obj['audience'] = _ApiClient["default"].convertToType(data['audience'], ['String']);
        }

        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient["default"].convertToType(data['client_id'], 'String');
        }

        if (data.hasOwnProperty('client_name')) {
          obj['client_name'] = _ApiClient["default"].convertToType(data['client_name'], 'String');
        }

        if (data.hasOwnProperty('client_secret')) {
          obj['client_secret'] = _ApiClient["default"].convertToType(data['client_secret'], 'String');
        }

        if (data.hasOwnProperty('grant_types')) {
          obj['grant_types'] = _ApiClient["default"].convertToType(data['grant_types'], ['String']);
        }

        if (data.hasOwnProperty('redirect_uris')) {
          obj['redirect_uris'] = _ApiClient["default"].convertToType(data['redirect_uris'], ['String']);
        }

        if (data.hasOwnProperty('response_types')) {
          obj['response_types'] = _ApiClient["default"].convertToType(data['response_types'], ['String']);
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2ClientConfig;
}();
/**
 * @member {Array.<String>} audience
 */


AuthOAuth2ClientConfig.prototype['audience'] = undefined;
/**
 * @member {String} client_id
 */

AuthOAuth2ClientConfig.prototype['client_id'] = undefined;
/**
 * @member {String} client_name
 */

AuthOAuth2ClientConfig.prototype['client_name'] = undefined;
/**
 * @member {String} client_secret
 */

AuthOAuth2ClientConfig.prototype['client_secret'] = undefined;
/**
 * @member {Array.<String>} grant_types
 */

AuthOAuth2ClientConfig.prototype['grant_types'] = undefined;
/**
 * @member {Array.<String>} redirect_uris
 */

AuthOAuth2ClientConfig.prototype['redirect_uris'] = undefined;
/**
 * @member {Array.<String>} response_types
 */

AuthOAuth2ClientConfig.prototype['response_types'] = undefined;
/**
 * @member {String} scope
 */

AuthOAuth2ClientConfig.prototype['scope'] = undefined;
var _default = AuthOAuth2ClientConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2ClientConfig.js.map
