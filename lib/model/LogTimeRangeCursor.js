"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LogRelType = _interopRequireDefault(require("./LogRelType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LogTimeRangeCursor model module.
 * @module model/LogTimeRangeCursor
 * @version 2.0
 */
var LogTimeRangeCursor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LogTimeRangeCursor</code>.
   * Ease implementation of data navigation for a chart.
   * @alias module:model/LogTimeRangeCursor
   */
  function LogTimeRangeCursor() {
    _classCallCheck(this, LogTimeRangeCursor);

    LogTimeRangeCursor.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LogTimeRangeCursor, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LogTimeRangeCursor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogTimeRangeCursor} obj Optional instance to populate.
     * @return {module:model/LogTimeRangeCursor} The populated <code>LogTimeRangeCursor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LogTimeRangeCursor();

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('RefTime')) {
          obj['RefTime'] = _ApiClient["default"].convertToType(data['RefTime'], 'Number');
        }

        if (data.hasOwnProperty('Rel')) {
          obj['Rel'] = _LogRelType["default"].constructFromObject(data['Rel']);
        }
      }

      return obj;
    }
  }]);

  return LogTimeRangeCursor;
}();
/**
 * @member {Number} Count
 */


LogTimeRangeCursor.prototype['Count'] = undefined;
/**
 * @member {Number} RefTime
 */

LogTimeRangeCursor.prototype['RefTime'] = undefined;
/**
 * @member {module:model/LogRelType} Rel
 */

LogTimeRangeCursor.prototype['Rel'] = undefined;
var _default = LogTimeRangeCursor;
exports["default"] = _default;
//# sourceMappingURL=LogTimeRangeCursor.js.map
