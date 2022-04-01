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
 * The CertLicenseInfo model module.
 * @module model/CertLicenseInfo
 * @version 2.0
 */
var CertLicenseInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CertLicenseInfo</code>.
   * @alias module:model/CertLicenseInfo
   */
  function CertLicenseInfo() {
    _classCallCheck(this, CertLicenseInfo);

    CertLicenseInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CertLicenseInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CertLicenseInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertLicenseInfo} obj Optional instance to populate.
     * @return {module:model/CertLicenseInfo} The populated <code>CertLicenseInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CertLicenseInfo();

        if (data.hasOwnProperty('AccountName')) {
          obj['AccountName'] = _ApiClient["default"].convertToType(data['AccountName'], 'String');
        }

        if (data.hasOwnProperty('ExpireTime')) {
          obj['ExpireTime'] = _ApiClient["default"].convertToType(data['ExpireTime'], 'Number');
        }

        if (data.hasOwnProperty('Features')) {
          obj['Features'] = _ApiClient["default"].convertToType(data['Features'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('IssueTime')) {
          obj['IssueTime'] = _ApiClient["default"].convertToType(data['IssueTime'], 'Number');
        }

        if (data.hasOwnProperty('MaxPeers')) {
          obj['MaxPeers'] = _ApiClient["default"].convertToType(data['MaxPeers'], 'String');
        }

        if (data.hasOwnProperty('MaxUsers')) {
          obj['MaxUsers'] = _ApiClient["default"].convertToType(data['MaxUsers'], 'String');
        }

        if (data.hasOwnProperty('ServerDomain')) {
          obj['ServerDomain'] = _ApiClient["default"].convertToType(data['ServerDomain'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CertLicenseInfo;
}();
/**
 * @member {String} AccountName
 */


CertLicenseInfo.prototype['AccountName'] = undefined;
/**
 * @member {Number} ExpireTime
 */

CertLicenseInfo.prototype['ExpireTime'] = undefined;
/**
 * @member {Object.<String, String>} Features
 */

CertLicenseInfo.prototype['Features'] = undefined;
/**
 * @member {String} Id
 */

CertLicenseInfo.prototype['Id'] = undefined;
/**
 * @member {Number} IssueTime
 */

CertLicenseInfo.prototype['IssueTime'] = undefined;
/**
 * @member {String} MaxPeers
 */

CertLicenseInfo.prototype['MaxPeers'] = undefined;
/**
 * @member {String} MaxUsers
 */

CertLicenseInfo.prototype['MaxUsers'] = undefined;
/**
 * @member {String} ServerDomain
 */

CertLicenseInfo.prototype['ServerDomain'] = undefined;
var _default = CertLicenseInfo;
exports["default"] = _default;
//# sourceMappingURL=CertLicenseInfo.js.map
