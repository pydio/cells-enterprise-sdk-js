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

/**
 * The AuthLdapMemberOfMapping model module.
 * @module model/AuthLdapMemberOfMapping
 * @version 2.0
 */
var AuthLdapMemberOfMapping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthLdapMemberOfMapping</code>.
   * @alias module:model/AuthLdapMemberOfMapping
   */
  function AuthLdapMemberOfMapping() {
    _classCallCheck(this, AuthLdapMemberOfMapping);

    AuthLdapMemberOfMapping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthLdapMemberOfMapping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthLdapMemberOfMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthLdapMemberOfMapping} obj Optional instance to populate.
     * @return {module:model/AuthLdapMemberOfMapping} The populated <code>AuthLdapMemberOfMapping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthLdapMemberOfMapping();

        if (data.hasOwnProperty('GroupFilter')) {
          obj['GroupFilter'] = _AuthLdapSearchFilter["default"].constructFromObject(data['GroupFilter']);
        }

        if (data.hasOwnProperty('Mapping')) {
          obj['Mapping'] = _AuthLdapMapping["default"].constructFromObject(data['Mapping']);
        }

        if (data.hasOwnProperty('PydioMemberOfAttribute')) {
          obj['PydioMemberOfAttribute'] = _ApiClient["default"].convertToType(data['PydioMemberOfAttribute'], 'String');
        }

        if (data.hasOwnProperty('PydioMemberOfValueFormat')) {
          obj['PydioMemberOfValueFormat'] = _ApiClient["default"].convertToType(data['PydioMemberOfValueFormat'], 'String');
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

        if (data.hasOwnProperty('SupportNestedGroup')) {
          obj['SupportNestedGroup'] = _ApiClient["default"].convertToType(data['SupportNestedGroup'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return AuthLdapMemberOfMapping;
}();
/**
 * @member {module:model/AuthLdapSearchFilter} GroupFilter
 */


AuthLdapMemberOfMapping.prototype['GroupFilter'] = undefined;
/**
 * @member {module:model/AuthLdapMapping} Mapping
 */

AuthLdapMemberOfMapping.prototype['Mapping'] = undefined;
/**
 * @member {String} PydioMemberOfAttribute
 */

AuthLdapMemberOfMapping.prototype['PydioMemberOfAttribute'] = undefined;
/**
 * @member {String} PydioMemberOfValueFormat
 */

AuthLdapMemberOfMapping.prototype['PydioMemberOfValueFormat'] = undefined;
/**
 * @member {Boolean} RealMemberOf
 */

AuthLdapMemberOfMapping.prototype['RealMemberOf'] = undefined;
/**
 * @member {String} RealMemberOfAttribute
 */

AuthLdapMemberOfMapping.prototype['RealMemberOfAttribute'] = undefined;
/**
 * @member {String} RealMemberOfValueFormat
 */

AuthLdapMemberOfMapping.prototype['RealMemberOfValueFormat'] = undefined;
/**
 * @member {Boolean} SupportNestedGroup
 */

AuthLdapMemberOfMapping.prototype['SupportNestedGroup'] = undefined;
var _default = AuthLdapMemberOfMapping;
exports["default"] = _default;
//# sourceMappingURL=AuthLdapMemberOfMapping.js.map
