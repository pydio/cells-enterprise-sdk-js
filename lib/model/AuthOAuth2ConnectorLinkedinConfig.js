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
* The AuthOAuth2ConnectorLinkedinConfig model module.
* @module model/AuthOAuth2ConnectorLinkedinConfig
* @version 2.0
*/
var AuthOAuth2ConnectorLinkedinConfig = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthOAuth2ConnectorLinkedinConfig</code>.
  * @alias module:model/AuthOAuth2ConnectorLinkedinConfig
  * @class
  */
  function AuthOAuth2ConnectorLinkedinConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorLinkedinConfig);

    _defineProperty(this, "clientID", undefined);

    _defineProperty(this, "clientSecret", undefined);

    _defineProperty(this, "redirectURI", undefined);
  }
  /**
  * Constructs a <code>AuthOAuth2ConnectorLinkedinConfig</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthOAuth2ConnectorLinkedinConfig} obj Optional instance to populate.
  * @return {module:model/AuthOAuth2ConnectorLinkedinConfig} The populated <code>AuthOAuth2ConnectorLinkedinConfig</code> instance.
  */


  _createClass(AuthOAuth2ConnectorLinkedinConfig, null, [{
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
    /**
    * @member {String} clientID
    */

  }]);

  return AuthOAuth2ConnectorLinkedinConfig;
}();

exports["default"] = AuthOAuth2ConnectorLinkedinConfig;
//# sourceMappingURL=AuthOAuth2ConnectorLinkedinConfig.js.map