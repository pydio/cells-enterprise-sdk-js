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
* The AuthLdapSearchFilter model module.
* @module model/AuthLdapSearchFilter
* @version 2.0
*/
var AuthLdapSearchFilter = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthLdapSearchFilter</code>.
  * @alias module:model/AuthLdapSearchFilter
  * @class
  */
  function AuthLdapSearchFilter() {
    _classCallCheck(this, AuthLdapSearchFilter);

    _defineProperty(this, "DNs", undefined);

    _defineProperty(this, "Filter", undefined);

    _defineProperty(this, "IDAttribute", undefined);

    _defineProperty(this, "DisplayAttribute", undefined);

    _defineProperty(this, "Scope", undefined);
  }
  /**
  * Constructs a <code>AuthLdapSearchFilter</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthLdapSearchFilter} obj Optional instance to populate.
  * @return {module:model/AuthLdapSearchFilter} The populated <code>AuthLdapSearchFilter</code> instance.
  */


  _createClass(AuthLdapSearchFilter, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthLdapSearchFilter();

        if (data.hasOwnProperty('DNs')) {
          obj['DNs'] = _ApiClient["default"].convertToType(data['DNs'], ['String']);
        }

        if (data.hasOwnProperty('Filter')) {
          obj['Filter'] = _ApiClient["default"].convertToType(data['Filter'], 'String');
        }

        if (data.hasOwnProperty('IDAttribute')) {
          obj['IDAttribute'] = _ApiClient["default"].convertToType(data['IDAttribute'], 'String');
        }

        if (data.hasOwnProperty('DisplayAttribute')) {
          obj['DisplayAttribute'] = _ApiClient["default"].convertToType(data['DisplayAttribute'], 'String');
        }

        if (data.hasOwnProperty('Scope')) {
          obj['Scope'] = _ApiClient["default"].convertToType(data['Scope'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {Array.<String>} DNs
    */

  }]);

  return AuthLdapSearchFilter;
}();

exports["default"] = AuthLdapSearchFilter;
//# sourceMappingURL=AuthLdapSearchFilter.js.map
