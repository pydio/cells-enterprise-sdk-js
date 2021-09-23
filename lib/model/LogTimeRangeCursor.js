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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  * @class
  */
  function LogTimeRangeCursor() {
    _classCallCheck(this, LogTimeRangeCursor);

    _defineProperty(this, "Rel", undefined);

    _defineProperty(this, "RefTime", undefined);

    _defineProperty(this, "Count", undefined);
  }
  /**
  * Constructs a <code>LogTimeRangeCursor</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/LogTimeRangeCursor} obj Optional instance to populate.
  * @return {module:model/LogTimeRangeCursor} The populated <code>LogTimeRangeCursor</code> instance.
  */


  _createClass(LogTimeRangeCursor, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LogTimeRangeCursor();

        if (data.hasOwnProperty('Rel')) {
          obj['Rel'] = _LogRelType["default"].constructFromObject(data['Rel']);
        }

        if (data.hasOwnProperty('RefTime')) {
          obj['RefTime'] = _ApiClient["default"].convertToType(data['RefTime'], 'Number');
        }

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/LogRelType} Rel
    */

  }]);

  return LogTimeRangeCursor;
}();

exports["default"] = LogTimeRangeCursor;
//# sourceMappingURL=LogTimeRangeCursor.js.map
