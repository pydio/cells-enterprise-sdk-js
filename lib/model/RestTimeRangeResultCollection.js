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

/**
 * The RestTimeRangeResultCollection model module.
 * @module model/RestTimeRangeResultCollection
 * @version 2.0
 */
var RestTimeRangeResultCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestTimeRangeResultCollection</code>.
   * @alias module:model/RestTimeRangeResultCollection
   */
  function RestTimeRangeResultCollection() {
    _classCallCheck(this, RestTimeRangeResultCollection);

    RestTimeRangeResultCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestTimeRangeResultCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestTimeRangeResultCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestTimeRangeResultCollection} obj Optional instance to populate.
     * @return {module:model/RestTimeRangeResultCollection} The populated <code>RestTimeRangeResultCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestTimeRangeResultCollection();

        if (data.hasOwnProperty('Links')) {
          obj['Links'] = _ApiClient["default"].convertToType(data['Links'], [_LogTimeRangeCursor["default"]]);
        }

        if (data.hasOwnProperty('Results')) {
          obj['Results'] = _ApiClient["default"].convertToType(data['Results'], [_LogTimeRangeResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RestTimeRangeResultCollection;
}();
/**
 * @member {Array.<module:model/LogTimeRangeCursor>} Links
 */


RestTimeRangeResultCollection.prototype['Links'] = undefined;
/**
 * @member {Array.<module:model/LogTimeRangeResult>} Results
 */

RestTimeRangeResultCollection.prototype['Results'] = undefined;
var _default = RestTimeRangeResultCollection;
exports["default"] = _default;
//# sourceMappingURL=RestTimeRangeResultCollection.js.map
