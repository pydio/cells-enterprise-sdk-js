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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The ReportsSharedResourcesRequest model module.
* @module model/ReportsSharedResourcesRequest
* @version 2.0
*/
var ReportsSharedResourcesRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ReportsSharedResourcesRequest</code>.
  * @alias module:model/ReportsSharedResourcesRequest
  * @class
  */
  function ReportsSharedResourcesRequest() {
    _classCallCheck(this, ReportsSharedResourcesRequest);

    _defineProperty(this, "RootPath", undefined);

    _defineProperty(this, "ShareType", undefined);

    _defineProperty(this, "OwnerUUID", undefined);

    _defineProperty(this, "UsersReadCountMin", undefined);

    _defineProperty(this, "UsersReadCountMax", undefined);

    _defineProperty(this, "LastUpdatedBefore", undefined);

    _defineProperty(this, "LastUpdatedSince", undefined);

    _defineProperty(this, "RolesReadUUIDs", undefined);

    _defineProperty(this, "RolesReadAND", undefined);

    _defineProperty(this, "NodeType", undefined);

    _defineProperty(this, "NodeSizeMin", undefined);

    _defineProperty(this, "Offset", undefined);

    _defineProperty(this, "Limit", undefined);
  }
  /**
  * Constructs a <code>ReportsSharedResourcesRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ReportsSharedResourcesRequest} obj Optional instance to populate.
  * @return {module:model/ReportsSharedResourcesRequest} The populated <code>ReportsSharedResourcesRequest</code> instance.
  */


  _createClass(ReportsSharedResourcesRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportsSharedResourcesRequest();

        if (data.hasOwnProperty('RootPath')) {
          obj['RootPath'] = _ApiClient["default"].convertToType(data['RootPath'], 'String');
        }

        if (data.hasOwnProperty('ShareType')) {
          obj['ShareType'] = _ReportsSharedResourceShareType["default"].constructFromObject(data['ShareType']);
        }

        if (data.hasOwnProperty('OwnerUUID')) {
          obj['OwnerUUID'] = _ApiClient["default"].convertToType(data['OwnerUUID'], 'String');
        }

        if (data.hasOwnProperty('UsersReadCountMin')) {
          obj['UsersReadCountMin'] = _ApiClient["default"].convertToType(data['UsersReadCountMin'], 'Number');
        }

        if (data.hasOwnProperty('UsersReadCountMax')) {
          obj['UsersReadCountMax'] = _ApiClient["default"].convertToType(data['UsersReadCountMax'], 'Number');
        }

        if (data.hasOwnProperty('LastUpdatedBefore')) {
          obj['LastUpdatedBefore'] = _ApiClient["default"].convertToType(data['LastUpdatedBefore'], 'Number');
        }

        if (data.hasOwnProperty('LastUpdatedSince')) {
          obj['LastUpdatedSince'] = _ApiClient["default"].convertToType(data['LastUpdatedSince'], 'Number');
        }

        if (data.hasOwnProperty('RolesReadUUIDs')) {
          obj['RolesReadUUIDs'] = _ApiClient["default"].convertToType(data['RolesReadUUIDs'], ['String']);
        }

        if (data.hasOwnProperty('RolesReadAND')) {
          obj['RolesReadAND'] = _ApiClient["default"].convertToType(data['RolesReadAND'], 'Boolean');
        }

        if (data.hasOwnProperty('NodeType')) {
          obj['NodeType'] = _TreeNodeType["default"].constructFromObject(data['NodeType']);
        }

        if (data.hasOwnProperty('NodeSizeMin')) {
          obj['NodeSizeMin'] = _ApiClient["default"].convertToType(data['NodeSizeMin'], 'Number');
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'Number');
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {String} RootPath
    */

  }]);

  return ReportsSharedResourcesRequest;
}();

exports["default"] = ReportsSharedResourcesRequest;
//# sourceMappingURL=ReportsSharedResourcesRequest.js.map
