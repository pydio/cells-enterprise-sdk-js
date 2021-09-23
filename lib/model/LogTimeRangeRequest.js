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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The LogTimeRangeRequest model module.
* @module model/LogTimeRangeRequest
* @version 2.0
*/
var LogTimeRangeRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>LogTimeRangeRequest</code>.
  * TimeRangeRequest contains the parameter to configure the query to  retrieve the number of audit events of this type for a given time range defined by last timestamp and a range type.
  * @alias module:model/LogTimeRangeRequest
  * @class
  */
  function LogTimeRangeRequest() {
    _classCallCheck(this, LogTimeRangeRequest);

    _defineProperty(this, "MsgId", undefined);

    _defineProperty(this, "TimeRangeType", undefined);

    _defineProperty(this, "RefTime", undefined);
  }
  /**
  * Constructs a <code>LogTimeRangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/LogTimeRangeRequest} obj Optional instance to populate.
  * @return {module:model/LogTimeRangeRequest} The populated <code>LogTimeRangeRequest</code> instance.
  */


  _createClass(LogTimeRangeRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LogTimeRangeRequest();

        if (data.hasOwnProperty('MsgId')) {
          obj['MsgId'] = _ApiClient["default"].convertToType(data['MsgId'], 'String');
        }

        if (data.hasOwnProperty('TimeRangeType')) {
          obj['TimeRangeType'] = _ApiClient["default"].convertToType(data['TimeRangeType'], 'String');
        }

        if (data.hasOwnProperty('RefTime')) {
          obj['RefTime'] = _ApiClient["default"].convertToType(data['RefTime'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {String} MsgId
    */

  }]);

  return LogTimeRangeRequest;
}();

exports["default"] = LogTimeRangeRequest;
//# sourceMappingURL=LogTimeRangeRequest.js.map
