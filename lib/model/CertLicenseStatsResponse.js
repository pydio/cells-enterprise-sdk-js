"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CertLicenseInfo = _interopRequireDefault(require("./CertLicenseInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The CertLicenseStatsResponse model module.
* @module model/CertLicenseStatsResponse
* @version 2.0
*/
var CertLicenseStatsResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>CertLicenseStatsResponse</code>.
  * @alias module:model/CertLicenseStatsResponse
  * @class
  */
  function CertLicenseStatsResponse() {
    _classCallCheck(this, CertLicenseStatsResponse);

    _defineProperty(this, "License", undefined);

    _defineProperty(this, "ActiveUsers", undefined);

    _defineProperty(this, "ActivePeers", undefined);
  }
  /**
  * Constructs a <code>CertLicenseStatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/CertLicenseStatsResponse} obj Optional instance to populate.
  * @return {module:model/CertLicenseStatsResponse} The populated <code>CertLicenseStatsResponse</code> instance.
  */


  _createClass(CertLicenseStatsResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CertLicenseStatsResponse();

        if (data.hasOwnProperty('License')) {
          obj['License'] = _CertLicenseInfo["default"].constructFromObject(data['License']);
        }

        if (data.hasOwnProperty('ActiveUsers')) {
          obj['ActiveUsers'] = _ApiClient["default"].convertToType(data['ActiveUsers'], 'String');
        }

        if (data.hasOwnProperty('ActivePeers')) {
          obj['ActivePeers'] = _ApiClient["default"].convertToType(data['ActivePeers'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/CertLicenseInfo} License
    */

  }]);

  return CertLicenseStatsResponse;
}();

exports["default"] = CertLicenseStatsResponse;
//# sourceMappingURL=CertLicenseStatsResponse.js.map
