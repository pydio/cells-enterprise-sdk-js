"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntJobVersion = _interopRequireDefault(require("./EntJobVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntListJobVersionsResponse model module.
 * @module model/EntListJobVersionsResponse
 * @version 2.0
 */
var EntListJobVersionsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntListJobVersionsResponse</code>.
   * @alias module:model/EntListJobVersionsResponse
   */
  function EntListJobVersionsResponse() {
    _classCallCheck(this, EntListJobVersionsResponse);

    EntListJobVersionsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntListJobVersionsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntListJobVersionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntListJobVersionsResponse} obj Optional instance to populate.
     * @return {module:model/EntListJobVersionsResponse} The populated <code>EntListJobVersionsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntListJobVersionsResponse();

        if (data.hasOwnProperty('Versions')) {
          obj['Versions'] = _ApiClient["default"].convertToType(data['Versions'], [_EntJobVersion["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EntListJobVersionsResponse;
}();
/**
 * @member {Array.<module:model/EntJobVersion>} Versions
 */


EntListJobVersionsResponse.prototype['Versions'] = undefined;
var _default = EntListJobVersionsResponse;
exports["default"] = _default;
//# sourceMappingURL=EntListJobVersionsResponse.js.map
