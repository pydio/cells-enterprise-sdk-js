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
import AuthLdapMapping from './AuthLdapMapping';
import AuthLdapMemberOfMapping from './AuthLdapMemberOfMapping';
import AuthLdapSearchFilter from './AuthLdapSearchFilter';

/**
 * The AuthLdapServerConfig model module.
 * @module model/AuthLdapServerConfig
 * @version 2.0
 */
class AuthLdapServerConfig {
    /**
     * Constructs a new <code>AuthLdapServerConfig</code>.
     * @alias module:model/AuthLdapServerConfig
     */
    constructor() { 
        
        AuthLdapServerConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthLdapServerConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthLdapServerConfig} obj Optional instance to populate.
     * @return {module:model/AuthLdapServerConfig} The populated <code>AuthLdapServerConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthLdapServerConfig();

            if (data.hasOwnProperty('BindAnonymous')) {
                obj['BindAnonymous'] = ApiClient.convertToType(data['BindAnonymous'], 'Boolean');
            }
            if (data.hasOwnProperty('BindDN')) {
                obj['BindDN'] = ApiClient.convertToType(data['BindDN'], 'String');
            }
            if (data.hasOwnProperty('BindPW')) {
                obj['BindPW'] = ApiClient.convertToType(data['BindPW'], 'String');
            }
            if (data.hasOwnProperty('ConfigId')) {
                obj['ConfigId'] = ApiClient.convertToType(data['ConfigId'], 'String');
            }
            if (data.hasOwnProperty('Connection')) {
                obj['Connection'] = ApiClient.convertToType(data['Connection'], 'String');
            }
            if (data.hasOwnProperty('DomainName')) {
                obj['DomainName'] = ApiClient.convertToType(data['DomainName'], 'String');
            }
            if (data.hasOwnProperty('Host')) {
                obj['Host'] = ApiClient.convertToType(data['Host'], 'String');
            }
            if (data.hasOwnProperty('MappingRules')) {
                obj['MappingRules'] = ApiClient.convertToType(data['MappingRules'], [AuthLdapMapping]);
            }
            if (data.hasOwnProperty('MemberOfMapping')) {
                obj['MemberOfMapping'] = AuthLdapMemberOfMapping.constructFromObject(data['MemberOfMapping']);
            }
            if (data.hasOwnProperty('PageSize')) {
                obj['PageSize'] = ApiClient.convertToType(data['PageSize'], 'Number');
            }
            if (data.hasOwnProperty('RolePrefix')) {
                obj['RolePrefix'] = ApiClient.convertToType(data['RolePrefix'], 'String');
            }
            if (data.hasOwnProperty('RootCA')) {
                obj['RootCA'] = ApiClient.convertToType(data['RootCA'], 'String');
            }
            if (data.hasOwnProperty('RootCAData')) {
                obj['RootCAData'] = ApiClient.convertToType(data['RootCAData'], 'String');
            }
            if (data.hasOwnProperty('Schedule')) {
                obj['Schedule'] = ApiClient.convertToType(data['Schedule'], 'String');
            }
            if (data.hasOwnProperty('SchedulerDetails')) {
                obj['SchedulerDetails'] = ApiClient.convertToType(data['SchedulerDetails'], 'String');
            }
            if (data.hasOwnProperty('SkipVerifyCertificate')) {
                obj['SkipVerifyCertificate'] = ApiClient.convertToType(data['SkipVerifyCertificate'], 'Boolean');
            }
            if (data.hasOwnProperty('SyncOnly')) {
                obj['SyncOnly'] = ApiClient.convertToType(data['SyncOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = AuthLdapSearchFilter.constructFromObject(data['User']);
            }
        }
        return obj;
    }


}

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






export default AuthLdapServerConfig;

