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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The JobsPutJobResponse model module.
* @module model/JobsPutJobResponse
* @version 2.0
*/
var JobsPutJobResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsPutJobResponse</code>.
  * @alias module:model/JobsPutJobResponse
  * @class
  */
  function JobsPutJobResponse() {
    _classCallCheck(this, JobsPutJobResponse);

    _defineProperty(this, "Job", undefined);
  }
  /**
  * Constructs a <code>JobsPutJobResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsPutJobResponse} obj Optional instance to populate.
  * @return {module:model/JobsPutJobResponse} The populated <code>JobsPutJobResponse</code> instance.
  */


  _createClass(JobsPutJobResponse, null, [{
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
    /**
    * @member {module:model/JobsJob} Job
    */

  }]);

  return JobsPutJobResponse;
}();

exports["default"] = JobsPutJobResponse;
//# sourceMappingURL=JobsPutJobResponse.js.map
