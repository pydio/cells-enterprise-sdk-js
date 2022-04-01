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
 * The AuthOAuth2ConnectorLinkedinConfig model module.
 * @module model/AuthOAuth2ConnectorLinkedinConfig
 * @version 2.0
 */
var AuthOAuth2ConnectorLinkedinConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2ConnectorLinkedinConfig</code>.
   * @alias module:model/AuthOAuth2ConnectorLinkedinConfig
   */
  function AuthOAuth2ConnectorLinkedinConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorLinkedinConfig);

    AuthOAuth2ConnectorLinkedinConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2ConnectorLinkedinConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2ConnectorLinkedinConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorLinkedinConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorLinkedinConfig} The populated <code>AuthOAuth2ConnectorLinkedinConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorLinkedinConfig();

        if (data.hasOwnProperty('clientID')) {
          obj['clientID'] = _ApiClient["default"].convertToType(data['clientID'], 'String');
        }

        if (data.hasOwnProperty('clientSecret')) {
          obj['clientSecret'] = _ApiClient["default"].convertToType(data['clientSecret'], 'String');
        }

        if (data.hasOwnProperty('redirectURI')) {
          obj['redirectURI'] = _ApiClient["default"].convertToType(data['redirectURI'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2ConnectorLinkedinConfig;
}();
/**
 * @member {String} clientID
 */


AuthOAuth2ConnectorLinkedinConfig.prototype['clientID'] = undefined;
/**
 * @member {String} clientSecret
 */

AuthOAuth2ConnectorLinkedinConfig.prototype['clientSecret'] = undefined;
/**
 * @member {String} redirectURI
 */

AuthOAuth2ConnectorLinkedinConfig.prototype['redirectURI'] = undefined;
var _default = AuthOAuth2ConnectorLinkedinConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2ConnectorLinkedinConfig.js.map
