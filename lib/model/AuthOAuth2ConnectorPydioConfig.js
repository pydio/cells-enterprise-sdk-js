"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthOAuth2ConnectorPydioConfigConnector = _interopRequireDefault(require("./AuthOAuth2ConnectorPydioConfigConnector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AuthOAuth2ConnectorPydioConfig model module.
 * @module model/AuthOAuth2ConnectorPydioConfig
 * @version 2.0
 */
var AuthOAuth2ConnectorPydioConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2ConnectorPydioConfig</code>.
   * @alias module:model/AuthOAuth2ConnectorPydioConfig
   */
  function AuthOAuth2ConnectorPydioConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorPydioConfig);

    AuthOAuth2ConnectorPydioConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2ConnectorPydioConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2ConnectorPydioConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorPydioConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorPydioConfig} The populated <code>AuthOAuth2ConnectorPydioConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorPydioConfig();

        if (data.hasOwnProperty('pydioconnectors')) {
          obj['pydioconnectors'] = _ApiClient["default"].convertToType(data['pydioconnectors'], [_AuthOAuth2ConnectorPydioConfigConnector["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2ConnectorPydioConfig;
}();
/**
 * @member {Array.<module:model/AuthOAuth2ConnectorPydioConfigConnector>} pydioconnectors
 */


AuthOAuth2ConnectorPydioConfig.prototype['pydioconnectors'] = undefined;
var _default = AuthOAuth2ConnectorPydioConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2ConnectorPydioConfig.js.map
