"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceResourcePolicy = _interopRequireDefault(require("./ServiceResourcePolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntCreateNodeTemplateRequest model module.
 * @module model/EntCreateNodeTemplateRequest
 * @version 2.0
 */
var EntCreateNodeTemplateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntCreateNodeTemplateRequest</code>.
   * @alias module:model/EntCreateNodeTemplateRequest
   */
  function EntCreateNodeTemplateRequest() {
    _classCallCheck(this, EntCreateNodeTemplateRequest);

    EntCreateNodeTemplateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntCreateNodeTemplateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntCreateNodeTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntCreateNodeTemplateRequest} obj Optional instance to populate.
     * @return {module:model/EntCreateNodeTemplateRequest} The populated <code>EntCreateNodeTemplateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntCreateNodeTemplateRequest();

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('RefNodeUuid')) {
          obj['RefNodeUuid'] = _ApiClient["default"].convertToType(data['RefNodeUuid'], 'String');
        }

        if (data.hasOwnProperty('TplLabel')) {
          obj['TplLabel'] = _ApiClient["default"].convertToType(data['TplLabel'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntCreateNodeTemplateRequest;
}();
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */


EntCreateNodeTemplateRequest.prototype['Policies'] = undefined;
/**
 * @member {String} RefNodeUuid
 */

EntCreateNodeTemplateRequest.prototype['RefNodeUuid'] = undefined;
/**
 * @member {String} TplLabel
 */

EntCreateNodeTemplateRequest.prototype['TplLabel'] = undefined;
var _default = EntCreateNodeTemplateRequest;
exports["default"] = _default;
//# sourceMappingURL=EntCreateNodeTemplateRequest.js.map
