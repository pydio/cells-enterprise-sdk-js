"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthLdapMapping = _interopRequireDefault(require("./AuthLdapMapping"));

var _AuthLdapMemberOfMapping = _interopRequireDefault(require("./AuthLdapMemberOfMapping"));

var _AuthLdapSearchFilter = _interopRequireDefault(require("./AuthLdapSearchFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AuthLdapServerConfig model module.
 * @module model/AuthLdapServerConfig
 * @version 2.0
 */
var AuthLdapServerConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthLdapServerConfig</code>.
   * @alias module:model/AuthLdapServerConfig
   */
  function AuthLdapServerConfig() {
    _classCallCheck(this, AuthLdapServerConfig);

    AuthLdapServerConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthLdapServerConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthLdapServerConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthLdapServerConfig} obj Optional instance to populate.
     * @return {module:model/AuthLdapServerConfig} The populated <code>AuthLdapServerConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthLdapServerConfig();

        if (data.hasOwnProperty('BindAnonymous')) {
          obj['BindAnonymous'] = _ApiClient["default"].convertToType(data['BindAnonymous'], 'Boolean');
        }

        if (data.hasOwnProperty('BindDN')) {
          obj['BindDN'] = _ApiClient["default"].convertToType(data['BindDN'], 'String');
        }

        if (data.hasOwnProperty('BindPW')) {
          obj['BindPW'] = _ApiClient["default"].convertToType(data['BindPW'], 'String');
        }

        if (data.hasOwnProperty('ConfigId')) {
          obj['ConfigId'] = _ApiClient["default"].convertToType(data['ConfigId'], 'String');
        }

        if (data.hasOwnProperty('Connection')) {
          obj['Connection'] = _ApiClient["default"].convertToType(data['Connection'], 'String');
        }

        if (data.hasOwnProperty('DomainName')) {
          obj['DomainName'] = _ApiClient["default"].convertToType(data['DomainName'], 'String');
        }

        if (data.hasOwnProperty('Host')) {
          obj['Host'] = _ApiClient["default"].convertToType(data['Host'], 'String');
        }

        if (data.hasOwnProperty('MappingRules')) {
          obj['MappingRules'] = _ApiClient["default"].convertToType(data['MappingRules'], [_AuthLdapMapping["default"]]);
        }

        if (data.hasOwnProperty('MemberOfMapping')) {
          obj['MemberOfMapping'] = _AuthLdapMemberOfMapping["default"].constructFromObject(data['MemberOfMapping']);
        }

        if (data.hasOwnProperty('PageSize')) {
          obj['PageSize'] = _ApiClient["default"].convertToType(data['PageSize'], 'Number');
        }

        if (data.hasOwnProperty('RolePrefix')) {
          obj['RolePrefix'] = _ApiClient["default"].convertToType(data['RolePrefix'], 'String');
        }

        if (data.hasOwnProperty('RootCA')) {
          obj['RootCA'] = _ApiClient["default"].convertToType(data['RootCA'], 'String');
        }

        if (data.hasOwnProperty('RootCAData')) {
          obj['RootCAData'] = _ApiClient["default"].convertToType(data['RootCAData'], 'String');
        }

        if (data.hasOwnProperty('Schedule')) {
          obj['Schedule'] = _ApiClient["default"].convertToType(data['Schedule'], 'String');
        }

        if (data.hasOwnProperty('SchedulerDetails')) {
          obj['SchedulerDetails'] = _ApiClient["default"].convertToType(data['SchedulerDetails'], 'String');
        }

        if (data.hasOwnProperty('SkipVerifyCertificate')) {
          obj['SkipVerifyCertificate'] = _ApiClient["default"].convertToType(data['SkipVerifyCertificate'], 'Boolean');
        }

        if (data.hasOwnProperty('SyncOnly')) {
          obj['SyncOnly'] = _ApiClient["default"].convertToType(data['SyncOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('User')) {
          obj['User'] = _AuthLdapSearchFilter["default"].constructFromObject(data['User']);
        }
      }

      return obj;
    }
  }]);

  return AuthLdapServerConfig;
}();
/**
 * @member {Boolean} BindAnonymous
 */


AuthLdapServerConfig.prototype['BindAnonymous'] = undefined;
/**
 * @member {String} BindDN
 */

AuthLdapServerConfig.prototype['BindDN'] = undefined;
/**
 * @member {String} BindPW
 */

AuthLdapServerConfig.prototype['BindPW'] = undefined;
/**
 * @member {String} ConfigId
 */

AuthLdapServerConfig.prototype['ConfigId'] = undefined;
/**
 * @member {String} Connection
 */

AuthLdapServerConfig.prototype['Connection'] = undefined;
/**
 * @member {String} DomainName
 */

AuthLdapServerConfig.prototype['DomainName'] = undefined;
/**
 * @member {String} Host
 */

AuthLdapServerConfig.prototype['Host'] = undefined;
/**
 * @member {Array.<module:model/AuthLdapMapping>} MappingRules
 */

AuthLdapServerConfig.prototype['MappingRules'] = undefined;
/**
 * @member {module:model/AuthLdapMemberOfMapping} MemberOfMapping
 */

AuthLdapServerConfig.prototype['MemberOfMapping'] = undefined;
/**
 * @member {Number} PageSize
 */

AuthLdapServerConfig.prototype['PageSize'] = undefined;
/**
 * @member {String} RolePrefix
 */

AuthLdapServerConfig.prototype['RolePrefix'] = undefined;
/**
 * @member {String} RootCA
 */

AuthLdapServerConfig.prototype['RootCA'] = undefined;
/**
 * @member {String} RootCAData
 */

AuthLdapServerConfig.prototype['RootCAData'] = undefined;
/**
 * @member {String} Schedule
 */

AuthLdapServerConfig.prototype['Schedule'] = undefined;
/**
 * @member {String} SchedulerDetails
 */

AuthLdapServerConfig.prototype['SchedulerDetails'] = undefined;
/**
 * @member {Boolean} SkipVerifyCertificate
 */

AuthLdapServerConfig.prototype['SkipVerifyCertificate'] = undefined;
/**
 * @member {Boolean} SyncOnly
 */

AuthLdapServerConfig.prototype['SyncOnly'] = undefined;
/**
 * @member {module:model/AuthLdapSearchFilter} User
 */

AuthLdapServerConfig.prototype['User'] = undefined;
var _default = AuthLdapServerConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthLdapServerConfig.js.map
