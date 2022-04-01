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
 * The EntMetaTemplate model module.
 * @module model/EntMetaTemplate
 * @version 2.0
 */
var EntMetaTemplate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntMetaTemplate</code>.
   * @alias module:model/EntMetaTemplate
   */
  function EntMetaTemplate() {
    _classCallCheck(this, EntMetaTemplate);

    EntMetaTemplate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntMetaTemplate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntMetaTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntMetaTemplate} obj Optional instance to populate.
     * @return {module:model/EntMetaTemplate} The populated <code>EntMetaTemplate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntMetaTemplate();

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Meta')) {
          obj['Meta'] = _ApiClient["default"].convertToType(data['Meta'], 'String');
        }

        if (data.hasOwnProperty('Namespace')) {
          obj['Namespace'] = _ApiClient["default"].convertToType(data['Namespace'], 'String');
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntMetaTemplate;
}();
/**
 * @member {String} Label
 */


EntMetaTemplate.prototype['Label'] = undefined;
/**
 * @member {String} Meta
 */

EntMetaTemplate.prototype['Meta'] = undefined;
/**
 * @member {String} Namespace
 */

EntMetaTemplate.prototype['Namespace'] = undefined;
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */

EntMetaTemplate.prototype['Policies'] = undefined;
/**
 * @member {String} Uuid
 */

EntMetaTemplate.prototype['Uuid'] = undefined;
var _default = EntMetaTemplate;
exports["default"] = _default;
//# sourceMappingURL=EntMetaTemplate.js.map
