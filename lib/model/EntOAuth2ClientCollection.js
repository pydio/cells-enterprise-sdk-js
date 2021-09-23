"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthOAuth2ClientConfig = _interopRequireDefault(require("./AuthOAuth2ClientConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The EntOAuth2ClientCollection model module.
* @module model/EntOAuth2ClientCollection
* @version 2.0
*/
var EntOAuth2ClientCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntOAuth2ClientCollection</code>.
  * @alias module:model/EntOAuth2ClientCollection
  * @class
  */
  function EntOAuth2ClientCollection() {
    _classCallCheck(this, EntOAuth2ClientCollection);

    _defineProperty(this, "Clients", undefined);
  }
  /**
  * Constructs a <code>EntOAuth2ClientCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntOAuth2ClientCollection} obj Optional instance to populate.
  * @return {module:model/EntOAuth2ClientCollection} The populated <code>EntOAuth2ClientCollection</code> instance.
  */


  _createClass(EntOAuth2ClientCollection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntOAuth2ClientCollection();

        if (data.hasOwnProperty('Clients')) {
          obj['Clients'] = _ApiClient["default"].convertToType(data['Clients'], [_AuthOAuth2ClientConfig["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/AuthOAuth2ClientConfig>} Clients
    */

  }]);

  return EntOAuth2ClientCollection;
}();

exports["default"] = EntOAuth2ClientCollection;
//# sourceMappingURL=EntOAuth2ClientCollection.js.map
