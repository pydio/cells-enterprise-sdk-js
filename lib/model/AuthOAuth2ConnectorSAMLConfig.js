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
* The AuthOAuth2ConnectorSAMLConfig model module.
* @module model/AuthOAuth2ConnectorSAMLConfig
* @version 2.0
*/
var AuthOAuth2ConnectorSAMLConfig = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthOAuth2ConnectorSAMLConfig</code>.
  * @alias module:model/AuthOAuth2ConnectorSAMLConfig
  * @class
  */
  function AuthOAuth2ConnectorSAMLConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorSAMLConfig);

    _defineProperty(this, "ssoURL", undefined);

    _defineProperty(this, "ca", undefined);

    _defineProperty(this, "redirectURI", undefined);

    _defineProperty(this, "usernameAttr", undefined);

    _defineProperty(this, "emailAttr", undefined);

    _defineProperty(this, "groupsAttr", undefined);

    _defineProperty(this, "caData", undefined);

    _defineProperty(this, "insecureSkipSignatureValidation", undefined);

    _defineProperty(this, "entityIssuer", undefined);

    _defineProperty(this, "ssoIssuer", undefined);

    _defineProperty(this, "groupsDelim", undefined);

    _defineProperty(this, "nameIDPolicyFormat", undefined);
  }
  /**
  * Constructs a <code>AuthOAuth2ConnectorSAMLConfig</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthOAuth2ConnectorSAMLConfig} obj Optional instance to populate.
  * @return {module:model/AuthOAuth2ConnectorSAMLConfig} The populated <code>AuthOAuth2ConnectorSAMLConfig</code> instance.
  */


  _createClass(AuthOAuth2ConnectorSAMLConfig, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorSAMLConfig();

        if (data.hasOwnProperty('ssoURL')) {
          obj['ssoURL'] = _ApiClient["default"].convertToType(data['ssoURL'], 'String');
        }

        if (data.hasOwnProperty('ca')) {
          obj['ca'] = _ApiClient["default"].convertToType(data['ca'], 'String');
        }

        if (data.hasOwnProperty('redirectURI')) {
          obj['redirectURI'] = _ApiClient["default"].convertToType(data['redirectURI'], 'String');
        }

        if (data.hasOwnProperty('usernameAttr')) {
          obj['usernameAttr'] = _ApiClient["default"].convertToType(data['usernameAttr'], 'String');
        }

        if (data.hasOwnProperty('emailAttr')) {
          obj['emailAttr'] = _ApiClient["default"].convertToType(data['emailAttr'], 'String');
        }

        if (data.hasOwnProperty('groupsAttr')) {
          obj['groupsAttr'] = _ApiClient["default"].convertToType(data['groupsAttr'], 'String');
        }

        if (data.hasOwnProperty('caData')) {
          obj['caData'] = _ApiClient["default"].convertToType(data['caData'], 'String');
        }

        if (data.hasOwnProperty('insecureSkipSignatureValidation')) {
          obj['insecureSkipSignatureValidation'] = _ApiClient["default"].convertToType(data['insecureSkipSignatureValidation'], 'Boolean');
        }

        if (data.hasOwnProperty('entityIssuer')) {
          obj['entityIssuer'] = _ApiClient["default"].convertToType(data['entityIssuer'], 'String');
        }

        if (data.hasOwnProperty('ssoIssuer')) {
          obj['ssoIssuer'] = _ApiClient["default"].convertToType(data['ssoIssuer'], 'String');
        }

        if (data.hasOwnProperty('groupsDelim')) {
          obj['groupsDelim'] = _ApiClient["default"].convertToType(data['groupsDelim'], 'String');
        }

        if (data.hasOwnProperty('nameIDPolicyFormat')) {
          obj['nameIDPolicyFormat'] = _ApiClient["default"].convertToType(data['nameIDPolicyFormat'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} ssoURL
    */

  }]);

  return AuthOAuth2ConnectorSAMLConfig;
}();

exports["default"] = AuthOAuth2ConnectorSAMLConfig;
//# sourceMappingURL=AuthOAuth2ConnectorSAMLConfig.js.map
