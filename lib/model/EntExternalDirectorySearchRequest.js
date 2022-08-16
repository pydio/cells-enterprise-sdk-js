"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthLdapSearchFilter = _interopRequireDefault(require("./AuthLdapSearchFilter"));

var _AuthLdapServerConfig = _interopRequireDefault(require("./AuthLdapServerConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntExternalDirectorySearchRequest model module.
 * @module model/EntExternalDirectorySearchRequest
 * @version 2.0
 */
var EntExternalDirectorySearchRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntExternalDirectorySearchRequest</code>.
   * @alias module:model/EntExternalDirectorySearchRequest
   */
  function EntExternalDirectorySearchRequest() {
    _classCallCheck(this, EntExternalDirectorySearchRequest);

    EntExternalDirectorySearchRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntExternalDirectorySearchRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntExternalDirectorySearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntExternalDirectorySearchRequest} obj Optional instance to populate.
     * @return {module:model/EntExternalDirectorySearchRequest} The populated <code>EntExternalDirectorySearchRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntExternalDirectorySearchRequest();

        if (data.hasOwnProperty('Config')) {
          obj['Config'] = _AuthLdapServerConfig["default"].constructFromObject(data['Config']);
        }

        if (data.hasOwnProperty('Filter')) {
          obj['Filter'] = _AuthLdapSearchFilter["default"].constructFromObject(data['Filter']);
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'Number');
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EntExternalDirectorySearchRequest;
}();
/**
 * @member {module:model/AuthLdapServerConfig} Config
 */


EntExternalDirectorySearchRequest.prototype['Config'] = undefined;
/**
 * @member {module:model/AuthLdapSearchFilter} Filter
 */

EntExternalDirectorySearchRequest.prototype['Filter'] = undefined;
/**
 * @member {Number} Limit
 */

EntExternalDirectorySearchRequest.prototype['Limit'] = undefined;
/**
 * @member {Number} Offset
 */

EntExternalDirectorySearchRequest.prototype['Offset'] = undefined;
var _default = EntExternalDirectorySearchRequest;
exports["default"] = _default;
//# sourceMappingURL=EntExternalDirectorySearchRequest.js.map
