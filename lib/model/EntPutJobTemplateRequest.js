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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The EntPutJobTemplateRequest model module.
* @module model/EntPutJobTemplateRequest
* @version 2.0
*/
var EntPutJobTemplateRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntPutJobTemplateRequest</code>.
  * @alias module:model/EntPutJobTemplateRequest
  * @class
  */
  function EntPutJobTemplateRequest() {
    _classCallCheck(this, EntPutJobTemplateRequest);

    _defineProperty(this, "Name", undefined);

    _defineProperty(this, "Job", undefined);
  }
  /**
  * Constructs a <code>EntPutJobTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntPutJobTemplateRequest} obj Optional instance to populate.
  * @return {module:model/EntPutJobTemplateRequest} The populated <code>EntPutJobTemplateRequest</code> instance.
  */


  _createClass(EntPutJobTemplateRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntPutJobTemplateRequest();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Job')) {
          obj['Job'] = _JobsJob["default"].constructFromObject(data['Job']);
        }
      }

      return obj;
    }
    /**
    * @member {String} Name
    */

  }]);

  return EntPutJobTemplateRequest;
}();

exports["default"] = EntPutJobTemplateRequest;
//# sourceMappingURL=EntPutJobTemplateRequest.js.map