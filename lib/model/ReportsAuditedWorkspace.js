"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmRole = _interopRequireDefault(require("./IdmRole"));

var _IdmUser = _interopRequireDefault(require("./IdmUser"));

var _IdmWorkspace = _interopRequireDefault(require("./IdmWorkspace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The ReportsAuditedWorkspace model module.
* @module model/ReportsAuditedWorkspace
* @version 2.0
*/
var ReportsAuditedWorkspace = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ReportsAuditedWorkspace</code>.
  * @alias module:model/ReportsAuditedWorkspace
  * @class
  */
  function ReportsAuditedWorkspace() {
    _classCallCheck(this, ReportsAuditedWorkspace);

    _defineProperty(this, "Workspace", undefined);

    _defineProperty(this, "UsersReadCount", undefined);

    _defineProperty(this, "UsersWriteCount", undefined);

    _defineProperty(this, "OwnerUser", undefined);

    _defineProperty(this, "RolesRead", undefined);

    _defineProperty(this, "RolesWrite", undefined);

    _defineProperty(this, "BrokenLink", undefined);
  }
  /**
  * Constructs a <code>ReportsAuditedWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ReportsAuditedWorkspace} obj Optional instance to populate.
  * @return {module:model/ReportsAuditedWorkspace} The populated <code>ReportsAuditedWorkspace</code> instance.
  */


  _createClass(ReportsAuditedWorkspace, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportsAuditedWorkspace();

        if (data.hasOwnProperty('Workspace')) {
          obj['Workspace'] = _IdmWorkspace["default"].constructFromObject(data['Workspace']);
        }

        if (data.hasOwnProperty('UsersReadCount')) {
          obj['UsersReadCount'] = _ApiClient["default"].convertToType(data['UsersReadCount'], 'Number');
        }

        if (data.hasOwnProperty('UsersWriteCount')) {
          obj['UsersWriteCount'] = _ApiClient["default"].convertToType(data['UsersWriteCount'], 'Number');
        }

        if (data.hasOwnProperty('OwnerUser')) {
          obj['OwnerUser'] = _IdmUser["default"].constructFromObject(data['OwnerUser']);
        }

        if (data.hasOwnProperty('RolesRead')) {
          obj['RolesRead'] = _ApiClient["default"].convertToType(data['RolesRead'], [_IdmRole["default"]]);
        }

        if (data.hasOwnProperty('RolesWrite')) {
          obj['RolesWrite'] = _ApiClient["default"].convertToType(data['RolesWrite'], [_IdmRole["default"]]);
        }

        if (data.hasOwnProperty('BrokenLink')) {
          obj['BrokenLink'] = _ApiClient["default"].convertToType(data['BrokenLink'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/IdmWorkspace} Workspace
    */

  }]);

  return ReportsAuditedWorkspace;
}();

exports["default"] = ReportsAuditedWorkspace;
//# sourceMappingURL=ReportsAuditedWorkspace.js.map
