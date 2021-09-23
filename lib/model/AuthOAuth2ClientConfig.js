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
* The AuthOAuth2ClientConfig model module.
* @module model/AuthOAuth2ClientConfig
* @version 2.0
*/
var AuthOAuth2ClientConfig = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthOAuth2ClientConfig</code>.
  * @alias module:model/AuthOAuth2ClientConfig
  * @class
  */
  function AuthOAuth2ClientConfig() {
    _classCallCheck(this, AuthOAuth2ClientConfig);

    _defineProperty(this, "ClientID", undefined);

    _defineProperty(this, "Name", undefined);

    _defineProperty(this, "Secret", undefined);

    _defineProperty(this, "RedirectURIs", undefined);

    _defineProperty(this, "GrantTypes", undefined);

    _defineProperty(this, "ResponseTypes", undefined);

    _defineProperty(this, "Scope", undefined);

    _defineProperty(this, "Audience", undefined);
  }
  /**
  * Constructs a <code>AuthOAuth2ClientConfig</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthOAuth2ClientConfig} obj Optional instance to populate.
  * @return {module:model/AuthOAuth2ClientConfig} The populated <code>AuthOAuth2ClientConfig</code> instance.
  */


  _createClass(AuthOAuth2ClientConfig, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ClientConfig();

        if (data.hasOwnProperty('ClientID')) {
          obj['ClientID'] = _ApiClient["default"].convertToType(data['ClientID'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Secret')) {
          obj['Secret'] = _ApiClient["default"].convertToType(data['Secret'], 'String');
        }

        if (data.hasOwnProperty('RedirectURIs')) {
          obj['RedirectURIs'] = _ApiClient["default"].convertToType(data['RedirectURIs'], ['String']);
        }

        if (data.hasOwnProperty('GrantTypes')) {
          obj['GrantTypes'] = _ApiClient["default"].convertToType(data['GrantTypes'], ['String']);
        }

        if (data.hasOwnProperty('ResponseTypes')) {
          obj['ResponseTypes'] = _ApiClient["default"].convertToType(data['ResponseTypes'], ['String']);
        }

        if (data.hasOwnProperty('Scope')) {
          obj['Scope'] = _ApiClient["default"].convertToType(data['Scope'], 'String');
        }

        if (data.hasOwnProperty('Audience')) {
          obj['Audience'] = _ApiClient["default"].convertToType(data['Audience'], ['String']);
        }
      }

      return obj;
    }
    /**
    * @member {String} ClientID
    */

  }]);

  return AuthOAuth2ClientConfig;
}();

exports["default"] = AuthOAuth2ClientConfig;
//# sourceMappingURL=AuthOAuth2ClientConfig.js.map
