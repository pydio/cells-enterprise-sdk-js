"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsAction = _interopRequireDefault(require("./JobsAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntActionTemplate model module.
 * @module model/EntActionTemplate
 * @version 2.0
 */
var EntActionTemplate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntActionTemplate</code>.
   * @alias module:model/EntActionTemplate
   */
  function EntActionTemplate() {
    _classCallCheck(this, EntActionTemplate);

    EntActionTemplate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntActionTemplate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntActionTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntActionTemplate} obj Optional instance to populate.
     * @return {module:model/EntActionTemplate} The populated <code>EntActionTemplate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntActionTemplate();

        if (data.hasOwnProperty('Action')) {
          obj['Action'] = _JobsAction["default"].constructFromObject(data['Action']);
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntActionTemplate;
}();
/**
 * @member {module:model/JobsAction} Action
 */


EntActionTemplate.prototype['Action'] = undefined;
/**
 * @member {String} Name
 */

EntActionTemplate.prototype['Name'] = undefined;
var _default = EntActionTemplate;
exports["default"] = _default;
//# sourceMappingURL=EntActionTemplate.js.map
