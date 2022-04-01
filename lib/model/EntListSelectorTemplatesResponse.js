"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntSelectorTemplate = _interopRequireDefault(require("./EntSelectorTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntListSelectorTemplatesResponse model module.
 * @module model/EntListSelectorTemplatesResponse
 * @version 2.0
 */
var EntListSelectorTemplatesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntListSelectorTemplatesResponse</code>.
   * @alias module:model/EntListSelectorTemplatesResponse
   */
  function EntListSelectorTemplatesResponse() {
    _classCallCheck(this, EntListSelectorTemplatesResponse);

    EntListSelectorTemplatesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntListSelectorTemplatesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntListSelectorTemplatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntListSelectorTemplatesResponse} obj Optional instance to populate.
     * @return {module:model/EntListSelectorTemplatesResponse} The populated <code>EntListSelectorTemplatesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntListSelectorTemplatesResponse();

        if (data.hasOwnProperty('Templates')) {
          obj['Templates'] = _ApiClient["default"].convertToType(data['Templates'], [_EntSelectorTemplate["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EntListSelectorTemplatesResponse;
}();
/**
 * @member {Array.<module:model/EntSelectorTemplate>} Templates
 */


EntListSelectorTemplatesResponse.prototype['Templates'] = undefined;
var _default = EntListSelectorTemplatesResponse;
exports["default"] = _default;
//# sourceMappingURL=EntListSelectorTemplatesResponse.js.map
