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
 * The CertPutLicenseInfoResponse model module.
 * @module model/CertPutLicenseInfoResponse
 * @version 2.0
 */
var CertPutLicenseInfoResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CertPutLicenseInfoResponse</code>.
   * @alias module:model/CertPutLicenseInfoResponse
   */
  function CertPutLicenseInfoResponse() {
    _classCallCheck(this, CertPutLicenseInfoResponse);

    CertPutLicenseInfoResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CertPutLicenseInfoResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CertPutLicenseInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertPutLicenseInfoResponse} obj Optional instance to populate.
     * @return {module:model/CertPutLicenseInfoResponse} The populated <code>CertPutLicenseInfoResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CertPutLicenseInfoResponse();

        if (data.hasOwnProperty('ErrorInvalid')) {
          obj['ErrorInvalid'] = _ApiClient["default"].convertToType(data['ErrorInvalid'], 'Boolean');
        }

        if (data.hasOwnProperty('ErrorWrite')) {
          obj['ErrorWrite'] = _ApiClient["default"].convertToType(data['ErrorWrite'], 'Boolean');
        }

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CertPutLicenseInfoResponse;
}();
/**
 * @member {Boolean} ErrorInvalid
 */


CertPutLicenseInfoResponse.prototype['ErrorInvalid'] = undefined;
/**
 * @member {Boolean} ErrorWrite
 */

CertPutLicenseInfoResponse.prototype['ErrorWrite'] = undefined;
/**
 * @member {Boolean} Success
 */

CertPutLicenseInfoResponse.prototype['Success'] = undefined;
var _default = CertPutLicenseInfoResponse;
exports["default"] = _default;
//# sourceMappingURL=CertPutLicenseInfoResponse.js.map
