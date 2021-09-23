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
* The EntPersonalAccessTokenRequest model module.
* @module model/EntPersonalAccessTokenRequest
* @version 2.0
*/
var EntPersonalAccessTokenRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntPersonalAccessTokenRequest</code>.
  * @alias module:model/EntPersonalAccessTokenRequest
  * @class
  */
  function EntPersonalAccessTokenRequest() {
    _classCallCheck(this, EntPersonalAccessTokenRequest);

    _defineProperty(this, "UserLogin", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "ExpiresAt", undefined);

    _defineProperty(this, "AutoRefresh", undefined);

    _defineProperty(this, "Scopes", undefined);
  }
  /**
  * Constructs a <code>EntPersonalAccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntPersonalAccessTokenRequest} obj Optional instance to populate.
  * @return {module:model/EntPersonalAccessTokenRequest} The populated <code>EntPersonalAccessTokenRequest</code> instance.
  */


  _createClass(EntPersonalAccessTokenRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntPersonalAccessTokenRequest();

        if (data.hasOwnProperty('UserLogin')) {
          obj['UserLogin'] = _ApiClient["default"].convertToType(data['UserLogin'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('ExpiresAt')) {
          obj['ExpiresAt'] = _ApiClient["default"].convertToType(data['ExpiresAt'], 'String');
        }

        if (data.hasOwnProperty('AutoRefresh')) {
          obj['AutoRefresh'] = _ApiClient["default"].convertToType(data['AutoRefresh'], 'Number');
        }

        if (data.hasOwnProperty('Scopes')) {
          obj['Scopes'] = _ApiClient["default"].convertToType(data['Scopes'], ['String']);
        }
      }

      return obj;
    }
    /**
    * @member {String} UserLogin
    */

  }]);

  return EntPersonalAccessTokenRequest;
}();

exports["default"] = EntPersonalAccessTokenRequest;
//# sourceMappingURL=EntPersonalAccessTokenRequest.js.map
