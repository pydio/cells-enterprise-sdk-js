"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthPatType = _interopRequireDefault(require("./AuthPatType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The AuthPersonalAccessToken model module.
* @module model/AuthPersonalAccessToken
* @version 2.0
*/
var AuthPersonalAccessToken = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthPersonalAccessToken</code>.
  * @alias module:model/AuthPersonalAccessToken
  * @class
  */
  function AuthPersonalAccessToken() {
    _classCallCheck(this, AuthPersonalAccessToken);

    _defineProperty(this, "Uuid", undefined);

    _defineProperty(this, "Type", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "UserUuid", undefined);

    _defineProperty(this, "UserLogin", undefined);

    _defineProperty(this, "Scopes", undefined);

    _defineProperty(this, "AutoRefreshWindow", undefined);

    _defineProperty(this, "ExpiresAt", undefined);

    _defineProperty(this, "CreatedBy", undefined);

    _defineProperty(this, "CreatedAt", undefined);

    _defineProperty(this, "UpdatedAt", undefined);
  }
  /**
  * Constructs a <code>AuthPersonalAccessToken</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthPersonalAccessToken} obj Optional instance to populate.
  * @return {module:model/AuthPersonalAccessToken} The populated <code>AuthPersonalAccessToken</code> instance.
  */


  _createClass(AuthPersonalAccessToken, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthPersonalAccessToken();

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _AuthPatType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('UserUuid')) {
          obj['UserUuid'] = _ApiClient["default"].convertToType(data['UserUuid'], 'String');
        }

        if (data.hasOwnProperty('UserLogin')) {
          obj['UserLogin'] = _ApiClient["default"].convertToType(data['UserLogin'], 'String');
        }

        if (data.hasOwnProperty('Scopes')) {
          obj['Scopes'] = _ApiClient["default"].convertToType(data['Scopes'], ['String']);
        }

        if (data.hasOwnProperty('AutoRefreshWindow')) {
          obj['AutoRefreshWindow'] = _ApiClient["default"].convertToType(data['AutoRefreshWindow'], 'Number');
        }

        if (data.hasOwnProperty('ExpiresAt')) {
          obj['ExpiresAt'] = _ApiClient["default"].convertToType(data['ExpiresAt'], 'String');
        }

        if (data.hasOwnProperty('CreatedBy')) {
          obj['CreatedBy'] = _ApiClient["default"].convertToType(data['CreatedBy'], 'String');
        }

        if (data.hasOwnProperty('CreatedAt')) {
          obj['CreatedAt'] = _ApiClient["default"].convertToType(data['CreatedAt'], 'String');
        }

        if (data.hasOwnProperty('UpdatedAt')) {
          obj['UpdatedAt'] = _ApiClient["default"].convertToType(data['UpdatedAt'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} Uuid
    */

  }]);

  return AuthPersonalAccessToken;
}();

exports["default"] = AuthPersonalAccessToken;
//# sourceMappingURL=AuthPersonalAccessToken.js.map
