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
 * The AuthOAuth2ConnectorMockConfig model module.
 * @module model/AuthOAuth2ConnectorMockConfig
 * @version 2.0
 */
var AuthOAuth2ConnectorMockConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2ConnectorMockConfig</code>.
   * @alias module:model/AuthOAuth2ConnectorMockConfig
   */
  function AuthOAuth2ConnectorMockConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorMockConfig);

    AuthOAuth2ConnectorMockConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2ConnectorMockConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2ConnectorMockConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorMockConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorMockConfig} The populated <code>AuthOAuth2ConnectorMockConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorMockConfig();

        if (data.hasOwnProperty('jsonIdentity')) {
          obj['jsonIdentity'] = _ApiClient["default"].convertToType(data['jsonIdentity'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2ConnectorMockConfig;
}();
/**
 * @member {String} jsonIdentity
 */


AuthOAuth2ConnectorMockConfig.prototype['jsonIdentity'] = undefined;
var _default = AuthOAuth2ConnectorMockConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2ConnectorMockConfig.js.map
