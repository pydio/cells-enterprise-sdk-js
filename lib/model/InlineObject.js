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
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 2.0
 */
var InlineObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject</code>.
   * @alias module:model/InlineObject
   */
  function InlineObject() {
    _classCallCheck(this, InlineObject);

    InlineObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject();

        if (data.hasOwnProperty('audience')) {
          obj['audience'] = _ApiClient["default"].convertToType(data['audience'], ['String']);
        }

        if (data.hasOwnProperty('client_name')) {
          obj['client_name'] = _ApiClient["default"].convertToType(data['client_name'], 'String');
        }

        if (data.hasOwnProperty('client_secret')) {
          obj['client_secret'] = _ApiClient["default"].convertToType(data['client_secret'], 'String');
        }

        if (data.hasOwnProperty('grant_types')) {
          obj['grant_types'] = _ApiClient["default"].convertToType(data['grant_types'], ['String']);
        }

        if (data.hasOwnProperty('redirect_uris')) {
          obj['redirect_uris'] = _ApiClient["default"].convertToType(data['redirect_uris'], ['String']);
        }

        if (data.hasOwnProperty('response_types')) {
          obj['response_types'] = _ApiClient["default"].convertToType(data['response_types'], ['String']);
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject;
}();
/**
 * @member {Array.<String>} audience
 */


InlineObject.prototype['audience'] = undefined;
/**
 * @member {String} client_name
 */

InlineObject.prototype['client_name'] = undefined;
/**
 * @member {String} client_secret
 */

InlineObject.prototype['client_secret'] = undefined;
/**
 * @member {Array.<String>} grant_types
 */

InlineObject.prototype['grant_types'] = undefined;
/**
 * @member {Array.<String>} redirect_uris
 */

InlineObject.prototype['redirect_uris'] = undefined;
/**
 * @member {Array.<String>} response_types
 */

InlineObject.prototype['response_types'] = undefined;
/**
 * @member {String} scope
 */

InlineObject.prototype['scope'] = undefined;
var _default = InlineObject;
exports["default"] = _default;
//# sourceMappingURL=InlineObject.js.map
