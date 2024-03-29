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
 * The AuthOAuth2ConnectorMockConfig model module.
 * @module model/AuthOAuth2ConnectorMockConfig
 * @version 2.0
 */
class AuthOAuth2ConnectorMockConfig {
    /**
     * Constructs a new <code>AuthOAuth2ConnectorMockConfig</code>.
     * @alias module:model/AuthOAuth2ConnectorMockConfig
     */
    constructor() { 
        
        AuthOAuth2ConnectorMockConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthOAuth2ConnectorMockConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorMockConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorMockConfig} The populated <code>AuthOAuth2ConnectorMockConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthOAuth2ConnectorMockConfig();

            if (data.hasOwnProperty('jsonIdentity')) {
                obj['jsonIdentity'] = ApiClient.convertToType(data['jsonIdentity'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} jsonIdentity
 */
AuthOAuth2ConnectorMockConfig.prototype['jsonIdentity'] = undefined;






export default AuthOAuth2ConnectorMockConfig;

