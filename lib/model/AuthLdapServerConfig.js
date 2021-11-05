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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The AuthLdapServerConfig model module.
* @module model/AuthLdapServerConfig
* @version 2.0
*/
var AuthLdapServerConfig = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthLdapServerConfig</code>.
  * @alias module:model/AuthLdapServerConfig
  * @class
  */
  function AuthLdapServerConfig() {
    _classCallCheck(this, AuthLdapServerConfig);

    _defineProperty(this, "ConfigId", undefined);

    _defineProperty(this, "DomainName", undefined);

    _defineProperty(this, "Host", undefined);

    _defineProperty(this, "Connection", undefined);

    _defineProperty(this, "BindDN", undefined);

    _defineProperty(this, "BindPW", undefined);

    _defineProperty(this, "BindAnonymous", undefined);

    _defineProperty(this, "SkipVerifyCertificate", undefined);

    _defineProperty(this, "RootCA", undefined);

    _defineProperty(this, "RootCAData", undefined);

    _defineProperty(this, "PageSize", undefined);

    _defineProperty(this, "User", undefined);

    _defineProperty(this, "MappingRules", undefined);

    _defineProperty(this, "MemberOfMapping", undefined);

    _defineProperty(this, "RolePrefix", undefined);

    _defineProperty(this, "Schedule", undefined);

    _defineProperty(this, "SchedulerDetails", undefined);

    _defineProperty(this, "SyncOnly", undefined);
  }
  /**
  * Constructs a <code>AuthLdapServerConfig</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthLdapServerConfig} obj Optional instance to populate.
  * @return {module:model/AuthLdapServerConfig} The populated <code>AuthLdapServerConfig</code> instance.
  */


  _createClass(AuthLdapServerConfig, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthLdapServerConfig();

        if (data.hasOwnProperty('ConfigId')) {
          obj['ConfigId'] = _ApiClient["default"].convertToType(data['ConfigId'], 'String');
        }

        if (data.hasOwnProperty('DomainName')) {
          obj['DomainName'] = _ApiClient["default"].convertToType(data['DomainName'], 'String');
        }

        if (data.hasOwnProperty('Host')) {
          obj['Host'] = _ApiClient["default"].convertToType(data['Host'], 'String');
        }

        if (data.hasOwnProperty('Connection')) {
          obj['Connection'] = _ApiClient["default"].convertToType(data['Connection'], 'String');
        }

        if (data.hasOwnProperty('BindDN')) {
          obj['BindDN'] = _ApiClient["default"].convertToType(data['BindDN'], 'String');
        }

        if (data.hasOwnProperty('BindPW')) {
          obj['BindPW'] = _ApiClient["default"].convertToType(data['BindPW'], 'String');
        }

        if (data.hasOwnProperty('BindAnonymous')) {
          obj['BindAnonymous'] = _ApiClient["default"].convertToType(data['BindAnonymous'], 'Boolean');
        }

        if (data.hasOwnProperty('SkipVerifyCertificate')) {
          obj['SkipVerifyCertificate'] = _ApiClient["default"].convertToType(data['SkipVerifyCertificate'], 'Boolean');
        }

        if (data.hasOwnProperty('RootCA')) {
          obj['RootCA'] = _ApiClient["default"].convertToType(data['RootCA'], 'String');
        }

        if (data.hasOwnProperty('RootCAData')) {
          obj['RootCAData'] = _ApiClient["default"].convertToType(data['RootCAData'], 'String');
        }

        if (data.hasOwnProperty('PageSize')) {
          obj['PageSize'] = _ApiClient["default"].convertToType(data['PageSize'], 'Number');
        }

        if (data.hasOwnProperty('User')) {
          obj['User'] = _AuthLdapSearchFilter["default"].constructFromObject(data['User']);
        }

        if (data.hasOwnProperty('MappingRules')) {
          obj['MappingRules'] = _ApiClient["default"].convertToType(data['MappingRules'], [_AuthLdapMapping["default"]]);
        }

        if (data.hasOwnProperty('MemberOfMapping')) {
          obj['MemberOfMapping'] = _AuthLdapMemberOfMapping["default"].constructFromObject(data['MemberOfMapping']);
        }

        if (data.hasOwnProperty('RolePrefix')) {
          obj['RolePrefix'] = _ApiClient["default"].convertToType(data['RolePrefix'], 'String');
        }

        if (data.hasOwnProperty('Schedule')) {
          obj['Schedule'] = _ApiClient["default"].convertToType(data['Schedule'], 'String');
        }

        if (data.hasOwnProperty('SchedulerDetails')) {
          obj['SchedulerDetails'] = _ApiClient["default"].convertToType(data['SchedulerDetails'], 'String');
        }

        if (data.hasOwnProperty('SyncOnly')) {
          obj['SyncOnly'] = _ApiClient["default"].convertToType(data['SyncOnly'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {String} ConfigId
    */

  }]);

  return AuthLdapServerConfig;
}();

exports["default"] = AuthLdapServerConfig;
//# sourceMappingURL=AuthLdapServerConfig.js.map
