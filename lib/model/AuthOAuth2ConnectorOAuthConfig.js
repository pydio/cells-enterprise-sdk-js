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
* The AuthOAuth2ConnectorOAuthConfig model module.
* @module model/AuthOAuth2ConnectorOAuthConfig
* @version 2.0
*/
var AuthOAuth2ConnectorOAuthConfig = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthOAuth2ConnectorOAuthConfig</code>.
  * @alias module:model/AuthOAuth2ConnectorOAuthConfig
  * @class
  */
  function AuthOAuth2ConnectorOAuthConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorOAuthConfig);

    _defineProperty(this, "baseURL", undefined);

    _defineProperty(this, "authorizeURL", undefined);

    _defineProperty(this, "tokenURL", undefined);

    _defineProperty(this, "userInfoURL", undefined);

    _defineProperty(this, "clientID", undefined);

    _defineProperty(this, "clientSecret", undefined);

    _defineProperty(this, "redirectURI", undefined);

    _defineProperty(this, "groups", undefined);

    _defineProperty(this, "useLoginAsID", undefined);

    _defineProperty(this, "useBrokenAuthHeaderProvider", undefined);
  }
  /**
  * Constructs a <code>AuthOAuth2ConnectorOAuthConfig</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthOAuth2ConnectorOAuthConfig} obj Optional instance to populate.
  * @return {module:model/AuthOAuth2ConnectorOAuthConfig} The populated <code>AuthOAuth2ConnectorOAuthConfig</code> instance.
  */


  _createClass(AuthOAuth2ConnectorOAuthConfig, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorOAuthConfig();

        if (data.hasOwnProperty('baseURL')) {
          obj['baseURL'] = _ApiClient["default"].convertToType(data['baseURL'], 'String');
        }

        if (data.hasOwnProperty('authorizeURL')) {
          obj['authorizeURL'] = _ApiClient["default"].convertToType(data['authorizeURL'], 'String');
        }

        if (data.hasOwnProperty('tokenURL')) {
          obj['tokenURL'] = _ApiClient["default"].convertToType(data['tokenURL'], 'String');
        }

        if (data.hasOwnProperty('userInfoURL')) {
          obj['userInfoURL'] = _ApiClient["default"].convertToType(data['userInfoURL'], 'String');
        }

        if (data.hasOwnProperty('clientID')) {
          obj['clientID'] = _ApiClient["default"].convertToType(data['clientID'], 'String');
        }

        if (data.hasOwnProperty('clientSecret')) {
          obj['clientSecret'] = _ApiClient["default"].convertToType(data['clientSecret'], 'String');
        }

        if (data.hasOwnProperty('redirectURI')) {
          obj['redirectURI'] = _ApiClient["default"].convertToType(data['redirectURI'], 'String');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], ['String']);
        }

        if (data.hasOwnProperty('useLoginAsID')) {
          obj['useLoginAsID'] = _ApiClient["default"].convertToType(data['useLoginAsID'], 'Boolean');
        }

        if (data.hasOwnProperty('useBrokenAuthHeaderProvider')) {
          obj['useBrokenAuthHeaderProvider'] = _ApiClient["default"].convertToType(data['useBrokenAuthHeaderProvider'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {String} baseURL
    */

  }]);

  return AuthOAuth2ConnectorOAuthConfig;
}();

exports["default"] = AuthOAuth2ConnectorOAuthConfig;
//# sourceMappingURL=AuthOAuth2ConnectorOAuthConfig.js.map
