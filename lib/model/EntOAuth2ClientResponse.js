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
 * The EntOAuth2ClientResponse model module.
 * @module model/EntOAuth2ClientResponse
 * @version 2.0
 */
var EntOAuth2ClientResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntOAuth2ClientResponse</code>.
   * @alias module:model/EntOAuth2ClientResponse
   */
  function EntOAuth2ClientResponse() {
    _classCallCheck(this, EntOAuth2ClientResponse);

    EntOAuth2ClientResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntOAuth2ClientResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntOAuth2ClientResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntOAuth2ClientResponse} obj Optional instance to populate.
     * @return {module:model/EntOAuth2ClientResponse} The populated <code>EntOAuth2ClientResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntOAuth2ClientResponse();

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EntOAuth2ClientResponse;
}();
/**
 * @member {Boolean} Success
 */


EntOAuth2ClientResponse.prototype['Success'] = undefined;
var _default = EntOAuth2ClientResponse;
exports["default"] = _default;
//# sourceMappingURL=EntOAuth2ClientResponse.js.map
