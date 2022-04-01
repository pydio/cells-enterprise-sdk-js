/**
 * Pydio Cells Enterprise Rest API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AuthLdapServerConfig from './AuthLdapServerConfig';
import AuthOAuth2ConnectorBitbucketConfig from './AuthOAuth2ConnectorBitbucketConfig';
import AuthOAuth2ConnectorGithubConfig from './AuthOAuth2ConnectorGithubConfig';
import AuthOAuth2ConnectorGitlabConfig from './AuthOAuth2ConnectorGitlabConfig';
import AuthOAuth2ConnectorLinkedinConfig from './AuthOAuth2ConnectorLinkedinConfig';
import AuthOAuth2ConnectorMicrosoftConfig from './AuthOAuth2ConnectorMicrosoftConfig';
import AuthOAuth2ConnectorOAuthConfig from './AuthOAuth2ConnectorOAuthConfig';
import AuthOAuth2ConnectorOIDCConfig from './AuthOAuth2ConnectorOIDCConfig';
import AuthOAuth2ConnectorPydioConfig from './AuthOAuth2ConnectorPydioConfig';
import AuthOAuth2ConnectorSAMLConfig from './AuthOAuth2ConnectorSAMLConfig';
import AuthOAuth2MappingRule from './AuthOAuth2MappingRule';

/**
 * The AuthOAuth2ConnectorConfig model module.
 * @module model/AuthOAuth2ConnectorConfig
 * @version 2.0
 */
class AuthOAuth2ConnectorConfig {
    /**
     * Constructs a new <code>AuthOAuth2ConnectorConfig</code>.
     * @alias module:model/AuthOAuth2ConnectorConfig
     */
    constructor() { 
        
        AuthOAuth2ConnectorConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthOAuth2ConnectorConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorConfig} The populated <code>AuthOAuth2ConnectorConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthOAuth2ConnectorConfig();

            if (data.hasOwnProperty('configbitbucket')) {
                obj['configbitbucket'] = AuthOAuth2ConnectorBitbucketConfig.constructFromObject(data['configbitbucket']);
            }
            if (data.hasOwnProperty('configgithub')) {
                obj['configgithub'] = AuthOAuth2ConnectorGithubConfig.constructFromObject(data['configgithub']);
            }
            if (data.hasOwnProperty('configgitlab')) {
                obj['configgitlab'] = AuthOAuth2ConnectorGitlabConfig.constructFromObject(data['configgitlab']);
            }
            if (data.hasOwnProperty('configldap')) {
                obj['configldap'] = AuthLdapServerConfig.constructFromObject(data['configldap']);
            }
            if (data.hasOwnProperty('configlinkedin')) {
                obj['configlinkedin'] = AuthOAuth2ConnectorLinkedinConfig.constructFromObject(data['configlinkedin']);
            }
            if (data.hasOwnProperty('configmicrosoft')) {
                obj['configmicrosoft'] = AuthOAuth2ConnectorMicrosoftConfig.constructFromObject(data['configmicrosoft']);
            }
            if (data.hasOwnProperty('configoauth')) {
                obj['configoauth'] = AuthOAuth2ConnectorOAuthConfig.constructFromObject(data['configoauth']);
            }
            if (data.hasOwnProperty('configoidc')) {
                obj['configoidc'] = AuthOAuth2ConnectorOIDCConfig.constructFromObject(data['configoidc']);
            }
            if (data.hasOwnProperty('configpydio')) {
                obj['configpydio'] = AuthOAuth2ConnectorPydioConfig.constructFromObject(data['configpydio']);
            }
            if (data.hasOwnProperty('configsaml')) {
                obj['configsaml'] = AuthOAuth2ConnectorSAMLConfig.constructFromObject(data['configsaml']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('mappingRules')) {
                obj['mappingRules'] = ApiClient.convertToType(data['mappingRules'], [AuthOAuth2MappingRule]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sites')) {
                obj['sites'] = ApiClient.convertToType(data['sites'], ['String']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

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






export default AuthOAuth2ConnectorConfig;

