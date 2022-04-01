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
import InstallTLSCertificate from './InstallTLSCertificate';
import InstallTLSLetsEncrypt from './InstallTLSLetsEncrypt';
import InstallTLSSelfSigned from './InstallTLSSelfSigned';

/**
 * The InstallProxyConfig model module.
 * @module model/InstallProxyConfig
 * @version 2.0
 */
class InstallProxyConfig {
    /**
     * Constructs a new <code>InstallProxyConfig</code>.
     * @alias module:model/InstallProxyConfig
     */
    constructor() { 
        
        InstallProxyConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstallProxyConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallProxyConfig} obj Optional instance to populate.
     * @return {module:model/InstallProxyConfig} The populated <code>InstallProxyConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstallProxyConfig();

            if (data.hasOwnProperty('Binds')) {
                obj['Binds'] = ApiClient.convertToType(data['Binds'], ['String']);
            }
            if (data.hasOwnProperty('Certificate')) {
                obj['Certificate'] = InstallTLSCertificate.constructFromObject(data['Certificate']);
            }
            if (data.hasOwnProperty('LetsEncrypt')) {
                obj['LetsEncrypt'] = InstallTLSLetsEncrypt.constructFromObject(data['LetsEncrypt']);
            }
            if (data.hasOwnProperty('Maintenance')) {
                obj['Maintenance'] = ApiClient.convertToType(data['Maintenance'], 'Boolean');
            }
            if (data.hasOwnProperty('MaintenanceConditions')) {
                obj['MaintenanceConditions'] = ApiClient.convertToType(data['MaintenanceConditions'], ['String']);
            }
            if (data.hasOwnProperty('ReverseProxyURL')) {
                obj['ReverseProxyURL'] = ApiClient.convertToType(data['ReverseProxyURL'], 'String');
            }
            if (data.hasOwnProperty('SSLRedirect')) {
                obj['SSLRedirect'] = ApiClient.convertToType(data['SSLRedirect'], 'Boolean');
            }
            if (data.hasOwnProperty('SelfSigned')) {
                obj['SelfSigned'] = InstallTLSSelfSigned.constructFromObject(data['SelfSigned']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} Binds
 */
InstallProxyConfig.prototype['Binds'] = undefined;

/**
 * @member {module:model/InstallTLSCertificate} Certificate
 */
InstallProxyConfig.prototype['Certificate'] = undefined;

/**
 * @member {module:model/InstallTLSLetsEncrypt} LetsEncrypt
 */
InstallProxyConfig.prototype['LetsEncrypt'] = undefined;

/**
 * @member {Boolean} Maintenance
 */
InstallProxyConfig.prototype['Maintenance'] = undefined;

/**
 * @member {Array.<String>} MaintenanceConditions
 */
InstallProxyConfig.prototype['MaintenanceConditions'] = undefined;

/**
 * @member {String} ReverseProxyURL
 */
InstallProxyConfig.prototype['ReverseProxyURL'] = undefined;

/**
 * @member {Boolean} SSLRedirect
 */
InstallProxyConfig.prototype['SSLRedirect'] = undefined;

/**
 * @member {module:model/InstallTLSSelfSigned} SelfSigned
 */
InstallProxyConfig.prototype['SelfSigned'] = undefined;






export default InstallProxyConfig;

