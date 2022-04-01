"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntMetaTemplate = _interopRequireDefault(require("./EntMetaTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntPutMetaTemplateResponse model module.
 * @module model/EntPutMetaTemplateResponse
 * @version 2.0
 */
var EntPutMetaTemplateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntPutMetaTemplateResponse</code>.
   * @alias module:model/EntPutMetaTemplateResponse
   */
  function EntPutMetaTemplateResponse() {
    _classCallCheck(this, EntPutMetaTemplateResponse);

    EntPutMetaTemplateResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntPutMetaTemplateResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntPutMetaTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntPutMetaTemplateResponse} obj Optional instance to populate.
     * @return {module:model/EntPutMetaTemplateResponse} The populated <code>EntPutMetaTemplateResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntPutMetaTemplateResponse();

        if (data.hasOwnProperty('Template')) {
          obj['Template'] = _EntMetaTemplate["default"].constructFromObject(data['Template']);
        }
      }

      return obj;
    }
  }]);

  return EntPutMetaTemplateResponse;
}();
/**
 * @member {module:model/EntMetaTemplate} Template
 */


EntPutMetaTemplateResponse.prototype['Template'] = undefined;
var _default = EntPutMetaTemplateResponse;
exports["default"] = _default;
//# sourceMappingURL=EntPutMetaTemplateResponse.js.map
