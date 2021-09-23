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
* The IpbanConnectionAttempt model module.
* @module model/IpbanConnectionAttempt
* @version 2.0
*/
var IpbanConnectionAttempt = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IpbanConnectionAttempt</code>.
  * @alias module:model/IpbanConnectionAttempt
  * @class
  */
  function IpbanConnectionAttempt() {
    _classCallCheck(this, IpbanConnectionAttempt);

    _defineProperty(this, "IP", undefined);

    _defineProperty(this, "connectionTime", undefined);

    _defineProperty(this, "IsSuccess", undefined);

    _defineProperty(this, "Details", undefined);
  }
  /**
  * Constructs a <code>IpbanConnectionAttempt</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IpbanConnectionAttempt} obj Optional instance to populate.
  * @return {module:model/IpbanConnectionAttempt} The populated <code>IpbanConnectionAttempt</code> instance.
  */


  _createClass(IpbanConnectionAttempt, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IpbanConnectionAttempt();

        if (data.hasOwnProperty('IP')) {
          obj['IP'] = _ApiClient["default"].convertToType(data['IP'], 'String');
        }

        if (data.hasOwnProperty('connectionTime')) {
          obj['connectionTime'] = _ApiClient["default"].convertToType(data['connectionTime'], 'String');
        }

        if (data.hasOwnProperty('IsSuccess')) {
          obj['IsSuccess'] = _ApiClient["default"].convertToType(data['IsSuccess'], 'Boolean');
        }

        if (data.hasOwnProperty('Details')) {
          obj['Details'] = _ApiClient["default"].convertToType(data['Details'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
    /**
    * @member {String} IP
    */

  }]);

  return IpbanConnectionAttempt;
}();

exports["default"] = IpbanConnectionAttempt;
//# sourceMappingURL=IpbanConnectionAttempt.js.map
