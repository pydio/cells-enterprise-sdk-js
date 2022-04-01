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
 * The EntListSelectorTemplatesRequest model module.
 * @module model/EntListSelectorTemplatesRequest
 * @version 2.0
 */
var EntListSelectorTemplatesRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntListSelectorTemplatesRequest</code>.
   * @alias module:model/EntListSelectorTemplatesRequest
   */
  function EntListSelectorTemplatesRequest() {
    _classCallCheck(this, EntListSelectorTemplatesRequest);

    EntListSelectorTemplatesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntListSelectorTemplatesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntListSelectorTemplatesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntListSelectorTemplatesRequest} obj Optional instance to populate.
     * @return {module:model/EntListSelectorTemplatesRequest} The populated <code>EntListSelectorTemplatesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntListSelectorTemplatesRequest();

        if (data.hasOwnProperty('Filter')) {
          obj['Filter'] = _ApiClient["default"].convertToType(data['Filter'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntListSelectorTemplatesRequest;
}();
/**
 * @member {String} Filter
 */


EntListSelectorTemplatesRequest.prototype['Filter'] = undefined;
var _default = EntListSelectorTemplatesRequest;
exports["default"] = _default;
//# sourceMappingURL=EntListSelectorTemplatesRequest.js.map
