"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthOAuth2ConnectorCollection = _interopRequireDefault(require("../model/AuthOAuth2ConnectorCollection"));

var _EntDeleteVersioningPolicyResponse = _interopRequireDefault(require("../model/EntDeleteVersioningPolicyResponse"));

var _EntDeleteVirtualNodeResponse = _interopRequireDefault(require("../model/EntDeleteVirtualNodeResponse"));

var _EntExternalDirectoryCollection = _interopRequireDefault(require("../model/EntExternalDirectoryCollection"));

var _EntExternalDirectoryConfig = _interopRequireDefault(require("../model/EntExternalDirectoryConfig"));

var _EntExternalDirectoryPingRequest = _interopRequireDefault(require("../model/EntExternalDirectoryPingRequest"));

var _EntExternalDirectoryResponse = _interopRequireDefault(require("../model/EntExternalDirectoryResponse"));

var _EntExternalDirectorySearchRequest = _interopRequireDefault(require("../model/EntExternalDirectorySearchRequest"));

var _EntExternalDirectoryTestResponse = _interopRequireDefault(require("../model/EntExternalDirectoryTestResponse"));

var _EntListSitesResponse = _interopRequireDefault(require("../model/EntListSitesResponse"));

var _EntOAuth2ClientCollection = _interopRequireDefault(require("../model/EntOAuth2ClientCollection"));

var _EntOAuth2ClientResponse = _interopRequireDefault(require("../model/EntOAuth2ClientResponse"));

var _EntOAuth2ConnectorCollection = _interopRequireDefault(require("../model/EntOAuth2ConnectorCollection"));

var _EntOAuth2ConnectorResponse = _interopRequireDefault(require("../model/EntOAuth2ConnectorResponse"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject1"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject2"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject3"));

var _RpcStatus = _interopRequireDefault(require("../model/RpcStatus"));

var _TreeNode = _interopRequireDefault(require("../model/TreeNode"));

var _TreeVersioningPolicy = _interopRequireDefault(require("../model/TreeVersioningPolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* EnterpriseConfigService service.
* @module api/EnterpriseConfigServiceApi
* @version 2.0
*/
var EnterpriseConfigServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EnterpriseConfigServiceApi. 
  * @alias module:api/EnterpriseConfigServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EnterpriseConfigServiceApi(apiClient) {
    _classCallCheck(this, EnterpriseConfigServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * [Enterprise Only] Delete external directory
   * @param {String} configId Id of the external directory
   * @param {Object} opts Optional parameters
   * @param {String} opts.configConfigId 
   * @param {String} opts.configDomainName 
   * @param {String} opts.configHost 
   * @param {String} opts.configConnection 
   * @param {String} opts.configBindDN 
   * @param {String} opts.configBindPW 
   * @param {Boolean} opts.configBindAnonymous 
   * @param {Boolean} opts.configSkipVerifyCertificate 
   * @param {String} opts.configRootCA 
   * @param {String} opts.configRootCAData To be converted to []byte.
   * @param {Number} opts.configPageSize 
   * @param {Array.<String>} opts.configUserDNs 
   * @param {String} opts.configUserFilter 
   * @param {String} opts.configUserIDAttribute 
   * @param {String} opts.configUserDisplayAttribute 
   * @param {String} opts.configUserScope 
   * @param {String} opts.configMemberOfMappingMappingLeftAttribute 
   * @param {String} opts.configMemberOfMappingMappingRightAttribute 
   * @param {String} opts.configMemberOfMappingMappingRuleString 
   * @param {String} opts.configMemberOfMappingMappingRolePrefix 
   * @param {Array.<String>} opts.configMemberOfMappingGroupFilterDNs 
   * @param {String} opts.configMemberOfMappingGroupFilterFilter 
   * @param {String} opts.configMemberOfMappingGroupFilterIDAttribute 
   * @param {String} opts.configMemberOfMappingGroupFilterDisplayAttribute 
   * @param {String} opts.configMemberOfMappingGroupFilterScope 
   * @param {Boolean} opts.configMemberOfMappingSupportNestedGroup 
   * @param {Boolean} opts.configMemberOfMappingRealMemberOf 
   * @param {String} opts.configMemberOfMappingRealMemberOfAttribute 
   * @param {String} opts.configMemberOfMappingRealMemberOfValueFormat 
   * @param {String} opts.configMemberOfMappingPydioMemberOfAttribute 
   * @param {String} opts.configMemberOfMappingPydioMemberOfValueFormat 
   * @param {String} opts.configRolePrefix 
   * @param {String} opts.configSchedule 
   * @param {String} opts.configSchedulerDetails 
   * @param {Boolean} opts.configSyncOnly 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntExternalDirectoryResponse} and HTTP response
   */


  _createClass(EnterpriseConfigServiceApi, [{
    key: "deleteExternalDirectoryWithHttpInfo",
    value: function deleteExternalDirectoryWithHttpInfo(configId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'configId' is set

      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling deleteExternalDirectory");
      }

      var pathParams = {
        'ConfigId': configId
      };
      var queryParams = {
        'Config.ConfigId': opts['configConfigId'],
        'Config.DomainName': opts['configDomainName'],
        'Config.Host': opts['configHost'],
        'Config.Connection': opts['configConnection'],
        'Config.BindDN': opts['configBindDN'],
        'Config.BindPW': opts['configBindPW'],
        'Config.BindAnonymous': opts['configBindAnonymous'],
        'Config.SkipVerifyCertificate': opts['configSkipVerifyCertificate'],
        'Config.RootCA': opts['configRootCA'],
        'Config.RootCAData': opts['configRootCAData'],
        'Config.PageSize': opts['configPageSize'],
        'Config.User.DNs': this.apiClient.buildCollectionParam(opts['configUserDNs'], 'multi'),
        'Config.User.Filter': opts['configUserFilter'],
        'Config.User.IDAttribute': opts['configUserIDAttribute'],
        'Config.User.DisplayAttribute': opts['configUserDisplayAttribute'],
        'Config.User.Scope': opts['configUserScope'],
        'Config.MemberOfMapping.Mapping.LeftAttribute': opts['configMemberOfMappingMappingLeftAttribute'],
        'Config.MemberOfMapping.Mapping.RightAttribute': opts['configMemberOfMappingMappingRightAttribute'],
        'Config.MemberOfMapping.Mapping.RuleString': opts['configMemberOfMappingMappingRuleString'],
        'Config.MemberOfMapping.Mapping.RolePrefix': opts['configMemberOfMappingMappingRolePrefix'],
        'Config.MemberOfMapping.GroupFilter.DNs': this.apiClient.buildCollectionParam(opts['configMemberOfMappingGroupFilterDNs'], 'multi'),
        'Config.MemberOfMapping.GroupFilter.Filter': opts['configMemberOfMappingGroupFilterFilter'],
        'Config.MemberOfMapping.GroupFilter.IDAttribute': opts['configMemberOfMappingGroupFilterIDAttribute'],
        'Config.MemberOfMapping.GroupFilter.DisplayAttribute': opts['configMemberOfMappingGroupFilterDisplayAttribute'],
        'Config.MemberOfMapping.GroupFilter.Scope': opts['configMemberOfMappingGroupFilterScope'],
        'Config.MemberOfMapping.SupportNestedGroup': opts['configMemberOfMappingSupportNestedGroup'],
        'Config.MemberOfMapping.RealMemberOf': opts['configMemberOfMappingRealMemberOf'],
        'Config.MemberOfMapping.RealMemberOfAttribute': opts['configMemberOfMappingRealMemberOfAttribute'],
        'Config.MemberOfMapping.RealMemberOfValueFormat': opts['configMemberOfMappingRealMemberOfValueFormat'],
        'Config.MemberOfMapping.PydioMemberOfAttribute': opts['configMemberOfMappingPydioMemberOfAttribute'],
        'Config.MemberOfMapping.PydioMemberOfValueFormat': opts['configMemberOfMappingPydioMemberOfValueFormat'],
        'Config.RolePrefix': opts['configRolePrefix'],
        'Config.Schedule': opts['configSchedule'],
        'Config.SchedulerDetails': opts['configSchedulerDetails'],
        'Config.SyncOnly': opts['configSyncOnly']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntExternalDirectoryResponse["default"];
      return this.apiClient.callApi('/config/directories/{ConfigId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Delete external directory
     * @param {String} configId Id of the external directory
     * @param {Object} opts Optional parameters
     * @param {String} opts.configConfigId 
     * @param {String} opts.configDomainName 
     * @param {String} opts.configHost 
     * @param {String} opts.configConnection 
     * @param {String} opts.configBindDN 
     * @param {String} opts.configBindPW 
     * @param {Boolean} opts.configBindAnonymous 
     * @param {Boolean} opts.configSkipVerifyCertificate 
     * @param {String} opts.configRootCA 
     * @param {String} opts.configRootCAData To be converted to []byte.
     * @param {Number} opts.configPageSize 
     * @param {Array.<String>} opts.configUserDNs 
     * @param {String} opts.configUserFilter 
     * @param {String} opts.configUserIDAttribute 
     * @param {String} opts.configUserDisplayAttribute 
     * @param {String} opts.configUserScope 
     * @param {String} opts.configMemberOfMappingMappingLeftAttribute 
     * @param {String} opts.configMemberOfMappingMappingRightAttribute 
     * @param {String} opts.configMemberOfMappingMappingRuleString 
     * @param {String} opts.configMemberOfMappingMappingRolePrefix 
     * @param {Array.<String>} opts.configMemberOfMappingGroupFilterDNs 
     * @param {String} opts.configMemberOfMappingGroupFilterFilter 
     * @param {String} opts.configMemberOfMappingGroupFilterIDAttribute 
     * @param {String} opts.configMemberOfMappingGroupFilterDisplayAttribute 
     * @param {String} opts.configMemberOfMappingGroupFilterScope 
     * @param {Boolean} opts.configMemberOfMappingSupportNestedGroup 
     * @param {Boolean} opts.configMemberOfMappingRealMemberOf 
     * @param {String} opts.configMemberOfMappingRealMemberOfAttribute 
     * @param {String} opts.configMemberOfMappingRealMemberOfValueFormat 
     * @param {String} opts.configMemberOfMappingPydioMemberOfAttribute 
     * @param {String} opts.configMemberOfMappingPydioMemberOfValueFormat 
     * @param {String} opts.configRolePrefix 
     * @param {String} opts.configSchedule 
     * @param {String} opts.configSchedulerDetails 
     * @param {Boolean} opts.configSyncOnly 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntExternalDirectoryResponse}
     */

  }, {
    key: "deleteExternalDirectory",
    value: function deleteExternalDirectory(configId, opts) {
      return this.deleteExternalDirectoryWithHttpInfo(configId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Delete an oauth2 client
     * @param {String} clientId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientName 
     * @param {String} opts.clientSecret 
     * @param {Array.<String>} opts.redirectUris 
     * @param {Array.<String>} opts.grantTypes 
     * @param {Array.<String>} opts.responseTypes 
     * @param {String} opts.scope 
     * @param {Array.<String>} opts.audience 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ClientResponse} and HTTP response
     */

  }, {
    key: "deleteOAuth2ClientWithHttpInfo",
    value: function deleteOAuth2ClientWithHttpInfo(clientId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteOAuth2Client");
      }

      var pathParams = {
        'client_id': clientId
      };
      var queryParams = {
        'client_name': opts['clientName'],
        'client_secret': opts['clientSecret'],
        'redirect_uris': this.apiClient.buildCollectionParam(opts['redirectUris'], 'multi'),
        'grant_types': this.apiClient.buildCollectionParam(opts['grantTypes'], 'multi'),
        'response_types': this.apiClient.buildCollectionParam(opts['responseTypes'], 'multi'),
        'scope': opts['scope'],
        'audience': this.apiClient.buildCollectionParam(opts['audience'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ClientResponse["default"];
      return this.apiClient.callApi('/config/oauth2clients/{client_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Delete an oauth2 client
     * @param {String} clientId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientName 
     * @param {String} opts.clientSecret 
     * @param {Array.<String>} opts.redirectUris 
     * @param {Array.<String>} opts.grantTypes 
     * @param {Array.<String>} opts.responseTypes 
     * @param {String} opts.scope 
     * @param {Array.<String>} opts.audience 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ClientResponse}
     */

  }, {
    key: "deleteOAuth2Client",
    value: function deleteOAuth2Client(clientId, opts) {
      return this.deleteOAuth2ClientWithHttpInfo(clientId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Delete an oauth2 client
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.type 
     * @param {String} opts.name 
     * @param {String} opts.configoidcIssuer 
     * @param {String} opts.configoidcClientID 
     * @param {String} opts.configoidcClientSecret 
     * @param {String} opts.configoidcRedirectURI 
     * @param {Boolean} opts.configoidcBasicAuthUnsupported 
     * @param {Array.<String>} opts.configoidcHostedDomains 
     * @param {Array.<String>} opts.configoidcScopes 
     * @param {Boolean} opts.configoidcInsecureSkipEmailVerified 
     * @param {Boolean} opts.configoidcGetUserInfo 
     * @param {String} opts.configoidcUserIDKey 
     * @param {String} opts.configoidcUserNameKey 
     * @param {String} opts.configsamlSsoURL 
     * @param {String} opts.configsamlCa 
     * @param {String} opts.configsamlRedirectURI 
     * @param {String} opts.configsamlUsernameAttr 
     * @param {String} opts.configsamlEmailAttr 
     * @param {String} opts.configsamlGroupsAttr 
     * @param {String} opts.configsamlCaData 
     * @param {Boolean} opts.configsamlInsecureSkipSignatureValidation 
     * @param {String} opts.configsamlEntityIssuer 
     * @param {String} opts.configsamlSsoIssuer 
     * @param {String} opts.configsamlGroupsDelim 
     * @param {String} opts.configsamlNameIDPolicyFormat 
     * @param {String} opts.configbitbucketClientID 
     * @param {String} opts.configbitbucketClientSecret 
     * @param {String} opts.configbitbucketRedirectURI 
     * @param {Array.<String>} opts.configbitbucketTeams 
     * @param {String} opts.configgithubClientID 
     * @param {String} opts.configgithubClientSecret 
     * @param {String} opts.configgithubRedirectURI 
     * @param {Boolean} opts.configgithubLoadAllGroups 
     * @param {String} opts.configgithubTeamNameField 
     * @param {Boolean} opts.configgithubUseLoginAsID 
     * @param {String} opts.configgithubHostName For GitHub enterprise.
     * @param {String} opts.configgithubRootCA 
     * @param {String} opts.configgitlabBaseURL 
     * @param {String} opts.configgitlabClientID 
     * @param {String} opts.configgitlabClientSecret 
     * @param {String} opts.configgitlabRedirectURI 
     * @param {Array.<String>} opts.configgitlabGroups 
     * @param {Boolean} opts.configgitlabUserLoginAsID 
     * @param {String} opts.configlinkedinClientID 
     * @param {String} opts.configlinkedinClientSecret 
     * @param {String} opts.configlinkedinRedirectURI 
     * @param {String} opts.configmicrosoftClientID 
     * @param {String} opts.configmicrosoftClientSecret 
     * @param {String} opts.configmicrosoftRedirectURI 
     * @param {String} opts.configmicrosoftTenant 
     * @param {Array.<String>} opts.configmicrosoftGroups 
     * @param {Boolean} opts.configmicrosoftOnlySecurityGroups 
     * @param {String} opts.configmicrosoftGroupNameFormat 
     * @param {Boolean} opts.configmicrosoftUseGroupsAsWhitelist 
     * @param {String} opts.configldapConfigId 
     * @param {String} opts.configldapDomainName 
     * @param {String} opts.configldapHost 
     * @param {String} opts.configldapConnection 
     * @param {String} opts.configldapBindDN 
     * @param {String} opts.configldapBindPW 
     * @param {Boolean} opts.configldapBindAnonymous 
     * @param {Boolean} opts.configldapSkipVerifyCertificate 
     * @param {String} opts.configldapRootCA 
     * @param {String} opts.configldapRootCAData To be converted to []byte.
     * @param {Number} opts.configldapPageSize 
     * @param {Array.<String>} opts.configldapUserDNs 
     * @param {String} opts.configldapUserFilter 
     * @param {String} opts.configldapUserIDAttribute 
     * @param {String} opts.configldapUserDisplayAttribute 
     * @param {String} opts.configldapUserScope 
     * @param {String} opts.configldapMemberOfMappingMappingLeftAttribute 
     * @param {String} opts.configldapMemberOfMappingMappingRightAttribute 
     * @param {String} opts.configldapMemberOfMappingMappingRuleString 
     * @param {String} opts.configldapMemberOfMappingMappingRolePrefix 
     * @param {Array.<String>} opts.configldapMemberOfMappingGroupFilterDNs 
     * @param {String} opts.configldapMemberOfMappingGroupFilterFilter 
     * @param {String} opts.configldapMemberOfMappingGroupFilterIDAttribute 
     * @param {String} opts.configldapMemberOfMappingGroupFilterDisplayAttribute 
     * @param {String} opts.configldapMemberOfMappingGroupFilterScope 
     * @param {Boolean} opts.configldapMemberOfMappingSupportNestedGroup 
     * @param {Boolean} opts.configldapMemberOfMappingRealMemberOf 
     * @param {String} opts.configldapMemberOfMappingRealMemberOfAttribute 
     * @param {String} opts.configldapMemberOfMappingRealMemberOfValueFormat 
     * @param {String} opts.configldapMemberOfMappingPydioMemberOfAttribute 
     * @param {String} opts.configldapMemberOfMappingPydioMemberOfValueFormat 
     * @param {String} opts.configldapRolePrefix 
     * @param {String} opts.configldapSchedule 
     * @param {String} opts.configldapSchedulerDetails 
     * @param {Boolean} opts.configldapSyncOnly 
     * @param {String} opts.configoauthBaseURL 
     * @param {String} opts.configoauthAuthorizeURL 
     * @param {String} opts.configoauthTokenURL 
     * @param {String} opts.configoauthUserInfoURL 
     * @param {String} opts.configoauthClientID 
     * @param {String} opts.configoauthClientSecret 
     * @param {String} opts.configoauthRedirectURI 
     * @param {Array.<String>} opts.configoauthGroups 
     * @param {Boolean} opts.configoauthUseLoginAsID 
     * @param {Boolean} opts.configoauthUseBrokenAuthHeaderProvider 
     * @param {Array.<String>} opts.sites 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ConnectorResponse} and HTTP response
     */

  }, {
    key: "deleteOAuth2ConnectorWithHttpInfo",
    value: function deleteOAuth2ConnectorWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteOAuth2Connector");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'type': opts['type'],
        'name': opts['name'],
        'configoidc.issuer': opts['configoidcIssuer'],
        'configoidc.clientID': opts['configoidcClientID'],
        'configoidc.clientSecret': opts['configoidcClientSecret'],
        'configoidc.redirectURI': opts['configoidcRedirectURI'],
        'configoidc.basicAuthUnsupported': opts['configoidcBasicAuthUnsupported'],
        'configoidc.hostedDomains': this.apiClient.buildCollectionParam(opts['configoidcHostedDomains'], 'multi'),
        'configoidc.scopes': this.apiClient.buildCollectionParam(opts['configoidcScopes'], 'multi'),
        'configoidc.insecureSkipEmailVerified': opts['configoidcInsecureSkipEmailVerified'],
        'configoidc.getUserInfo': opts['configoidcGetUserInfo'],
        'configoidc.userIDKey': opts['configoidcUserIDKey'],
        'configoidc.userNameKey': opts['configoidcUserNameKey'],
        'configsaml.ssoURL': opts['configsamlSsoURL'],
        'configsaml.ca': opts['configsamlCa'],
        'configsaml.redirectURI': opts['configsamlRedirectURI'],
        'configsaml.usernameAttr': opts['configsamlUsernameAttr'],
        'configsaml.emailAttr': opts['configsamlEmailAttr'],
        'configsaml.groupsAttr': opts['configsamlGroupsAttr'],
        'configsaml.caData': opts['configsamlCaData'],
        'configsaml.insecureSkipSignatureValidation': opts['configsamlInsecureSkipSignatureValidation'],
        'configsaml.entityIssuer': opts['configsamlEntityIssuer'],
        'configsaml.ssoIssuer': opts['configsamlSsoIssuer'],
        'configsaml.groupsDelim': opts['configsamlGroupsDelim'],
        'configsaml.nameIDPolicyFormat': opts['configsamlNameIDPolicyFormat'],
        'configbitbucket.clientID': opts['configbitbucketClientID'],
        'configbitbucket.clientSecret': opts['configbitbucketClientSecret'],
        'configbitbucket.redirectURI': opts['configbitbucketRedirectURI'],
        'configbitbucket.teams': this.apiClient.buildCollectionParam(opts['configbitbucketTeams'], 'multi'),
        'configgithub.clientID': opts['configgithubClientID'],
        'configgithub.clientSecret': opts['configgithubClientSecret'],
        'configgithub.redirectURI': opts['configgithubRedirectURI'],
        'configgithub.loadAllGroups': opts['configgithubLoadAllGroups'],
        'configgithub.teamNameField': opts['configgithubTeamNameField'],
        'configgithub.useLoginAsID': opts['configgithubUseLoginAsID'],
        'configgithub.hostName': opts['configgithubHostName'],
        'configgithub.rootCA': opts['configgithubRootCA'],
        'configgitlab.baseURL': opts['configgitlabBaseURL'],
        'configgitlab.clientID': opts['configgitlabClientID'],
        'configgitlab.clientSecret': opts['configgitlabClientSecret'],
        'configgitlab.redirectURI': opts['configgitlabRedirectURI'],
        'configgitlab.groups': this.apiClient.buildCollectionParam(opts['configgitlabGroups'], 'multi'),
        'configgitlab.userLoginAsID': opts['configgitlabUserLoginAsID'],
        'configlinkedin.clientID': opts['configlinkedinClientID'],
        'configlinkedin.clientSecret': opts['configlinkedinClientSecret'],
        'configlinkedin.redirectURI': opts['configlinkedinRedirectURI'],
        'configmicrosoft.clientID': opts['configmicrosoftClientID'],
        'configmicrosoft.clientSecret': opts['configmicrosoftClientSecret'],
        'configmicrosoft.redirectURI': opts['configmicrosoftRedirectURI'],
        'configmicrosoft.tenant': opts['configmicrosoftTenant'],
        'configmicrosoft.groups': this.apiClient.buildCollectionParam(opts['configmicrosoftGroups'], 'multi'),
        'configmicrosoft.onlySecurityGroups': opts['configmicrosoftOnlySecurityGroups'],
        'configmicrosoft.groupNameFormat': opts['configmicrosoftGroupNameFormat'],
        'configmicrosoft.useGroupsAsWhitelist': opts['configmicrosoftUseGroupsAsWhitelist'],
        'configldap.ConfigId': opts['configldapConfigId'],
        'configldap.DomainName': opts['configldapDomainName'],
        'configldap.Host': opts['configldapHost'],
        'configldap.Connection': opts['configldapConnection'],
        'configldap.BindDN': opts['configldapBindDN'],
        'configldap.BindPW': opts['configldapBindPW'],
        'configldap.BindAnonymous': opts['configldapBindAnonymous'],
        'configldap.SkipVerifyCertificate': opts['configldapSkipVerifyCertificate'],
        'configldap.RootCA': opts['configldapRootCA'],
        'configldap.RootCAData': opts['configldapRootCAData'],
        'configldap.PageSize': opts['configldapPageSize'],
        'configldap.User.DNs': this.apiClient.buildCollectionParam(opts['configldapUserDNs'], 'multi'),
        'configldap.User.Filter': opts['configldapUserFilter'],
        'configldap.User.IDAttribute': opts['configldapUserIDAttribute'],
        'configldap.User.DisplayAttribute': opts['configldapUserDisplayAttribute'],
        'configldap.User.Scope': opts['configldapUserScope'],
        'configldap.MemberOfMapping.Mapping.LeftAttribute': opts['configldapMemberOfMappingMappingLeftAttribute'],
        'configldap.MemberOfMapping.Mapping.RightAttribute': opts['configldapMemberOfMappingMappingRightAttribute'],
        'configldap.MemberOfMapping.Mapping.RuleString': opts['configldapMemberOfMappingMappingRuleString'],
        'configldap.MemberOfMapping.Mapping.RolePrefix': opts['configldapMemberOfMappingMappingRolePrefix'],
        'configldap.MemberOfMapping.GroupFilter.DNs': this.apiClient.buildCollectionParam(opts['configldapMemberOfMappingGroupFilterDNs'], 'multi'),
        'configldap.MemberOfMapping.GroupFilter.Filter': opts['configldapMemberOfMappingGroupFilterFilter'],
        'configldap.MemberOfMapping.GroupFilter.IDAttribute': opts['configldapMemberOfMappingGroupFilterIDAttribute'],
        'configldap.MemberOfMapping.GroupFilter.DisplayAttribute': opts['configldapMemberOfMappingGroupFilterDisplayAttribute'],
        'configldap.MemberOfMapping.GroupFilter.Scope': opts['configldapMemberOfMappingGroupFilterScope'],
        'configldap.MemberOfMapping.SupportNestedGroup': opts['configldapMemberOfMappingSupportNestedGroup'],
        'configldap.MemberOfMapping.RealMemberOf': opts['configldapMemberOfMappingRealMemberOf'],
        'configldap.MemberOfMapping.RealMemberOfAttribute': opts['configldapMemberOfMappingRealMemberOfAttribute'],
        'configldap.MemberOfMapping.RealMemberOfValueFormat': opts['configldapMemberOfMappingRealMemberOfValueFormat'],
        'configldap.MemberOfMapping.PydioMemberOfAttribute': opts['configldapMemberOfMappingPydioMemberOfAttribute'],
        'configldap.MemberOfMapping.PydioMemberOfValueFormat': opts['configldapMemberOfMappingPydioMemberOfValueFormat'],
        'configldap.RolePrefix': opts['configldapRolePrefix'],
        'configldap.Schedule': opts['configldapSchedule'],
        'configldap.SchedulerDetails': opts['configldapSchedulerDetails'],
        'configldap.SyncOnly': opts['configldapSyncOnly'],
        'configoauth.baseURL': opts['configoauthBaseURL'],
        'configoauth.authorizeURL': opts['configoauthAuthorizeURL'],
        'configoauth.tokenURL': opts['configoauthTokenURL'],
        'configoauth.userInfoURL': opts['configoauthUserInfoURL'],
        'configoauth.clientID': opts['configoauthClientID'],
        'configoauth.clientSecret': opts['configoauthClientSecret'],
        'configoauth.redirectURI': opts['configoauthRedirectURI'],
        'configoauth.groups': this.apiClient.buildCollectionParam(opts['configoauthGroups'], 'multi'),
        'configoauth.useLoginAsID': opts['configoauthUseLoginAsID'],
        'configoauth.useBrokenAuthHeaderProvider': opts['configoauthUseBrokenAuthHeaderProvider'],
        'sites': this.apiClient.buildCollectionParam(opts['sites'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ConnectorResponse["default"];
      return this.apiClient.callApi('/config/oauth2connectors/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Delete an oauth2 client
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.type 
     * @param {String} opts.name 
     * @param {String} opts.configoidcIssuer 
     * @param {String} opts.configoidcClientID 
     * @param {String} opts.configoidcClientSecret 
     * @param {String} opts.configoidcRedirectURI 
     * @param {Boolean} opts.configoidcBasicAuthUnsupported 
     * @param {Array.<String>} opts.configoidcHostedDomains 
     * @param {Array.<String>} opts.configoidcScopes 
     * @param {Boolean} opts.configoidcInsecureSkipEmailVerified 
     * @param {Boolean} opts.configoidcGetUserInfo 
     * @param {String} opts.configoidcUserIDKey 
     * @param {String} opts.configoidcUserNameKey 
     * @param {String} opts.configsamlSsoURL 
     * @param {String} opts.configsamlCa 
     * @param {String} opts.configsamlRedirectURI 
     * @param {String} opts.configsamlUsernameAttr 
     * @param {String} opts.configsamlEmailAttr 
     * @param {String} opts.configsamlGroupsAttr 
     * @param {String} opts.configsamlCaData 
     * @param {Boolean} opts.configsamlInsecureSkipSignatureValidation 
     * @param {String} opts.configsamlEntityIssuer 
     * @param {String} opts.configsamlSsoIssuer 
     * @param {String} opts.configsamlGroupsDelim 
     * @param {String} opts.configsamlNameIDPolicyFormat 
     * @param {String} opts.configbitbucketClientID 
     * @param {String} opts.configbitbucketClientSecret 
     * @param {String} opts.configbitbucketRedirectURI 
     * @param {Array.<String>} opts.configbitbucketTeams 
     * @param {String} opts.configgithubClientID 
     * @param {String} opts.configgithubClientSecret 
     * @param {String} opts.configgithubRedirectURI 
     * @param {Boolean} opts.configgithubLoadAllGroups 
     * @param {String} opts.configgithubTeamNameField 
     * @param {Boolean} opts.configgithubUseLoginAsID 
     * @param {String} opts.configgithubHostName For GitHub enterprise.
     * @param {String} opts.configgithubRootCA 
     * @param {String} opts.configgitlabBaseURL 
     * @param {String} opts.configgitlabClientID 
     * @param {String} opts.configgitlabClientSecret 
     * @param {String} opts.configgitlabRedirectURI 
     * @param {Array.<String>} opts.configgitlabGroups 
     * @param {Boolean} opts.configgitlabUserLoginAsID 
     * @param {String} opts.configlinkedinClientID 
     * @param {String} opts.configlinkedinClientSecret 
     * @param {String} opts.configlinkedinRedirectURI 
     * @param {String} opts.configmicrosoftClientID 
     * @param {String} opts.configmicrosoftClientSecret 
     * @param {String} opts.configmicrosoftRedirectURI 
     * @param {String} opts.configmicrosoftTenant 
     * @param {Array.<String>} opts.configmicrosoftGroups 
     * @param {Boolean} opts.configmicrosoftOnlySecurityGroups 
     * @param {String} opts.configmicrosoftGroupNameFormat 
     * @param {Boolean} opts.configmicrosoftUseGroupsAsWhitelist 
     * @param {String} opts.configldapConfigId 
     * @param {String} opts.configldapDomainName 
     * @param {String} opts.configldapHost 
     * @param {String} opts.configldapConnection 
     * @param {String} opts.configldapBindDN 
     * @param {String} opts.configldapBindPW 
     * @param {Boolean} opts.configldapBindAnonymous 
     * @param {Boolean} opts.configldapSkipVerifyCertificate 
     * @param {String} opts.configldapRootCA 
     * @param {String} opts.configldapRootCAData To be converted to []byte.
     * @param {Number} opts.configldapPageSize 
     * @param {Array.<String>} opts.configldapUserDNs 
     * @param {String} opts.configldapUserFilter 
     * @param {String} opts.configldapUserIDAttribute 
     * @param {String} opts.configldapUserDisplayAttribute 
     * @param {String} opts.configldapUserScope 
     * @param {String} opts.configldapMemberOfMappingMappingLeftAttribute 
     * @param {String} opts.configldapMemberOfMappingMappingRightAttribute 
     * @param {String} opts.configldapMemberOfMappingMappingRuleString 
     * @param {String} opts.configldapMemberOfMappingMappingRolePrefix 
     * @param {Array.<String>} opts.configldapMemberOfMappingGroupFilterDNs 
     * @param {String} opts.configldapMemberOfMappingGroupFilterFilter 
     * @param {String} opts.configldapMemberOfMappingGroupFilterIDAttribute 
     * @param {String} opts.configldapMemberOfMappingGroupFilterDisplayAttribute 
     * @param {String} opts.configldapMemberOfMappingGroupFilterScope 
     * @param {Boolean} opts.configldapMemberOfMappingSupportNestedGroup 
     * @param {Boolean} opts.configldapMemberOfMappingRealMemberOf 
     * @param {String} opts.configldapMemberOfMappingRealMemberOfAttribute 
     * @param {String} opts.configldapMemberOfMappingRealMemberOfValueFormat 
     * @param {String} opts.configldapMemberOfMappingPydioMemberOfAttribute 
     * @param {String} opts.configldapMemberOfMappingPydioMemberOfValueFormat 
     * @param {String} opts.configldapRolePrefix 
     * @param {String} opts.configldapSchedule 
     * @param {String} opts.configldapSchedulerDetails 
     * @param {Boolean} opts.configldapSyncOnly 
     * @param {String} opts.configoauthBaseURL 
     * @param {String} opts.configoauthAuthorizeURL 
     * @param {String} opts.configoauthTokenURL 
     * @param {String} opts.configoauthUserInfoURL 
     * @param {String} opts.configoauthClientID 
     * @param {String} opts.configoauthClientSecret 
     * @param {String} opts.configoauthRedirectURI 
     * @param {Array.<String>} opts.configoauthGroups 
     * @param {Boolean} opts.configoauthUseLoginAsID 
     * @param {Boolean} opts.configoauthUseBrokenAuthHeaderProvider 
     * @param {Array.<String>} opts.sites 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ConnectorResponse}
     */

  }, {
    key: "deleteOAuth2Connector",
    value: function deleteOAuth2Connector(id, opts) {
      return this.deleteOAuth2ConnectorWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Delete a versioning policy
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {String} opts.versionsDataSourceName 
     * @param {String} opts.versionsDataSourceBucket 
     * @param {String} opts.maxTotalSize 
     * @param {String} opts.maxSizePerFile 
     * @param {String} opts.ignoreFilesGreaterThan 
     * @param {module:model/String} opts.nodeDeletedStrategy  (default to 'KeepAll')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntDeleteVersioningPolicyResponse} and HTTP response
     */

  }, {
    key: "deleteVersioningPolicyWithHttpInfo",
    value: function deleteVersioningPolicyWithHttpInfo(uuid, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteVersioningPolicy");
      }

      var pathParams = {
        'Uuid': uuid
      };
      var queryParams = {
        'Name': opts['name'],
        'Description': opts['description'],
        'VersionsDataSourceName': opts['versionsDataSourceName'],
        'VersionsDataSourceBucket': opts['versionsDataSourceBucket'],
        'MaxTotalSize': opts['maxTotalSize'],
        'MaxSizePerFile': opts['maxSizePerFile'],
        'IgnoreFilesGreaterThan': opts['ignoreFilesGreaterThan'],
        'NodeDeletedStrategy': opts['nodeDeletedStrategy']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntDeleteVersioningPolicyResponse["default"];
      return this.apiClient.callApi('/config/versioning/{Uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Delete a versioning policy
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {String} opts.versionsDataSourceName 
     * @param {String} opts.versionsDataSourceBucket 
     * @param {String} opts.maxTotalSize 
     * @param {String} opts.maxSizePerFile 
     * @param {String} opts.ignoreFilesGreaterThan 
     * @param {module:model/String} opts.nodeDeletedStrategy  (default to 'KeepAll')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntDeleteVersioningPolicyResponse}
     */

  }, {
    key: "deleteVersioningPolicy",
    value: function deleteVersioningPolicy(uuid, opts) {
      return this.deleteVersioningPolicyWithHttpInfo(uuid, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Delete a virtual node
     * @param {String} uuid ------------------------------------ Core identification of the node ------------------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.path 
     * @param {module:model/String} opts.type  (default to 'UNKNOWN')
     * @param {String} opts.size Size of the file, or cumulated size of folder.
     * @param {String} opts.mTime Last modification Timestamp.
     * @param {Number} opts.mode Permission mode, like 0777.
     * @param {String} opts.etag Hash of the content if node is a LEAF, Uuid or.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntDeleteVirtualNodeResponse} and HTTP response
     */

  }, {
    key: "deleteVirtualNodeWithHttpInfo",
    value: function deleteVirtualNodeWithHttpInfo(uuid, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteVirtualNode");
      }

      var pathParams = {
        'Uuid': uuid
      };
      var queryParams = {
        'Path': opts['path'],
        'Type': opts['type'],
        'Size': opts['size'],
        'MTime': opts['mTime'],
        'Mode': opts['mode'],
        'Etag': opts['etag']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntDeleteVirtualNodeResponse["default"];
      return this.apiClient.callApi('/config/virtualnodes/{Uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Delete a virtual node
     * @param {String} uuid ------------------------------------ Core identification of the node ------------------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.path 
     * @param {module:model/String} opts.type  (default to 'UNKNOWN')
     * @param {String} opts.size Size of the file, or cumulated size of folder.
     * @param {String} opts.mTime Last modification Timestamp.
     * @param {Number} opts.mode Permission mode, like 0777.
     * @param {String} opts.etag Hash of the content if node is a LEAF, Uuid or.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntDeleteVirtualNodeResponse}
     */

  }, {
    key: "deleteVirtualNode",
    value: function deleteVirtualNode(uuid, opts) {
      return this.deleteVirtualNodeWithHttpInfo(uuid, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] List additional user directories
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntExternalDirectoryCollection} and HTTP response
     */

  }, {
    key: "listExternalDirectoriesWithHttpInfo",
    value: function listExternalDirectoriesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntExternalDirectoryCollection["default"];
      return this.apiClient.callApi('/config/directories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] List additional user directories
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntExternalDirectoryCollection}
     */

  }, {
    key: "listExternalDirectories",
    value: function listExternalDirectories() {
      return this.listExternalDirectoriesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] List oauth2 clients
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ClientCollection} and HTTP response
     */

  }, {
    key: "listOAuth2ClientsWithHttpInfo",
    value: function listOAuth2ClientsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ClientCollection["default"];
      return this.apiClient.callApi('/config/oauth2clients', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] List oauth2 clients
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ClientCollection}
     */

  }, {
    key: "listOAuth2Clients",
    value: function listOAuth2Clients() {
      return this.listOAuth2ClientsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] List oauth2 connectors
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ConnectorCollection} and HTTP response
     */

  }, {
    key: "listOAuth2ConnectorsWithHttpInfo",
    value: function listOAuth2ConnectorsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ConnectorCollection["default"];
      return this.apiClient.callApi('/config/oauth2connectors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] List oauth2 connectors
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ConnectorCollection}
     */

  }, {
    key: "listOAuth2Connectors",
    value: function listOAuth2Connectors() {
      return this.listOAuth2ConnectorsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] List configured sites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntListSitesResponse} and HTTP response
     */

  }, {
    key: "listSitesWithHttpInfo",
    value: function listSitesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntListSitesResponse["default"];
      return this.apiClient.callApi('/config/sites', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] List configured sites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntListSitesResponse}
     */

  }, {
    key: "listSites",
    value: function listSites() {
      return this.listSitesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Sends an arbitrary config and try to ping the server and bind
     * @param {module:model/EntExternalDirectoryPingRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntExternalDirectoryTestResponse} and HTTP response
     */

  }, {
    key: "pingExternalDirectoryWithHttpInfo",
    value: function pingExternalDirectoryWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pingExternalDirectory");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntExternalDirectoryTestResponse["default"];
      return this.apiClient.callApi('/config/directories-test/ping', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Sends an arbitrary config and try to ping the server and bind
     * @param {module:model/EntExternalDirectoryPingRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntExternalDirectoryTestResponse}
     */

  }, {
    key: "pingExternalDirectory",
    value: function pingExternalDirectory(body) {
      return this.pingExternalDirectoryWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Add/Create an external directory
     * @param {String} configId Id of the external directory
     * @param {module:model/EntExternalDirectoryConfig} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntExternalDirectoryResponse} and HTTP response
     */

  }, {
    key: "putExternalDirectoryWithHttpInfo",
    value: function putExternalDirectoryWithHttpInfo(configId, body) {
      var postBody = body; // verify the required parameter 'configId' is set

      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling putExternalDirectory");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putExternalDirectory");
      }

      var pathParams = {
        'ConfigId': configId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntExternalDirectoryResponse["default"];
      return this.apiClient.callApi('/config/directories/{ConfigId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Add/Create an external directory
     * @param {String} configId Id of the external directory
     * @param {module:model/EntExternalDirectoryConfig} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntExternalDirectoryResponse}
     */

  }, {
    key: "putExternalDirectory",
    value: function putExternalDirectory(configId, body) {
      return this.putExternalDirectoryWithHttpInfo(configId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {String} clientId 
     * @param {module:model/InlineObject} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ClientResponse} and HTTP response
     */

  }, {
    key: "putOAuth2ClientWithHttpInfo",
    value: function putOAuth2ClientWithHttpInfo(clientId, body) {
      var postBody = body; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling putOAuth2Client");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putOAuth2Client");
      }

      var pathParams = {
        'client_id': clientId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ClientResponse["default"];
      return this.apiClient.callApi('/config/oauth2clients/{client_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {String} clientId 
     * @param {module:model/InlineObject} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ClientResponse}
     */

  }, {
    key: "putOAuth2Client",
    value: function putOAuth2Client(clientId, body) {
      return this.putOAuth2ClientWithHttpInfo(clientId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {String} id 
     * @param {module:model/InlineObject1} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ConnectorResponse} and HTTP response
     */

  }, {
    key: "putOAuth2ConnectorWithHttpInfo",
    value: function putOAuth2ConnectorWithHttpInfo(id, body) {
      var postBody = body; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putOAuth2Connector");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putOAuth2Connector");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ConnectorResponse["default"];
      return this.apiClient.callApi('/config/oauth2connectors/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {String} id 
     * @param {module:model/InlineObject1} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ConnectorResponse}
     */

  }, {
    key: "putOAuth2Connector",
    value: function putOAuth2Connector(id, body) {
      return this.putOAuth2ConnectorWithHttpInfo(id, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {module:model/AuthOAuth2ConnectorCollection} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ConnectorResponse} and HTTP response
     */

  }, {
    key: "putOAuth2ConnectorsWithHttpInfo",
    value: function putOAuth2ConnectorsWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putOAuth2Connectors");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ConnectorResponse["default"];
      return this.apiClient.callApi('/config/oauth2connectors', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {module:model/AuthOAuth2ConnectorCollection} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ConnectorResponse}
     */

  }, {
    key: "putOAuth2Connectors",
    value: function putOAuth2Connectors(body) {
      return this.putOAuth2ConnectorsWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Create or update a versioning policy
     * @param {String} uuid 
     * @param {module:model/InlineObject2} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TreeVersioningPolicy} and HTTP response
     */

  }, {
    key: "putVersioningPolicyWithHttpInfo",
    value: function putVersioningPolicyWithHttpInfo(uuid, body) {
      var postBody = body; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling putVersioningPolicy");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putVersioningPolicy");
      }

      var pathParams = {
        'Uuid': uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TreeVersioningPolicy["default"];
      return this.apiClient.callApi('/config/versioning/{Uuid}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Create or update a versioning policy
     * @param {String} uuid 
     * @param {module:model/InlineObject2} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TreeVersioningPolicy}
     */

  }, {
    key: "putVersioningPolicy",
    value: function putVersioningPolicy(uuid, body) {
      return this.putVersioningPolicyWithHttpInfo(uuid, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Create or update a virtual node
     * @param {String} uuid ------------------------------------ Core identification of the node ------------------------------------
     * @param {module:model/InlineObject3} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TreeNode} and HTTP response
     */

  }, {
    key: "putVirtualNodeWithHttpInfo",
    value: function putVirtualNodeWithHttpInfo(uuid, body) {
      var postBody = body; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling putVirtualNode");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putVirtualNode");
      }

      var pathParams = {
        'Uuid': uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TreeNode["default"];
      return this.apiClient.callApi('/config/virtualnodes/{Uuid}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Create or update a virtual node
     * @param {String} uuid ------------------------------------ Core identification of the node ------------------------------------
     * @param {module:model/InlineObject3} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TreeNode}
     */

  }, {
    key: "putVirtualNode",
    value: function putVirtualNode(uuid, body) {
      return this.putVirtualNodeWithHttpInfo(uuid, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Sends an arbitrary config and try to ldapsearch using a given SearchFilter
     * @param {module:model/EntExternalDirectorySearchRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntExternalDirectoryTestResponse} and HTTP response
     */

  }, {
    key: "searchExternalDirectoryWithHttpInfo",
    value: function searchExternalDirectoryWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchExternalDirectory");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntExternalDirectoryTestResponse["default"];
      return this.apiClient.callApi('/config/directories-test/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Sends an arbitrary config and try to ldapsearch using a given SearchFilter
     * @param {module:model/EntExternalDirectorySearchRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntExternalDirectoryTestResponse}
     */

  }, {
    key: "searchExternalDirectory",
    value: function searchExternalDirectory(body) {
      return this.searchExternalDirectoryWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EnterpriseConfigServiceApi;
}();

exports["default"] = EnterpriseConfigServiceApi;
//# sourceMappingURL=EnterpriseConfigServiceApi.js.map
