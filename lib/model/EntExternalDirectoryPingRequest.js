"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthLdapServerConfig = _interopRequireDefault(require("./AuthLdapServerConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntExternalDirectoryPingRequest model module.
 * @module model/EntExternalDirectoryPingRequest
 * @version 2.0
 */
var EntExternalDirectoryPingRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntExternalDirectoryPingRequest</code>.
   * @alias module:model/EntExternalDirectoryPingRequest
   */
  function EntExternalDirectoryPingRequest() {
    _classCallCheck(this, EntExternalDirectoryPingRequest);

    EntExternalDirectoryPingRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntExternalDirectoryPingRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntExternalDirectoryPingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntExternalDirectoryPingRequest} obj Optional instance to populate.
     * @return {module:model/EntExternalDirectoryPingRequest} The populated <code>EntExternalDirectoryPingRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntExternalDirectoryPingRequest();

        if (data.hasOwnProperty('Bind')) {
          obj['Bind'] = _ApiClient["default"].convertToType(data['Bind'], 'Boolean');
        }

        if (data.hasOwnProperty('Config')) {
          obj['Config'] = _AuthLdapServerConfig["default"].constructFromObject(data['Config']);
        }
      }

      return obj;
    }
  }]);

  return EntExternalDirectoryPingRequest;
}();
/**
 * @member {Boolean} Bind
 */


EntExternalDirectoryPingRequest.prototype['Bind'] = undefined;
/**
 * @member {module:model/AuthLdapServerConfig} Config
 */

EntExternalDirectoryPingRequest.prototype['Config'] = undefined;
var _default = EntExternalDirectoryPingRequest;
exports["default"] = _default;
//# sourceMappingURL=EntExternalDirectoryPingRequest.js.map
