"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthLdapServerConfig = _interopRequireDefault(require("./AuthLdapServerConfig"));

var _AuthOAuth2ConnectorBitbucketConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorBitbucketConfig"));

var _AuthOAuth2ConnectorGithubConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorGithubConfig"));

var _AuthOAuth2ConnectorGitlabConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorGitlabConfig"));

var _AuthOAuth2ConnectorLinkedinConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorLinkedinConfig"));

var _AuthOAuth2ConnectorMicrosoftConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorMicrosoftConfig"));

var _AuthOAuth2ConnectorMockConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorMockConfig"));

var _AuthOAuth2ConnectorOAuthConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorOAuthConfig"));

var _AuthOAuth2ConnectorOIDCConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorOIDCConfig"));

var _AuthOAuth2ConnectorPydioConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorPydioConfig"));

var _AuthOAuth2ConnectorSAMLConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorSAMLConfig"));

var _AuthOAuth2MappingRule = _interopRequireDefault(require("./AuthOAuth2MappingRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AuthOAuth2ConnectorConfig model module.
 * @module model/AuthOAuth2ConnectorConfig
 * @version 2.0
 */
var AuthOAuth2ConnectorConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2ConnectorConfig</code>.
   * @alias module:model/AuthOAuth2ConnectorConfig
   */
  function AuthOAuth2ConnectorConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorConfig);

    AuthOAuth2ConnectorConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2ConnectorConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2ConnectorConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorConfig} The populated <code>AuthOAuth2ConnectorConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorConfig();

        if (data.hasOwnProperty('configbitbucket')) {
          obj['configbitbucket'] = _AuthOAuth2ConnectorBitbucketConfig["default"].constructFromObject(data['configbitbucket']);
        }

        if (data.hasOwnProperty('configgithub')) {
          obj['configgithub'] = _AuthOAuth2ConnectorGithubConfig["default"].constructFromObject(data['configgithub']);
        }

        if (data.hasOwnProperty('configgitlab')) {
          obj['configgitlab'] = _AuthOAuth2ConnectorGitlabConfig["default"].constructFromObject(data['configgitlab']);
        }

        if (data.hasOwnProperty('configldap')) {
          obj['configldap'] = _AuthLdapServerConfig["default"].constructFromObject(data['configldap']);
        }

        if (data.hasOwnProperty('configlinkedin')) {
          obj['configlinkedin'] = _AuthOAuth2ConnectorLinkedinConfig["default"].constructFromObject(data['configlinkedin']);
        }

        if (data.hasOwnProperty('configmicrosoft')) {
          obj['configmicrosoft'] = _AuthOAuth2ConnectorMicrosoftConfig["default"].constructFromObject(data['configmicrosoft']);
        }

        if (data.hasOwnProperty('configmock')) {
          obj['configmock'] = _AuthOAuth2ConnectorMockConfig["default"].constructFromObject(data['configmock']);
        }

        if (data.hasOwnProperty('configoauth')) {
          obj['configoauth'] = _AuthOAuth2ConnectorOAuthConfig["default"].constructFromObject(data['configoauth']);
        }

        if (data.hasOwnProperty('configoidc')) {
          obj['configoidc'] = _AuthOAuth2ConnectorOIDCConfig["default"].constructFromObject(data['configoidc']);
        }

        if (data.hasOwnProperty('configpydio')) {
          obj['configpydio'] = _AuthOAuth2ConnectorPydioConfig["default"].constructFromObject(data['configpydio']);
        }

        if (data.hasOwnProperty('configsaml')) {
          obj['configsaml'] = _AuthOAuth2ConnectorSAMLConfig["default"].constructFromObject(data['configsaml']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('mappingRules')) {
          obj['mappingRules'] = _ApiClient["default"].convertToType(data['mappingRules'], [_AuthOAuth2MappingRule["default"]]);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('sites')) {
          obj['sites'] = _ApiClient["default"].convertToType(data['sites'], ['String']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2ConnectorConfig;
}();
/**
 * @member {module:model/AuthOAuth2ConnectorBitbucketConfig} configbitbucket
 */


AuthOAuth2ConnectorConfig.prototype['configbitbucket'] = undefined;
/**
 * @member {module:model/AuthOAuth2ConnectorGithubConfig} configgithub
 */

AuthOAuth2ConnectorConfig.prototype['configgithub'] = undefined;
/**
 * @member {module:model/AuthOAuth2ConnectorGitlabConfig} configgitlab
 */

AuthOAuth2ConnectorConfig.prototype['configgitlab'] = undefined;
/**
 * @member {module:model/AuthLdapServerConfig} configldap
 */

AuthOAuth2ConnectorConfig.prototype['configldap'] = undefined;
/**
 * @member {module:model/AuthOAuth2ConnectorLinkedinConfig} configlinkedin
 */

AuthOAuth2ConnectorConfig.prototype['configlinkedin'] = undefined;
/**
 * @member {module:model/AuthOAuth2ConnectorMicrosoftConfig} configmicrosoft
 */

AuthOAuth2ConnectorConfig.prototype['configmicrosoft'] = undefined;
/**
 * @member {module:model/AuthOAuth2ConnectorMockConfig} configmock
 */

AuthOAuth2ConnectorConfig.prototype['configmock'] = undefined;
/**
 * @member {module:model/AuthOAuth2ConnectorOAuthConfig} configoauth
 */

AuthOAuth2ConnectorConfig.prototype['configoauth'] = undefined;
/**
 * @member {module:model/AuthOAuth2ConnectorOIDCConfig} configoidc
 */

AuthOAuth2ConnectorConfig.prototype['configoidc'] = undefined;
/**
 * @member {module:model/AuthOAuth2ConnectorPydioConfig} configpydio
 */

AuthOAuth2ConnectorConfig.prototype['configpydio'] = undefined;
/**
 * @member {module:model/AuthOAuth2ConnectorSAMLConfig} configsaml
 */

AuthOAuth2ConnectorConfig.prototype['configsaml'] = undefined;
/**
 * @member {String} id
 */

AuthOAuth2ConnectorConfig.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/AuthOAuth2MappingRule>} mappingRules
 */

AuthOAuth2ConnectorConfig.prototype['mappingRules'] = undefined;
/**
 * @member {String} name
 */

AuthOAuth2ConnectorConfig.prototype['name'] = undefined;
/**
 * @member {Array.<String>} sites
 */

AuthOAuth2ConnectorConfig.prototype['sites'] = undefined;
/**
 * @member {String} type
 */

AuthOAuth2ConnectorConfig.prototype['type'] = undefined;
var _default = AuthOAuth2ConnectorConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2ConnectorConfig.js.map
