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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The EntPlaygroundResponse model module.
* @module model/EntPlaygroundResponse
* @version 2.0
*/
var EntPlaygroundResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntPlaygroundResponse</code>.
  * @alias module:model/EntPlaygroundResponse
  * @class
  */
  function EntPlaygroundResponse() {
    _classCallCheck(this, EntPlaygroundResponse);

    _defineProperty(this, "Input", undefined);

    _defineProperty(this, "LastOutputJsonBody", undefined);

    _defineProperty(this, "Code", undefined);

    _defineProperty(this, "Output", undefined);
  }
  /**
  * Constructs a <code>EntPlaygroundResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntPlaygroundResponse} obj Optional instance to populate.
  * @return {module:model/EntPlaygroundResponse} The populated <code>EntPlaygroundResponse</code> instance.
  */


  _createClass(EntPlaygroundResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntPlaygroundResponse();

        if (data.hasOwnProperty('Input')) {
          obj['Input'] = _JobsActionMessage["default"].constructFromObject(data['Input']);
        }

        if (data.hasOwnProperty('LastOutputJsonBody')) {
          obj['LastOutputJsonBody'] = _ApiClient["default"].convertToType(data['LastOutputJsonBody'], 'String');
        }

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ApiClient["default"].convertToType(data['Code'], 'String');
        }

        if (data.hasOwnProperty('Output')) {
          obj['Output'] = _ApiClient["default"].convertToType(data['Output'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/JobsActionMessage} Input
    */

  }]);

  return EntPlaygroundResponse;
}();

exports["default"] = EntPlaygroundResponse;
//# sourceMappingURL=EntPlaygroundResponse.js.map
