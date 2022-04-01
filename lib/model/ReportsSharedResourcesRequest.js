"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportsSharedResourceShareType = _interopRequireDefault(require("./ReportsSharedResourceShareType"));

var _TreeNodeType = _interopRequireDefault(require("./TreeNodeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReportsSharedResourcesRequest model module.
 * @module model/ReportsSharedResourcesRequest
 * @version 2.0
 */
var ReportsSharedResourcesRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportsSharedResourcesRequest</code>.
   * @alias module:model/ReportsSharedResourcesRequest
   */
  function ReportsSharedResourcesRequest() {
    _classCallCheck(this, ReportsSharedResourcesRequest);

    ReportsSharedResourcesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportsSharedResourcesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportsSharedResourcesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportsSharedResourcesRequest} obj Optional instance to populate.
     * @return {module:model/ReportsSharedResourcesRequest} The populated <code>ReportsSharedResourcesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportsSharedResourcesRequest();

        if (data.hasOwnProperty('LastUpdatedBefore')) {
          obj['LastUpdatedBefore'] = _ApiClient["default"].convertToType(data['LastUpdatedBefore'], 'Number');
        }

        if (data.hasOwnProperty('LastUpdatedSince')) {
          obj['LastUpdatedSince'] = _ApiClient["default"].convertToType(data['LastUpdatedSince'], 'Number');
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'Number');
        }

        if (data.hasOwnProperty('NodeSizeMin')) {
          obj['NodeSizeMin'] = _ApiClient["default"].convertToType(data['NodeSizeMin'], 'Number');
        }

        if (data.hasOwnProperty('NodeType')) {
          obj['NodeType'] = _TreeNodeType["default"].constructFromObject(data['NodeType']);
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'Number');
        }

        if (data.hasOwnProperty('OwnerUUID')) {
          obj['OwnerUUID'] = _ApiClient["default"].convertToType(data['OwnerUUID'], 'String');
        }

        if (data.hasOwnProperty('RolesReadAND')) {
          obj['RolesReadAND'] = _ApiClient["default"].convertToType(data['RolesReadAND'], 'Boolean');
        }

        if (data.hasOwnProperty('RolesReadUUIDs')) {
          obj['RolesReadUUIDs'] = _ApiClient["default"].convertToType(data['RolesReadUUIDs'], ['String']);
        }

        if (data.hasOwnProperty('RootPath')) {
          obj['RootPath'] = _ApiClient["default"].convertToType(data['RootPath'], 'String');
        }

        if (data.hasOwnProperty('ShareType')) {
          obj['ShareType'] = _ReportsSharedResourceShareType["default"].constructFromObject(data['ShareType']);
        }

        if (data.hasOwnProperty('UsersReadCountMax')) {
          obj['UsersReadCountMax'] = _ApiClient["default"].convertToType(data['UsersReadCountMax'], 'Number');
        }

        if (data.hasOwnProperty('UsersReadCountMin')) {
          obj['UsersReadCountMin'] = _ApiClient["default"].convertToType(data['UsersReadCountMin'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ReportsSharedResourcesRequest;
}();
/**
 * @member {Number} LastUpdatedBefore
 */


ReportsSharedResourcesRequest.prototype['LastUpdatedBefore'] = undefined;
/**
 * @member {Number} LastUpdatedSince
 */

ReportsSharedResourcesRequest.prototype['LastUpdatedSince'] = undefined;
/**
 * @member {Number} Limit
 */

ReportsSharedResourcesRequest.prototype['Limit'] = undefined;
/**
 * @member {Number} NodeSizeMin
 */

ReportsSharedResourcesRequest.prototype['NodeSizeMin'] = undefined;
/**
 * @member {module:model/TreeNodeType} NodeType
 */

ReportsSharedResourcesRequest.prototype['NodeType'] = undefined;
/**
 * @member {Number} Offset
 */

ReportsSharedResourcesRequest.prototype['Offset'] = undefined;
/**
 * @member {String} OwnerUUID
 */

ReportsSharedResourcesRequest.prototype['OwnerUUID'] = undefined;
/**
 * @member {Boolean} RolesReadAND
 */

ReportsSharedResourcesRequest.prototype['RolesReadAND'] = undefined;
/**
 * @member {Array.<String>} RolesReadUUIDs
 */

ReportsSharedResourcesRequest.prototype['RolesReadUUIDs'] = undefined;
/**
 * @member {String} RootPath
 */

ReportsSharedResourcesRequest.prototype['RootPath'] = undefined;
/**
 * @member {module:model/ReportsSharedResourceShareType} ShareType
 */

ReportsSharedResourcesRequest.prototype['ShareType'] = undefined;
/**
 * @member {Number} UsersReadCountMax
 */

ReportsSharedResourcesRequest.prototype['UsersReadCountMax'] = undefined;
/**
 * @member {Number} UsersReadCountMin
 */

ReportsSharedResourcesRequest.prototype['UsersReadCountMin'] = undefined;
var _default = ReportsSharedResourcesRequest;
exports["default"] = _default;
//# sourceMappingURL=ReportsSharedResourcesRequest.js.map
