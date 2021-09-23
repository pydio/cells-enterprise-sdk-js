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

var _AuthOAuth2ConnectorOAuthConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorOAuthConfig"));

var _AuthOAuth2ConnectorOIDCConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorOIDCConfig"));

var _AuthOAuth2ConnectorPydioConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorPydioConfig"));

var _AuthOAuth2ConnectorSAMLConfig = _interopRequireDefault(require("./AuthOAuth2ConnectorSAMLConfig"));

var _AuthOAuth2MappingRule = _interopRequireDefault(require("./AuthOAuth2MappingRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The AuthOAuth2ConnectorConfig model module.
* @module model/AuthOAuth2ConnectorConfig
* @version 2.0
*/
var AuthOAuth2ConnectorConfig = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthOAuth2ConnectorConfig</code>.
  * @alias module:model/AuthOAuth2ConnectorConfig
  * @class
  */
  function AuthOAuth2ConnectorConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorConfig);

    _defineProperty(this, "id", undefined);

    _defineProperty(this, "type", undefined);

    _defineProperty(this, "name", undefined);

    _defineProperty(this, "mappingRules", undefined);

    _defineProperty(this, "configpydio", undefined);

    _defineProperty(this, "configoidc", undefined);

    _defineProperty(this, "configsaml", undefined);

    _defineProperty(this, "configbitbucket", undefined);

    _defineProperty(this, "configgithub", undefined);

    _defineProperty(this, "configgitlab", undefined);

    _defineProperty(this, "configlinkedin", undefined);

    _defineProperty(this, "configmicrosoft", undefined);

    _defineProperty(this, "configldap", undefined);

    _defineProperty(this, "configoauth", undefined);

    _defineProperty(this, "sites", undefined);
  }
  /**
  * Constructs a <code>AuthOAuth2ConnectorConfig</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthOAuth2ConnectorConfig} obj Optional instance to populate.
  * @return {module:model/AuthOAuth2ConnectorConfig} The populated <code>AuthOAuth2ConnectorConfig</code> instance.
  */


  _createClass(AuthOAuth2ConnectorConfig, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorConfig();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('mappingRules')) {
          obj['mappingRules'] = _ApiClient["default"].convertToType(data['mappingRules'], [_AuthOAuth2MappingRule["default"]]);
        }

        if (data.hasOwnProperty('configpydio')) {
          obj['configpydio'] = _AuthOAuth2ConnectorPydioConfig["default"].constructFromObject(data['configpydio']);
        }

        if (data.hasOwnProperty('configoidc')) {
          obj['configoidc'] = _AuthOAuth2ConnectorOIDCConfig["default"].constructFromObject(data['configoidc']);
        }

        if (data.hasOwnProperty('configsaml')) {
          obj['configsaml'] = _AuthOAuth2ConnectorSAMLConfig["default"].constructFromObject(data['configsaml']);
        }

        if (data.hasOwnProperty('configbitbucket')) {
          obj['configbitbucket'] = _AuthOAuth2ConnectorBitbucketConfig["default"].constructFromObject(data['configbitbucket']);
        }

        if (data.hasOwnProperty('configgithub')) {
          obj['configgithub'] = _AuthOAuth2ConnectorGithubConfig["default"].constructFromObject(data['configgithub']);
        }

        if (data.hasOwnProperty('configgitlab')) {
          obj['configgitlab'] = _AuthOAuth2ConnectorGitlabConfig["default"].constructFromObject(data['configgitlab']);
        }

        if (data.hasOwnProperty('configlinkedin')) {
          obj['configlinkedin'] = _AuthOAuth2ConnectorLinkedinConfig["default"].constructFromObject(data['configlinkedin']);
        }

        if (data.hasOwnProperty('configmicrosoft')) {
          obj['configmicrosoft'] = _AuthOAuth2ConnectorMicrosoftConfig["default"].constructFromObject(data['configmicrosoft']);
        }

        if (data.hasOwnProperty('configldap')) {
          obj['configldap'] = _AuthLdapServerConfig["default"].constructFromObject(data['configldap']);
        }

        if (data.hasOwnProperty('configoauth')) {
          obj['configoauth'] = _AuthOAuth2ConnectorOAuthConfig["default"].constructFromObject(data['configoauth']);
        }

        if (data.hasOwnProperty('sites')) {
          obj['sites'] = _ApiClient["default"].convertToType(data['sites'], ['String']);
        }
      }

      return obj;
    }
    /**
    * @member {String} id
    */

  }]);

  return AuthOAuth2ConnectorConfig;
}();

exports["default"] = AuthOAuth2ConnectorConfig;
//# sourceMappingURL=AuthOAuth2ConnectorConfig.js.map
