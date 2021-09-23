"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IpbanConnectionAttempt = _interopRequireDefault(require("./IpbanConnectionAttempt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IpbanBannedConnection model module.
* @module model/IpbanBannedConnection
* @version 2.0
*/
var IpbanBannedConnection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IpbanBannedConnection</code>.
  * @alias module:model/IpbanBannedConnection
  * @class
  */
  function IpbanBannedConnection() {
    _classCallCheck(this, IpbanBannedConnection);

    _defineProperty(this, "IP", undefined);

    _defineProperty(this, "BanExpire", undefined);

    _defineProperty(this, "History", undefined);
  }
  /**
  * Constructs a <code>IpbanBannedConnection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IpbanBannedConnection} obj Optional instance to populate.
  * @return {module:model/IpbanBannedConnection} The populated <code>IpbanBannedConnection</code> instance.
  */


  _createClass(IpbanBannedConnection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IpbanBannedConnection();

        if (data.hasOwnProperty('IP')) {
          obj['IP'] = _ApiClient["default"].convertToType(data['IP'], 'String');
        }

        if (data.hasOwnProperty('BanExpire')) {
          obj['BanExpire'] = _ApiClient["default"].convertToType(data['BanExpire'], 'String');
        }

        if (data.hasOwnProperty('History')) {
          obj['History'] = _ApiClient["default"].convertToType(data['History'], [_IpbanConnectionAttempt["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {String} IP
    */

  }]);

  return IpbanBannedConnection;
}();

exports["default"] = IpbanBannedConnection;
//# sourceMappingURL=IpbanBannedConnection.js.map
