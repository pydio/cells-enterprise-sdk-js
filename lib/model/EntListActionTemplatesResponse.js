"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntActionTemplate = _interopRequireDefault(require("./EntActionTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The EntListActionTemplatesResponse model module.
* @module model/EntListActionTemplatesResponse
* @version 2.0
*/
var EntListActionTemplatesResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntListActionTemplatesResponse</code>.
  * @alias module:model/EntListActionTemplatesResponse
  * @class
  */
  function EntListActionTemplatesResponse() {
    _classCallCheck(this, EntListActionTemplatesResponse);

    _defineProperty(this, "Templates", undefined);
  }
  /**
  * Constructs a <code>EntListActionTemplatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntListActionTemplatesResponse} obj Optional instance to populate.
  * @return {module:model/EntListActionTemplatesResponse} The populated <code>EntListActionTemplatesResponse</code> instance.
  */


  _createClass(EntListActionTemplatesResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntListActionTemplatesResponse();

        if (data.hasOwnProperty('Templates')) {
          obj['Templates'] = _ApiClient["default"].convertToType(data['Templates'], [_EntActionTemplate["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/EntActionTemplate>} Templates
    */

  }]);

  return EntListActionTemplatesResponse;
}();

exports["default"] = EntListActionTemplatesResponse;
//# sourceMappingURL=EntListActionTemplatesResponse.js.map
