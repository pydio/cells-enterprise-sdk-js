"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeVersioningKeepPeriod = _interopRequireDefault(require("./TreeVersioningKeepPeriod"));

var _TreeVersioningNodeDeletedStrategy = _interopRequireDefault(require("./TreeVersioningNodeDeletedStrategy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 2.0
 */
var InlineObject2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject2</code>.
   * @alias module:model/InlineObject2
   */
  function InlineObject2() {
    _classCallCheck(this, InlineObject2);

    InlineObject2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject2} obj Optional instance to populate.
     * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject2();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('IgnoreFilesGreaterThan')) {
          obj['IgnoreFilesGreaterThan'] = _ApiClient["default"].convertToType(data['IgnoreFilesGreaterThan'], 'String');
        }

        if (data.hasOwnProperty('KeepPeriods')) {
          obj['KeepPeriods'] = _ApiClient["default"].convertToType(data['KeepPeriods'], [_TreeVersioningKeepPeriod["default"]]);
        }

        if (data.hasOwnProperty('MaxSizePerFile')) {
          obj['MaxSizePerFile'] = _ApiClient["default"].convertToType(data['MaxSizePerFile'], 'String');
        }

        if (data.hasOwnProperty('MaxTotalSize')) {
          obj['MaxTotalSize'] = _ApiClient["default"].convertToType(data['MaxTotalSize'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('NodeDeletedStrategy')) {
          obj['NodeDeletedStrategy'] = _TreeVersioningNodeDeletedStrategy["default"].constructFromObject(data['NodeDeletedStrategy']);
        }

        if (data.hasOwnProperty('VersionsDataSourceBucket')) {
          obj['VersionsDataSourceBucket'] = _ApiClient["default"].convertToType(data['VersionsDataSourceBucket'], 'String');
        }

        if (data.hasOwnProperty('VersionsDataSourceName')) {
          obj['VersionsDataSourceName'] = _ApiClient["default"].convertToType(data['VersionsDataSourceName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject2;
}();
/**
 * @member {String} Description
 */


InlineObject2.prototype['Description'] = undefined;
/**
 * @member {String} IgnoreFilesGreaterThan
 */

InlineObject2.prototype['IgnoreFilesGreaterThan'] = undefined;
/**
 * @member {Array.<module:model/TreeVersioningKeepPeriod>} KeepPeriods
 */

InlineObject2.prototype['KeepPeriods'] = undefined;
/**
 * @member {String} MaxSizePerFile
 */

InlineObject2.prototype['MaxSizePerFile'] = undefined;
/**
 * @member {String} MaxTotalSize
 */

InlineObject2.prototype['MaxTotalSize'] = undefined;
/**
 * @member {String} Name
 */

InlineObject2.prototype['Name'] = undefined;
/**
 * @member {module:model/TreeVersioningNodeDeletedStrategy} NodeDeletedStrategy
 */

InlineObject2.prototype['NodeDeletedStrategy'] = undefined;
/**
 * @member {String} VersionsDataSourceBucket
 */

InlineObject2.prototype['VersionsDataSourceBucket'] = undefined;
/**
 * @member {String} VersionsDataSourceName
 */

InlineObject2.prototype['VersionsDataSourceName'] = undefined;
var _default = InlineObject2;
exports["default"] = _default;
//# sourceMappingURL=InlineObject2.js.map
