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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The EntExternalDirectoryConfig model module.
* @module model/EntExternalDirectoryConfig
* @version 2.0
*/
var EntExternalDirectoryConfig = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntExternalDirectoryConfig</code>.
  * @alias module:model/EntExternalDirectoryConfig
  * @class
  */
  function EntExternalDirectoryConfig() {
    _classCallCheck(this, EntExternalDirectoryConfig);

    _defineProperty(this, "ConfigId", undefined);

    _defineProperty(this, "Config", undefined);
  }
  /**
  * Constructs a <code>EntExternalDirectoryConfig</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntExternalDirectoryConfig} obj Optional instance to populate.
  * @return {module:model/EntExternalDirectoryConfig} The populated <code>EntExternalDirectoryConfig</code> instance.
  */


  _createClass(EntExternalDirectoryConfig, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntExternalDirectoryConfig();

        if (data.hasOwnProperty('ConfigId')) {
          obj['ConfigId'] = _ApiClient["default"].convertToType(data['ConfigId'], 'String');
        }

        if (data.hasOwnProperty('Config')) {
          obj['Config'] = _AuthLdapServerConfig["default"].constructFromObject(data['Config']);
        }
      }

      return obj;
    }
    /**
    * @member {String} ConfigId
    */

  }]);

  return EntExternalDirectoryConfig;
}();

exports["default"] = EntExternalDirectoryConfig;
//# sourceMappingURL=EntExternalDirectoryConfig.js.map
