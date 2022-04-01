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
 * The LogTimeRangeResult model module.
 * @module model/LogTimeRangeResult
 * @version 2.0
 */
var LogTimeRangeResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LogTimeRangeResult</code>.
   * TimeRangeResult represents one point of a graph.
   * @alias module:model/LogTimeRangeResult
   */
  function LogTimeRangeResult() {
    _classCallCheck(this, LogTimeRangeResult);

    LogTimeRangeResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LogTimeRangeResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LogTimeRangeResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogTimeRangeResult} obj Optional instance to populate.
     * @return {module:model/LogTimeRangeResult} The populated <code>LogTimeRangeResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LogTimeRangeResult();

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('End')) {
          obj['End'] = _ApiClient["default"].convertToType(data['End'], 'Number');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Relevance')) {
          obj['Relevance'] = _ApiClient["default"].convertToType(data['Relevance'], 'Number');
        }

        if (data.hasOwnProperty('Start')) {
          obj['Start'] = _ApiClient["default"].convertToType(data['Start'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LogTimeRangeResult;
}();
/**
 * @member {Number} Count
 */


LogTimeRangeResult.prototype['Count'] = undefined;
/**
 * @member {Number} End
 */

LogTimeRangeResult.prototype['End'] = undefined;
/**
 * @member {String} Name
 */

LogTimeRangeResult.prototype['Name'] = undefined;
/**
 * @member {Number} Relevance
 */

LogTimeRangeResult.prototype['Relevance'] = undefined;
/**
 * @member {Number} Start
 */

LogTimeRangeResult.prototype['Start'] = undefined;
var _default = LogTimeRangeResult;
exports["default"] = _default;
//# sourceMappingURL=LogTimeRangeResult.js.map
