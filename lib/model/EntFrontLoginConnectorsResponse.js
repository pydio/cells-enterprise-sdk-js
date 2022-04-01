"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntConnector = _interopRequireDefault(require("./EntConnector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntFrontLoginConnectorsResponse model module.
 * @module model/EntFrontLoginConnectorsResponse
 * @version 2.0
 */
var EntFrontLoginConnectorsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntFrontLoginConnectorsResponse</code>.
   * @alias module:model/EntFrontLoginConnectorsResponse
   */
  function EntFrontLoginConnectorsResponse() {
    _classCallCheck(this, EntFrontLoginConnectorsResponse);

    EntFrontLoginConnectorsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntFrontLoginConnectorsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntFrontLoginConnectorsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntFrontLoginConnectorsResponse} obj Optional instance to populate.
     * @return {module:model/EntFrontLoginConnectorsResponse} The populated <code>EntFrontLoginConnectorsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntFrontLoginConnectorsResponse();

        if (data.hasOwnProperty('Connectors')) {
          obj['Connectors'] = _ApiClient["default"].convertToType(data['Connectors'], [_EntConnector["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EntFrontLoginConnectorsResponse;
}();
/**
 * @member {Array.<module:model/EntConnector>} Connectors
 */


EntFrontLoginConnectorsResponse.prototype['Connectors'] = undefined;
var _default = EntFrontLoginConnectorsResponse;
exports["default"] = _default;
//# sourceMappingURL=EntFrontLoginConnectorsResponse.js.map
