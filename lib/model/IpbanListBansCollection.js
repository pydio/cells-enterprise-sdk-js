"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IpbanBannedConnection = _interopRequireDefault(require("./IpbanBannedConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IpbanListBansCollection model module.
* @module model/IpbanListBansCollection
* @version 2.0
*/
var IpbanListBansCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IpbanListBansCollection</code>.
  * @alias module:model/IpbanListBansCollection
  * @class
  */
  function IpbanListBansCollection() {
    _classCallCheck(this, IpbanListBansCollection);

    _defineProperty(this, "Bans", undefined);
  }
  /**
  * Constructs a <code>IpbanListBansCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IpbanListBansCollection} obj Optional instance to populate.
  * @return {module:model/IpbanListBansCollection} The populated <code>IpbanListBansCollection</code> instance.
  */


  _createClass(IpbanListBansCollection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IpbanListBansCollection();

        if (data.hasOwnProperty('Bans')) {
          obj['Bans'] = _ApiClient["default"].convertToType(data['Bans'], [_IpbanBannedConnection["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/IpbanBannedConnection>} Bans
    */

  }]);

  return IpbanListBansCollection;
}();

exports["default"] = IpbanListBansCollection;
//# sourceMappingURL=IpbanListBansCollection.js.map
