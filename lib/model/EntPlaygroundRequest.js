"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsActionMessage = _interopRequireDefault(require("./JobsActionMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntPlaygroundRequest model module.
 * @module model/EntPlaygroundRequest
 * @version 2.0
 */
var EntPlaygroundRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntPlaygroundRequest</code>.
   * @alias module:model/EntPlaygroundRequest
   */
  function EntPlaygroundRequest() {
    _classCallCheck(this, EntPlaygroundRequest);

    EntPlaygroundRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntPlaygroundRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntPlaygroundRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntPlaygroundRequest} obj Optional instance to populate.
     * @return {module:model/EntPlaygroundRequest} The populated <code>EntPlaygroundRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntPlaygroundRequest();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ApiClient["default"].convertToType(data['Code'], 'String');
        }

        if (data.hasOwnProperty('Input')) {
          obj['Input'] = _JobsActionMessage["default"].constructFromObject(data['Input']);
        }

        if (data.hasOwnProperty('LastOutputJsonBody')) {
          obj['LastOutputJsonBody'] = _ApiClient["default"].convertToType(data['LastOutputJsonBody'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntPlaygroundRequest;
}();
/**
 * @member {String} Code
 */


EntPlaygroundRequest.prototype['Code'] = undefined;
/**
 * @member {module:model/JobsActionMessage} Input
 */

EntPlaygroundRequest.prototype['Input'] = undefined;
/**
 * @member {String} LastOutputJsonBody
 */

EntPlaygroundRequest.prototype['LastOutputJsonBody'] = undefined;
var _default = EntPlaygroundRequest;
exports["default"] = _default;
//# sourceMappingURL=EntPlaygroundRequest.js.map
