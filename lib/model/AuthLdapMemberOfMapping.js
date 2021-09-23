"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthLdapMapping = _interopRequireDefault(require("./AuthLdapMapping"));

var _AuthLdapSearchFilter = _interopRequireDefault(require("./AuthLdapSearchFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The AuthLdapMemberOfMapping model module.
* @module model/AuthLdapMemberOfMapping
* @version 2.0
*/
var AuthLdapMemberOfMapping = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthLdapMemberOfMapping</code>.
  * @alias module:model/AuthLdapMemberOfMapping
  * @class
  */
  function AuthLdapMemberOfMapping() {
    _classCallCheck(this, AuthLdapMemberOfMapping);

    _defineProperty(this, "Mapping", undefined);

    _defineProperty(this, "GroupFilter", undefined);

    _defineProperty(this, "SupportNestedGroup", undefined);

    _defineProperty(this, "RealMemberOf", undefined);

    _defineProperty(this, "RealMemberOfAttribute", undefined);

    _defineProperty(this, "RealMemberOfValueFormat", undefined);

    _defineProperty(this, "PydioMemberOfAttribute", undefined);

    _defineProperty(this, "PydioMemberOfValueFormat", undefined);
  }
  /**
  * Constructs a <code>AuthLdapMemberOfMapping</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthLdapMemberOfMapping} obj Optional instance to populate.
  * @return {module:model/AuthLdapMemberOfMapping} The populated <code>AuthLdapMemberOfMapping</code> instance.
  */


  _createClass(AuthLdapMemberOfMapping, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthLdapMemberOfMapping();

        if (data.hasOwnProperty('Mapping')) {
          obj['Mapping'] = _AuthLdapMapping["default"].constructFromObject(data['Mapping']);
        }

        if (data.hasOwnProperty('GroupFilter')) {
          obj['GroupFilter'] = _AuthLdapSearchFilter["default"].constructFromObject(data['GroupFilter']);
        }

        if (data.hasOwnProperty('SupportNestedGroup')) {
          obj['SupportNestedGroup'] = _ApiClient["default"].convertToType(data['SupportNestedGroup'], 'Boolean');
        }

        if (data.hasOwnProperty('RealMemberOf')) {
          obj['RealMemberOf'] = _ApiClient["default"].convertToType(data['RealMemberOf'], 'Boolean');
        }

        if (data.hasOwnProperty('RealMemberOfAttribute')) {
          obj['RealMemberOfAttribute'] = _ApiClient["default"].convertToType(data['RealMemberOfAttribute'], 'String');
        }

        if (data.hasOwnProperty('RealMemberOfValueFormat')) {
          obj['RealMemberOfValueFormat'] = _ApiClient["default"].convertToType(data['RealMemberOfValueFormat'], 'String');
        }

        if (data.hasOwnProperty('PydioMemberOfAttribute')) {
          obj['PydioMemberOfAttribute'] = _ApiClient["default"].convertToType(data['PydioMemberOfAttribute'], 'String');
        }

        if (data.hasOwnProperty('PydioMemberOfValueFormat')) {
          obj['PydioMemberOfValueFormat'] = _ApiClient["default"].convertToType(data['PydioMemberOfValueFormat'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/AuthLdapMapping} Mapping
    */

  }]);

  return AuthLdapMemberOfMapping;
}();

exports["default"] = AuthLdapMemberOfMapping;
//# sourceMappingURL=AuthLdapMemberOfMapping.js.map
