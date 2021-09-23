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
* The EntPutActionTemplateRequest model module.
* @module model/EntPutActionTemplateRequest
* @version 2.0
*/
var EntPutActionTemplateRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntPutActionTemplateRequest</code>.
  * @alias module:model/EntPutActionTemplateRequest
  * @class
  */
  function EntPutActionTemplateRequest() {
    _classCallCheck(this, EntPutActionTemplateRequest);

    _defineProperty(this, "Template", undefined);
  }
  /**
  * Constructs a <code>EntPutActionTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntPutActionTemplateRequest} obj Optional instance to populate.
  * @return {module:model/EntPutActionTemplateRequest} The populated <code>EntPutActionTemplateRequest</code> instance.
  */


  _createClass(EntPutActionTemplateRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntPutActionTemplateRequest();

        if (data.hasOwnProperty('Template')) {
          obj['Template'] = _EntActionTemplate["default"].constructFromObject(data['Template']);
        }
      }

      return obj;
    }
    /**
    * @member {module:model/EntActionTemplate} Template
    */

  }]);

  return EntPutActionTemplateRequest;
}();

exports["default"] = EntPutActionTemplateRequest;
//# sourceMappingURL=EntPutActionTemplateRequest.js.map
