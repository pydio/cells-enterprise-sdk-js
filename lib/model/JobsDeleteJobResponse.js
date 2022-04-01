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
 * The JobsDeleteJobResponse model module.
 * @module model/JobsDeleteJobResponse
 * @version 2.0
 */
var JobsDeleteJobResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsDeleteJobResponse</code>.
   * @alias module:model/JobsDeleteJobResponse
   */
  function JobsDeleteJobResponse() {
    _classCallCheck(this, JobsDeleteJobResponse);

    JobsDeleteJobResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsDeleteJobResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsDeleteJobResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsDeleteJobResponse} obj Optional instance to populate.
     * @return {module:model/JobsDeleteJobResponse} The populated <code>JobsDeleteJobResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsDeleteJobResponse();

        if (data.hasOwnProperty('DeleteCount')) {
          obj['DeleteCount'] = _ApiClient["default"].convertToType(data['DeleteCount'], 'Number');
        }

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return JobsDeleteJobResponse;
}();
/**
 * @member {Number} DeleteCount
 */


JobsDeleteJobResponse.prototype['DeleteCount'] = undefined;
/**
 * @member {Boolean} Success
 */

JobsDeleteJobResponse.prototype['Success'] = undefined;
var _default = JobsDeleteJobResponse;
exports["default"] = _default;
//# sourceMappingURL=JobsDeleteJobResponse.js.map
