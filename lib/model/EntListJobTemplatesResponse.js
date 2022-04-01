"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsJob = _interopRequireDefault(require("./JobsJob"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntListJobTemplatesResponse model module.
 * @module model/EntListJobTemplatesResponse
 * @version 2.0
 */
var EntListJobTemplatesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntListJobTemplatesResponse</code>.
   * @alias module:model/EntListJobTemplatesResponse
   */
  function EntListJobTemplatesResponse() {
    _classCallCheck(this, EntListJobTemplatesResponse);

    EntListJobTemplatesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntListJobTemplatesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntListJobTemplatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntListJobTemplatesResponse} obj Optional instance to populate.
     * @return {module:model/EntListJobTemplatesResponse} The populated <code>EntListJobTemplatesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntListJobTemplatesResponse();

        if (data.hasOwnProperty('Jobs')) {
          obj['Jobs'] = _ApiClient["default"].convertToType(data['Jobs'], [_JobsJob["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EntListJobTemplatesResponse;
}();
/**
 * @member {Array.<module:model/JobsJob>} Jobs
 */


EntListJobTemplatesResponse.prototype['Jobs'] = undefined;
var _default = EntListJobTemplatesResponse;
exports["default"] = _default;
//# sourceMappingURL=EntListJobTemplatesResponse.js.map
