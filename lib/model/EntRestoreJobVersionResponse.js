"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsJob = _interopRequireDefault(require("./JobsJob"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntRestoreJobVersionResponse model module.
 * @module model/EntRestoreJobVersionResponse
 * @version 2.0
 */
var EntRestoreJobVersionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntRestoreJobVersionResponse</code>.
   * @alias module:model/EntRestoreJobVersionResponse
   */
  function EntRestoreJobVersionResponse() {
    _classCallCheck(this, EntRestoreJobVersionResponse);

    EntRestoreJobVersionResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntRestoreJobVersionResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntRestoreJobVersionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntRestoreJobVersionResponse} obj Optional instance to populate.
     * @return {module:model/EntRestoreJobVersionResponse} The populated <code>EntRestoreJobVersionResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntRestoreJobVersionResponse();

        if (data.hasOwnProperty('Job')) {
          obj['Job'] = _JobsJob["default"].constructFromObject(data['Job']);
        }

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EntRestoreJobVersionResponse;
}();
/**
 * @member {module:model/JobsJob} Job
 */


EntRestoreJobVersionResponse.prototype['Job'] = undefined;
/**
 * @member {Boolean} Success
 */

EntRestoreJobVersionResponse.prototype['Success'] = undefined;
var _default = EntRestoreJobVersionResponse;
exports["default"] = _default;
//# sourceMappingURL=EntRestoreJobVersionResponse.js.map