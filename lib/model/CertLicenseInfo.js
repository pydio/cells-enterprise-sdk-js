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
* The CertLicenseInfo model module.
* @module model/CertLicenseInfo
* @version 2.0
*/
var CertLicenseInfo = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>CertLicenseInfo</code>.
  * @alias module:model/CertLicenseInfo
  * @class
  */
  function CertLicenseInfo() {
    _classCallCheck(this, CertLicenseInfo);

    _defineProperty(this, "Id", undefined);

    _defineProperty(this, "AccountName", undefined);

    _defineProperty(this, "ServerDomain", undefined);

    _defineProperty(this, "IssueTime", undefined);

    _defineProperty(this, "ExpireTime", undefined);

    _defineProperty(this, "MaxUsers", undefined);

    _defineProperty(this, "MaxPeers", undefined);

    _defineProperty(this, "Features", undefined);
  }
  /**
  * Constructs a <code>CertLicenseInfo</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/CertLicenseInfo} obj Optional instance to populate.
  * @return {module:model/CertLicenseInfo} The populated <code>CertLicenseInfo</code> instance.
  */


  _createClass(CertLicenseInfo, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CertLicenseInfo();

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('AccountName')) {
          obj['AccountName'] = _ApiClient["default"].convertToType(data['AccountName'], 'String');
        }

        if (data.hasOwnProperty('ServerDomain')) {
          obj['ServerDomain'] = _ApiClient["default"].convertToType(data['ServerDomain'], 'String');
        }

        if (data.hasOwnProperty('IssueTime')) {
          obj['IssueTime'] = _ApiClient["default"].convertToType(data['IssueTime'], 'Number');
        }

        if (data.hasOwnProperty('ExpireTime')) {
          obj['ExpireTime'] = _ApiClient["default"].convertToType(data['ExpireTime'], 'Number');
        }

        if (data.hasOwnProperty('MaxUsers')) {
          obj['MaxUsers'] = _ApiClient["default"].convertToType(data['MaxUsers'], 'String');
        }

        if (data.hasOwnProperty('MaxPeers')) {
          obj['MaxPeers'] = _ApiClient["default"].convertToType(data['MaxPeers'], 'String');
        }

        if (data.hasOwnProperty('Features')) {
          obj['Features'] = _ApiClient["default"].convertToType(data['Features'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
    /**
    * @member {String} Id
    */

  }]);

  return CertLicenseInfo;
}();

exports["default"] = CertLicenseInfo;
//# sourceMappingURL=CertLicenseInfo.js.map
