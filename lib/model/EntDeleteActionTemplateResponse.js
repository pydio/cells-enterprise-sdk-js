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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The EntDeleteActionTemplateResponse model module.
* @module model/EntDeleteActionTemplateResponse
* @version 2.0
*/
var EntDeleteActionTemplateResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntDeleteActionTemplateResponse</code>.
  * @alias module:model/EntDeleteActionTemplateResponse
  * @class
  */
  function EntDeleteActionTemplateResponse() {
    _classCallCheck(this, EntDeleteActionTemplateResponse);

    _defineProperty(this, "Success", undefined);
  }
  /**
  * Constructs a <code>EntDeleteActionTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntDeleteActionTemplateResponse} obj Optional instance to populate.
  * @return {module:model/EntDeleteActionTemplateResponse} The populated <code>EntDeleteActionTemplateResponse</code> instance.
  */


  _createClass(EntDeleteActionTemplateResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntDeleteActionTemplateResponse();

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {Boolean} Success
    */

  }]);

  return EntDeleteActionTemplateResponse;
}();

exports["default"] = EntDeleteActionTemplateResponse;
//# sourceMappingURL=EntDeleteActionTemplateResponse.js.map