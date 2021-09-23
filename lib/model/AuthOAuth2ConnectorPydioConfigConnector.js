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
* The AuthOAuth2ConnectorPydioConfigConnector model module.
* @module model/AuthOAuth2ConnectorPydioConfigConnector
* @version 2.0
*/
var AuthOAuth2ConnectorPydioConfigConnector = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthOAuth2ConnectorPydioConfigConnector</code>.
  * @alias module:model/AuthOAuth2ConnectorPydioConfigConnector
  * @class
  */
  function AuthOAuth2ConnectorPydioConfigConnector() {
    _classCallCheck(this, AuthOAuth2ConnectorPydioConfigConnector);

    _defineProperty(this, "id", undefined);

    _defineProperty(this, "name", undefined);

    _defineProperty(this, "type", undefined);
  }
  /**
  * Constructs a <code>AuthOAuth2ConnectorPydioConfigConnector</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthOAuth2ConnectorPydioConfigConnector} obj Optional instance to populate.
  * @return {module:model/AuthOAuth2ConnectorPydioConfigConnector} The populated <code>AuthOAuth2ConnectorPydioConfigConnector</code> instance.
  */


  _createClass(AuthOAuth2ConnectorPydioConfigConnector, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorPydioConfigConnector();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {Number} id
    */

  }]);

  return AuthOAuth2ConnectorPydioConfigConnector;
}();

exports["default"] = AuthOAuth2ConnectorPydioConfigConnector;
//# sourceMappingURL=AuthOAuth2ConnectorPydioConfigConnector.js.map
