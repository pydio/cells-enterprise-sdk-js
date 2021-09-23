"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LogTimeRangeCursor = _interopRequireDefault(require("./LogTimeRangeCursor"));

var _LogTimeRangeResult = _interopRequireDefault(require("./LogTimeRangeResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestTimeRangeResultCollection model module.
* @module model/RestTimeRangeResultCollection
* @version 2.0
*/
var RestTimeRangeResultCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestTimeRangeResultCollection</code>.
  * @alias module:model/RestTimeRangeResultCollection
  * @class
  */
  function RestTimeRangeResultCollection() {
    _classCallCheck(this, RestTimeRangeResultCollection);

    _defineProperty(this, "Results", undefined);

    _defineProperty(this, "Links", undefined);
  }
  /**
  * Constructs a <code>RestTimeRangeResultCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestTimeRangeResultCollection} obj Optional instance to populate.
  * @return {module:model/RestTimeRangeResultCollection} The populated <code>RestTimeRangeResultCollection</code> instance.
  */


  _createClass(RestTimeRangeResultCollection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestTimeRangeResultCollection();

        if (data.hasOwnProperty('Results')) {
          obj['Results'] = _ApiClient["default"].convertToType(data['Results'], [_LogTimeRangeResult["default"]]);
        }

        if (data.hasOwnProperty('Links')) {
          obj['Links'] = _ApiClient["default"].convertToType(data['Links'], [_LogTimeRangeCursor["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/LogTimeRangeResult>} Results
    */

  }]);

  return RestTimeRangeResultCollection;
}();

exports["default"] = RestTimeRangeResultCollection;
//# sourceMappingURL=RestTimeRangeResultCollection.js.map
