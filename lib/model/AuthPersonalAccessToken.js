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

/**
 * The AuthPersonalAccessToken model module.
 * @module model/AuthPersonalAccessToken
 * @version 2.0
 */
var AuthPersonalAccessToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthPersonalAccessToken</code>.
   * @alias module:model/AuthPersonalAccessToken
   */
  function AuthPersonalAccessToken() {
    _classCallCheck(this, AuthPersonalAccessToken);

    AuthPersonalAccessToken.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthPersonalAccessToken, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthPersonalAccessToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthPersonalAccessToken} obj Optional instance to populate.
     * @return {module:model/AuthPersonalAccessToken} The populated <code>AuthPersonalAccessToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthPersonalAccessToken();

        if (data.hasOwnProperty('AutoRefreshWindow')) {
          obj['AutoRefreshWindow'] = _ApiClient["default"].convertToType(data['AutoRefreshWindow'], 'Number');
        }

        if (data.hasOwnProperty('CreatedAt')) {
          obj['CreatedAt'] = _ApiClient["default"].convertToType(data['CreatedAt'], 'String');
        }

        if (data.hasOwnProperty('CreatedBy')) {
          obj['CreatedBy'] = _ApiClient["default"].convertToType(data['CreatedBy'], 'String');
        }

        if (data.hasOwnProperty('ExpiresAt')) {
          obj['ExpiresAt'] = _ApiClient["default"].convertToType(data['ExpiresAt'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Scopes')) {
          obj['Scopes'] = _ApiClient["default"].convertToType(data['Scopes'], ['String']);
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _AuthPatType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('UpdatedAt')) {
          obj['UpdatedAt'] = _ApiClient["default"].convertToType(data['UpdatedAt'], 'String');
        }

        if (data.hasOwnProperty('UserLogin')) {
          obj['UserLogin'] = _ApiClient["default"].convertToType(data['UserLogin'], 'String');
        }

        if (data.hasOwnProperty('UserUuid')) {
          obj['UserUuid'] = _ApiClient["default"].convertToType(data['UserUuid'], 'String');
        }

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthPersonalAccessToken;
}();
/**
 * @member {Number} AutoRefreshWindow
 */


AuthPersonalAccessToken.prototype['AutoRefreshWindow'] = undefined;
/**
 * @member {String} CreatedAt
 */

AuthPersonalAccessToken.prototype['CreatedAt'] = undefined;
/**
 * @member {String} CreatedBy
 */

AuthPersonalAccessToken.prototype['CreatedBy'] = undefined;
/**
 * @member {String} ExpiresAt
 */

AuthPersonalAccessToken.prototype['ExpiresAt'] = undefined;
/**
 * @member {String} Label
 */

AuthPersonalAccessToken.prototype['Label'] = undefined;
/**
 * @member {Array.<String>} Scopes
 */

AuthPersonalAccessToken.prototype['Scopes'] = undefined;
/**
 * @member {module:model/AuthPatType} Type
 */

AuthPersonalAccessToken.prototype['Type'] = undefined;
/**
 * @member {String} UpdatedAt
 */

AuthPersonalAccessToken.prototype['UpdatedAt'] = undefined;
/**
 * @member {String} UserLogin
 */

AuthPersonalAccessToken.prototype['UserLogin'] = undefined;
/**
 * @member {String} UserUuid
 */

AuthPersonalAccessToken.prototype['UserUuid'] = undefined;
/**
 * @member {String} Uuid
 */

AuthPersonalAccessToken.prototype['Uuid'] = undefined;
var _default = AuthPersonalAccessToken;
exports["default"] = _default;
//# sourceMappingURL=AuthPersonalAccessToken.js.map
