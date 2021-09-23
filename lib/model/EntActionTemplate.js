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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The EntActionTemplate model module.
* @module model/EntActionTemplate
* @version 2.0
*/
var EntActionTemplate = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntActionTemplate</code>.
  * @alias module:model/EntActionTemplate
  * @class
  */
  function EntActionTemplate() {
    _classCallCheck(this, EntActionTemplate);

    _defineProperty(this, "Name", undefined);

    _defineProperty(this, "Action", undefined);
  }
  /**
  * Constructs a <code>EntActionTemplate</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntActionTemplate} obj Optional instance to populate.
  * @return {module:model/EntActionTemplate} The populated <code>EntActionTemplate</code> instance.
  */


  _createClass(EntActionTemplate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntActionTemplate();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Action')) {
          obj['Action'] = _JobsAction["default"].constructFromObject(data['Action']);
        }
      }

      return obj;
    }
    /**
    * @member {String} Name
    */

  }]);

  return EntActionTemplate;
}();

exports["default"] = EntActionTemplate;
//# sourceMappingURL=EntActionTemplate.js.map
