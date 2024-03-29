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

/**
 * The AuthOAuth2ConnectorLinkedinConfig model module.
 * @module model/AuthOAuth2ConnectorLinkedinConfig
 * @version 2.0
 */
class AuthOAuth2ConnectorLinkedinConfig {
    /**
     * Constructs a new <code>AuthOAuth2ConnectorLinkedinConfig</code>.
     * @alias module:model/AuthOAuth2ConnectorLinkedinConfig
     */
    constructor() { 
        
        AuthOAuth2ConnectorLinkedinConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthOAuth2ConnectorLinkedinConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorLinkedinConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorLinkedinConfig} The populated <code>AuthOAuth2ConnectorLinkedinConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthOAuth2ConnectorLinkedinConfig();

            if (data.hasOwnProperty('clientID')) {
                obj['clientID'] = ApiClient.convertToType(data['clientID'], 'String');
            }
            if (data.hasOwnProperty('clientSecret')) {
                obj['clientSecret'] = ApiClient.convertToType(data['clientSecret'], 'String');
            }
            if (data.hasOwnProperty('redirectURI')) {
                obj['redirectURI'] = ApiClient.convertToType(data['redirectURI'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} clientID
 */
AuthOAuth2ConnectorLinkedinConfig.prototype['clientID'] = undefined;

/**
 * @member {String} clientSecret
 */
AuthOAuth2ConnectorLinkedinConfig.prototype['clientSecret'] = undefined;

/**
 * @member {String} redirectURI
 */
AuthOAuth2ConnectorLinkedinConfig.prototype['redirectURI'] = undefined;






export default AuthOAuth2ConnectorLinkedinConfig;

