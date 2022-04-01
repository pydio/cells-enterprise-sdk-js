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
 * The JobsPutJobResponse model module.
 * @module model/JobsPutJobResponse
 * @version 2.0
 */
var JobsPutJobResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsPutJobResponse</code>.
   * @alias module:model/JobsPutJobResponse
   */
  function JobsPutJobResponse() {
    _classCallCheck(this, JobsPutJobResponse);

    JobsPutJobResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsPutJobResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsPutJobResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsPutJobResponse} obj Optional instance to populate.
     * @return {module:model/JobsPutJobResponse} The populated <code>JobsPutJobResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsPutJobResponse();

        if (data.hasOwnProperty('Job')) {
          obj['Job'] = _JobsJob["default"].constructFromObject(data['Job']);
        }
      }

      return obj;
    }
  }]);

  return JobsPutJobResponse;
}();
/**
 * @member {module:model/JobsJob} Job
 */


JobsPutJobResponse.prototype['Job'] = undefined;
var _default = JobsPutJobResponse;
exports["default"] = _default;
//# sourceMappingURL=JobsPutJobResponse.js.map
