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
 * The EntPersonalAccessTokenResponse model module.
 * @module model/EntPersonalAccessTokenResponse
 * @version 2.0
 */
var EntPersonalAccessTokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntPersonalAccessTokenResponse</code>.
   * @alias module:model/EntPersonalAccessTokenResponse
   */
  function EntPersonalAccessTokenResponse() {
    _classCallCheck(this, EntPersonalAccessTokenResponse);

    EntPersonalAccessTokenResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntPersonalAccessTokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntPersonalAccessTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntPersonalAccessTokenResponse} obj Optional instance to populate.
     * @return {module:model/EntPersonalAccessTokenResponse} The populated <code>EntPersonalAccessTokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntPersonalAccessTokenResponse();

        if (data.hasOwnProperty('AccessToken')) {
          obj['AccessToken'] = _ApiClient["default"].convertToType(data['AccessToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntPersonalAccessTokenResponse;
}();
/**
 * @member {String} AccessToken
 */


EntPersonalAccessTokenResponse.prototype['AccessToken'] = undefined;
var _default = EntPersonalAccessTokenResponse;
exports["default"] = _default;
//# sourceMappingURL=EntPersonalAccessTokenResponse.js.map
