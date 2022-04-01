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
 * The EntPersonalAccessTokenRequest model module.
 * @module model/EntPersonalAccessTokenRequest
 * @version 2.0
 */
var EntPersonalAccessTokenRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntPersonalAccessTokenRequest</code>.
   * @alias module:model/EntPersonalAccessTokenRequest
   */
  function EntPersonalAccessTokenRequest() {
    _classCallCheck(this, EntPersonalAccessTokenRequest);

    EntPersonalAccessTokenRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntPersonalAccessTokenRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntPersonalAccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntPersonalAccessTokenRequest} obj Optional instance to populate.
     * @return {module:model/EntPersonalAccessTokenRequest} The populated <code>EntPersonalAccessTokenRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntPersonalAccessTokenRequest();

        if (data.hasOwnProperty('AutoRefresh')) {
          obj['AutoRefresh'] = _ApiClient["default"].convertToType(data['AutoRefresh'], 'Number');
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

        if (data.hasOwnProperty('UserLogin')) {
          obj['UserLogin'] = _ApiClient["default"].convertToType(data['UserLogin'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntPersonalAccessTokenRequest;
}();
/**
 * @member {Number} AutoRefresh
 */


EntPersonalAccessTokenRequest.prototype['AutoRefresh'] = undefined;
/**
 * @member {String} ExpiresAt
 */

EntPersonalAccessTokenRequest.prototype['ExpiresAt'] = undefined;
/**
 * @member {String} Label
 */

EntPersonalAccessTokenRequest.prototype['Label'] = undefined;
/**
 * @member {Array.<String>} Scopes
 */

EntPersonalAccessTokenRequest.prototype['Scopes'] = undefined;
/**
 * @member {String} UserLogin
 */

EntPersonalAccessTokenRequest.prototype['UserLogin'] = undefined;
var _default = EntPersonalAccessTokenRequest;
exports["default"] = _default;
//# sourceMappingURL=EntPersonalAccessTokenRequest.js.map
